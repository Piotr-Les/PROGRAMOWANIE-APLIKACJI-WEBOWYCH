function GameLogger(name: string) {
	return (target: any, propKey: string, descriptor: PropertyDescriptor) => {
		const originalFn = target[propKey];
		descriptor.value = function (param: any) {
			console.log(`Game ${name} is being played`);
			return originalFn.call(this, param);
		};
	};
}
export { GameLogger };
