/**
 * Holds the entire state of the diagram as a 2D array of cells
 * and provides methods to modify the current state.
 *
 * @constructor
 */
ascii.State = function() {
  /** @type {Array.<Array.<ascii.Cell>>} */
  this.cells = new Array(MAX_GRID_SIZE);
  /** @type {Array.<ascii.Cell>} */
  this.scratchCells = new Array();

  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i] = new Array(MAX_GRID_SIZE);
    for (var j = 0; j < this.cells[i].length; j++) {
      this.cells[i][j] = new ascii.Cell();
    }
  }
};

/**
 * Returns the cell at the given coordinates.
 *
 * @param {ascii.Vector} vector
 * @return {ascii.Cell}
 */
ascii.State.prototype.getCell = function(vector) {
  return this.cells[vector.x][vector.y];
};

/**
 * Sets the cells value at the given position. Probably shouldn't
 * be used directly in many cases. Used drawValue instead.
 *
 * @param {ascii.Vector} position
 * @param {?string} value
 */
ascii.State.prototype.setValue = function(position, value) {
  this.getCell(position).value = value;
};

/**
 * Sets the cells scratch (uncommitted) value at the given position.
 *
 * @param {ascii.Vector} position
 * @param {?string} value
 */
ascii.State.prototype.drawValue = function(position, value) {
  var cell = this.getCell(position);
  this.scratchCells.push(cell);
  cell.scratchValue = value;
};

/**
 * Clears the current drawing scratchpad.
 */
ascii.State.prototype.clearDraw = function() {
  for (var i in this.scratchCells) {
    this.scratchCells[i].scratchValue = null;
  }
  this.scratchCells.length = 0;
};

/**
 * Returns the draw value of a cell at the given position.
 *
 * @param {ascii.Vector} position
 * @return {?string}
 */
ascii.State.prototype.getDrawValue = function(position) {
  var cell = this.getCell(position);
  var value = cell.scratchValue != null ? cell.scratchValue : cell.value;
  if (value != SPECIAL_VALUE) {
    return value;
  }

  // Magic time.
  var context = this.getContext(position);

  if (context.left && context.right && !context.up && !context.down) {
    return SPECIAL_LINE_H;
  }
  if (!context.left && !context.right && context.up && context.down) {
    return SPECIAL_LINE_V;
  }
  if (context.left && context.right && context.up && context.down) {
    return SPECIAL_LINE_H;
  }
  return SPECIAL_VALUE;
};

/**
 * @param {ascii.Vector} position
 * @return {ascii.CellContext}
 */
ascii.State.prototype.getContext = function(position) {
  var left = this.getCell(position.add(new ascii.Vector(-1, 0))).isSpecial();
  var right = this.getCell(position.add(new ascii.Vector(1, 0))).isSpecial();
  var up = this.getCell(position.add(new ascii.Vector(0, -1))).isSpecial();
  var down = this.getCell(position.add(new ascii.Vector(0, 1))).isSpecial();
  return new ascii.CellContext(left, right, up, down);
};

/**
 * Ends the current draw, commiting anything currently drawn the scratchpad.
 */
ascii.State.prototype.commitDraw = function() {
  for (var i in this.scratchCells) {
    var newValue = this.scratchCells[i].getRawValue();
    // Cheeky little hack for making erase play nicely.
    if (newValue == ' ') {
      newValue = null;
    }
    this.scratchCells[i].scratchValue = null;
    this.scratchCells[i].value = newValue;
  }
};
