import { getFizzBuzz } from './fizzBuzz';

describe('FizzBuzz', () => {
	const divByThreeTestCases = [3, 6, 9, 12];
	it.each(divByThreeTestCases)(
		'should return Fizz when given number dividable by 3 and not divadable by 5',
		arg => {
			expect(getFizzBuzz(arg)).toEqual('Fizz');
		}
	);

	const divByFiveTestCases = [5, 10, 20, 40];
	it.each(divByFiveTestCases)(
		'should return Bazz when given number dividable by 5 and not divadable by 3',
		arg => {
			expect(getFizzBuzz(arg)).toEqual('Buzz');
		}
	);

	const divByFiveAndThreeTestCases = [15, 30, 45, 60, 75, 90];
	it.each(divByFiveAndThreeTestCases)(
		'should return FizzBazz when given number dividable by 5 && divadable by 3',
		arg => {
			expect(getFizzBuzz(arg)).toEqual('FizzBuzz');
		}
	);

	const notDivByThreeOrFive = [1, 2, 4, 8, 13, 14];
	it.each(notDivByThreeOrFive)(
		'should return arg when given number not dividable by 5 && not divadable by 3',
		arg => {
			expect(getFizzBuzz(arg)).toEqual(arg);
		}
	);
});
