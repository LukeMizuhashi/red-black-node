const BinaryNode = require('binary-node');

module.exports = class RedBlackNode extends BinaryNode {
  constructor(options) {
    options = options || {};

    super(options)

    this.isRed = options.hasOwnProperty('isRed') ? options.isRed : true;
  }

  get isBlack() {
    return !this.isRed;
  }

  set isBlack(value) {
    this.isRed = !value;
  }
};

