function Disabled(constructorFn: Function): void {
	constructorFn.prototype.disabled = true;
}
export { Disabled };
