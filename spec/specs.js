describe('findFactorial', function() {
  it("Factorial of 5 is 120", function() {
    expect(findFactorial(5)).to.equal(120);
    });

  it("Factorial of 0 is 1", function() {
    expect(findFactorial(0)).to.equal(1);
  });

  it("Factorial of 10 is 3,628,800", function() {
    expect(findFactorial(10)).to.equal(3628800);
  });

});


describe('findFactorialRecursion', function() {
  it("Factorial of 5 is 120", function() {
    expect(findFactorialRecursion(5)).to.equal(120);
    });

  // it("Factorial of 0 is 1", function() {
  //   expect(findFactorialRecursion(0, 1)).to.equal(1);
  // });

  // it("Factorial of 10 is 3,628,800", function() {
  //   expect(findFactorialRecursion(10)).to.equal(3628800);
  // });

});
