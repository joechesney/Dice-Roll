const { assert: {isFunction, isNumber} } = require('chai');
const { roll, toDiceNotation } = require("../dice");

describe('dice module',()=>{
  describe("roll()",()=>{
    it("should be a function",()=>{
      isFunction(roll);
    });
    it("should be a number",()=>{
      let result = roll("2d20");
      isNumber(result);
    })
  });
});