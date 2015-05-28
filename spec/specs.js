describe("wordOrder", function() {
  it("returns the key-value pair for a one-word sentence", function() {
    expect(wordOrder("this")).to.eql({"this": 1});
  });

  it("returns the key-value pairs for a two-word sentence", function() {
    expect(wordOrder("hey there")).to.eql({"hey": 1, "there": 1});
  })
  it("returns the key-value pairs for a two-word sentence", function() {
    expect(wordOrder("hey there there")).to.eql({"hey": 1, "there": 2});
  })

});
