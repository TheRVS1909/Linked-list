//let i = 0;

class LinkedList {
	constructor(props) {
		//	this.i = props.i;
		this.value = props.value;
		this.next = props.next;
	};

	searchCurrentEl(el, n, counter) {
		if (n === 0) return
		if (!counter) { counter = 1 };
		if (counter === n) return el
		else if (!el.next) return
		else return this.searchCurrentEl(el.next, n, counter + 1);
	}

	addElList(el, n) {
		let currentEl = this.searchCurrentEl(el, n);
		let newList = new LinkedList({ value: 3, next: currentEl });
		let prevEl = this.searchCurrentEl(el, n - 1);
		prevEl.next = newList;
	}

	deleteElList(el, n) {
		let prevEl = this.searchCurrentEl(linkedList, n - 1);
		let nextEl = this.searchCurrentEl(linkedList, n + 1);
		el = null;
		if (prevEl) {
			if (nextEl) {
				prevEl.next = nextEl;
			} else prevEl.next = null;
		}
	}

	filterElList(el, filterNumber, counter) {
		if (!counter) { counter = 1 };
		if (el) {
			this.filterElList(el.next, filterNumber, counter + 1);
			if (el.value > filterNumber) {
				this.deleteElList(el, counter);
			}
		}
	}

	enumerationElList(el, func) {
		if (el) {
			el.value = func(el.value);
			this.enumerationElList(el.next, func);
		}
	}

	sortElList(el, counter) {
		if (!counter) { counter = 1 };
		if (!el) return
		if (!el.next) return
		if (el.value > el.next.value) {
			console.log(el.value);
			console.log(el.next.value);
			this.changeElList(el, counter);
		}
		this.sortElList(el.next, counter + 1);
	}

	changeElList(el, n) {
		let prevEl = this.searchCurrentEl(linkedList, n - 1);
		let currentEl = el;
		let nextEl = el.next;

		if (!el.next.next) {
			prevEl.next = nextEl;
			nextEl.next = currentEl;
			currentEl.next = null
		}

		let nextNextEl = el.next.next;

		console.log(`${prevEl.value} ${el.value} ${nextEl.value} ${nextNextEl.value}`);

		prevEl.next = nextEl;

		nextEl.next = currentEl;

		(nextNextEl) ? currentEl.next = nextNextEl : currentEl.next = null;

		console.log(`${prevEl.value} ${prevEl.next.value} ${prevEl.next.next.value} ${prevEl.next.next.next.value}`);

		return
	}
};

let linkedList = new LinkedList({ value: 1, next: null });

const createElementLinkedList = (n) => {
	let counter = 0;
	let copyList;
	for (let i = 0; i < n; i++) {
		let value = getRandomInt(2, 22);
		let list = new LinkedList({ value: value, next: null })
		if (counter === 0) {
			linkedList.next = list;
			counter++;
		} else {
			copyList.next = list;
		}
		copyList = list;
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

createElementLinkedList(5);

linkedList.addElList(linkedList, 2);
linkedList.addElList(linkedList, 5);

linkedList.deleteElList(linkedList, 4);

//console.log(linkedList.searchCurrentEl(linkedList, 3));

//linkedList.filterElList(linkedList, 10);

//linkedList.enumerationElList(linkedList, n => n * 7);

console.log(linkedList);

linkedList.sortElList(linkedList);

console.log(linkedList);