
import {Iterator} from '../src/Iterator';

describe('Iterator', () => {
    let iterator: Iterator<number>;

    beforeEach(() => {
        let data: Array<number> = [
            1,
            2,
            3
        ];

        iterator = new Iterator<number>(data);
    });

    describe('Constructs with custom index position', () => {
        it('Iterator', () => {
            let iter: Iterator<number> = new Iterator<number>([
                1,
                2,
                3
            ], 0);
            expect(iter.hasPrevious()).toBe(false);
            expect(iter.next()).toBe(1);
            expect(iter.next()).toBe(2);
            expect(iter.next()).toBe(3);
        });
    });

    describe('hasNext()', () => {
        it('Iterator', () => {
            expect(iterator.hasNext()).toBe(true);
            iterator.next();
            iterator.next();
            iterator.next();
            expect(iterator.hasNext()).toBe(false);
        });
    });

    describe('next()', () => {
        it('Iterator', () => {
            expect(iterator.next()).toBe(1);
            expect(iterator.next()).toBe(2);
            expect(iterator.next()).toBe(3);
        });
    });

    describe('hasPrevious()', () => {
        it('Iterator', () => {
            expect(iterator.hasPrevious()).toBe(false);
            iterator.next();
            expect(iterator.hasPrevious()).toBe(true);
        });
    });

    describe('previous()', () => {
        it('Iterator', () => {
            iterator.next();
            iterator.next();
            iterator.next();
            expect(iterator.previous()).toBe(3);
            expect(iterator.previous()).toBe(2);
            expect(iterator.previous()).toBe(1);
        });
    });

    describe('reset()', () => {
        it('Iterator', () => {
            iterator.next();
            iterator.next();
            iterator.reset();
            expect(iterator.next()).toBe(1);
        });
    });

    describe('bringToStart()', () => {
        it('Iterator', () => {
            iterator.next();
            iterator.next();
            iterator.reset();
            expect(iterator.next()).toBe(1);
        });
    });

    describe('bringToEnd()', () => {
        it('Iterator', () => {
            iterator.bringToEnd();
            expect(iterator.previous()).toBe(3);
        });
    });

    describe('peekNextIndex()', () => {
        it('Iterator', () => {
            expect(iterator.peekNextIndex()).toBe(0);
            expect(iterator.next()).toBe(1);
            expect(iterator.peekNextIndex()).toBe(1);
            expect(iterator.next()).toBe(2);
            expect(iterator.peekNextIndex()).toBe(2);
            expect(iterator.next()).toBe(3);
        });
    });

    describe('peekNextIndex()', () => {
        it('Iterator', () => {
            iterator.bringToEnd();
            expect(iterator.peekPreviousIndex()).toBe(2);
            expect(iterator.previous()).toBe(3);
            expect(iterator.peekPreviousIndex()).toBe(1);
            expect(iterator.previous()).toBe(2);
            expect(iterator.peekPreviousIndex()).toBe(0);
            expect(iterator.previous()).toBe(1);
        });
    });

    describe('incrementIndex()', () => {
        it('Iterator', () => {
            iterator.incrementIndex();
            expect(iterator.next()).toBe(2);
        });
    });

    describe('decrementIndex()', () => {
        it('Iterator', () => {
            iterator.bringToEnd();
            iterator.decrementIndex();
            expect(iterator.next()).toBe(3);
        });
    });
});
