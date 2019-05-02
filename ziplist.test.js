/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('zipList', function () {
  const myList = ['a', 'b', 'c'];
  const myList2 = [1, 2, 3];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(myList, myList2)).to.have.length(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(myList, myList2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
describe('zipListTheSimplyWay', function () {
  const myList = ['a', 'b', 'c'];
  const myList2 = [1, 2, 3];
  describe('zipping two test arrays', function () {
    it('should return an array with six elements', function () {
      chai.expect(zipListTheSimpleWay(myList, myList2)).to.have.length(6);
    });
    it('should deeply equal to an array with six elements', function () {
      chai.expect(zipListTheSimpleWay(myList, myList2)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
