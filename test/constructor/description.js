module.exports = () => {
  it("Defaults to red",() =>{
    let uut = new RedBlackNode();
    assert.strictEqual(uut.isRed,true);
  });

  it("Sets color from options.isRed",() => {
    let uut;

    uut = new RedBlackNode({ isRed: true });
    assert.strictEqual(uut.isRed,true);

    uut = new RedBlackNode({ isRed: false });
    assert.strictEqual(uut.isRed,false);
  });
};

