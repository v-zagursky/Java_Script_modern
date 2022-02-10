const { expect } = require('@jest/globals');
const  {degreeFn}  = require('../src/util.js')
test('2 во 2 степени = 4', () => {
	expect(degreeFn(2, 2)).toBe(4);
});
test('-2 в 5 степени = 4', () => {
	expect(degreeFn(-2, 5)).toBe(-32);
});
test ('10 в -6 степени', ()=>{
	expect(degreeFn(10,-6)).toBe(0.000001)
});
test ('0 в -6 степени', ()=>{
	expect(degreeFn(0,-6)).toBe(0)
});
test ('2 в 0 степени', ()=>{
	expect(degreeFn(2,0)).toBe(1)
});