import {State} from "../state.js";
import {Vector} from "../vector.js";
import {DrawFunction} from "./function.js";
import {drawLine} from "./utils.js";

/**
 * @implements {DrawFunction}
 */
export class DrawBox {
  /**
   * @param {!State} state
   */
  constructor(state) {
    this.state = state;
    /** @type {?Vector} */ this.startPosition = null;
  }

  /** @inheritDoc */
  start(position) {
    this.startPosition = position;
  }

  /** @inheritDoc */
  move(position) {
    this.state.clearDraw();
    drawLine(this.state, this.startPosition, position, true);
    drawLine(this.state, this.startPosition, position, false);
  }

  /** @inheritDoc */
  end() {
    this.state.commitDraw();
  }

  /** @inheritDoc */
  getCursor(position) {
    return "crosshair";
  }

  /** @inheritDoc */
  handleKey(value) {}
}
