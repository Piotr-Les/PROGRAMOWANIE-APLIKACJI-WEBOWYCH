import Cell from '../ticTacToe/Cell';

function TotalBoardClicks() {
	let times = 1;
	return (target: any, propKey: string, descriptor: PropertyDescriptor) => {
		const originalFn = target[propKey];
		descriptor.value = function (param: any) {
			console.log(`The Board has been clicked ${times} time/s`);
			times++;
			return originalFn.call(this, param);
		};
	};
}
export { TotalBoardClicks };
