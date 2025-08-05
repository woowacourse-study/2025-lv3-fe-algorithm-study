function identity<T>(value: T): T {
	return value;
}

const stringValue = 'Hello';

const output = identity('Hello');