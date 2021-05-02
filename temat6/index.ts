function StandardAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn: Function): void {
	constructorFn.prototype.role = Role.Admin;
}

function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
	const originalFn = (propKey: string) => (target: Record<string, any>) =>
		target[propKey];
	descriptor.value = function (param: any) {
		console.log(`User: ${param} wants ${propKey}`);
		return originalFn.call(this, param);
	};
}
function forAdmin(target: any, propKey: string, descriptor: PropertyDescriptor) {
	const originalFn = target[propKey];
	descriptor.value = function (param: User) {
		if (param.role === Role.Admin) {
			originalFn.call(this, param);
		}
	};
}
function forModerator(target: any, propKey: string, descriptor: PropertyDescriptor) {
	const originalFn = target[propKey];
	descriptor.value = function (param: User) {
		if (param.role === Role.Moderator || param.role === Role.Admin) {
			originalFn.call(this, param);
		}
	};
}

enum Role {
	Standard = 'Standard',
	Moderator = 'Moderator',
	Admin = 'Admin',
}

class User {
	name!: string;
	surname!: string;
	role!: Role;

	toString(): string {
		return `${this.name} ${this.surname} ${this.role}`;
	}
}

@StandardAccess
class StandardUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}
@ModeratorAccess
class ModeratorUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}
@AdminAccess
class AdminUser extends User {
	constructor(name: string, surname: string) {
		super();
		this.name = name;
		this.surname = surname;
	}
}

class Resource {
	private resourceValue: string;
	constructor() {
		this.resourceValue = 'resource value';
	}

	// @watch
	@forModerator
	public read(user: User): void {
		console.log(this.resourceValue);
	}

	// @watch
	@forAdmin
	public change(user: User): void {
		this.resourceValue = 'changed resource value';
	}
}

const user1 = new StandardUser('Luke', 'Skywalker');
const user2 = new ModeratorUser('Han', 'Solo');
const user3 = new AdminUser('Obi-Wan', 'Kenobi');

const res = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log('User 1:');
res.read(user1);
res.change(user1);
console.log('User 2:');
res.read(user2);
res.change(user2);
console.log('User 3:');
res.read(user3);
res.change(user3);
res.read(user3);
