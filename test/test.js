const { assert } = require('chai');

describe("Array", ()=>{
  let testArray = [1,2,3];
  describe("indexOf()", ()=>{
    it("should return -1 when the value is not presented", ()=>{
      assert.equal(-1, testArray.indexOf(4));
    });
  });
  describe("length()", ()=>{
    it("should not be 0", ()=>{
      assert.notEqual(0, testArray.length);
      assert.equal(3, testArray.length);
    });
  });
});

