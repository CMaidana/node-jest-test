const { sum, product } = require('../src/calculator');

describe('Given calculator module', () => {

  describe('When adding two values', () => {
    it('Should 1 + 2 to equal 3', () => {
      // Arrange
      const a = 1;
      const b = 2;

      // Act 
      const result = sum(a, b);

      // Assert

      expect(result).toBe(3);
    });
  });
  
  describe('When multiplying two values', () => {
    it('Should 2 * 3 to equal 6', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act 
      const result = product(a, b);

      // Assert

      expect(result).toBe(6);
    });
  });
});