"use strict";

const randomInt = (bottom, top) =>{

  if(!top) top = 6; // no need for this line apparently??
  return Math.floor((Math.random() * +top) + +bottom);

}

module.exports = { randomInt };