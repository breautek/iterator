
import {Iterator} from '../src/Iterator';
import {ReverseIterator} from '../src/ReverseIterator';

describe('Iterator', () => {
    var iterator: Iterator<number>;
    var reverse: ReverseIterator<number>;

    beforeEach(() => {
        const data: Array<number> = [
            1,
            2,
            3
        ];

        iterator = new Iterator<number>(data);
        reverse = new ReverseIterator<number>(data);
    });

    describe('Constructs with custom index position', () => {
        it('Iterator', () => {
            var iter: Iterator<number> = new Iterator<number>([
                1,
                2,
                3
            ], 0);
            expect(iter.hasPrevious()).toBe(true);
            expect(iter.next()).toBe(2);
            expect(iter.next()).toBe(3);
        });

        it('ReverseIterator', () => {
            var iter: ReverseIterator<number> = new ReverseIterator<number>([
                1,
                2,
                3
            ], 2);
            expect(iter.hasPrevious()).toBe(true);
            expect(iter.next()).toBe(3);
            expect(iter.next()).toBe(2);
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

        it('ReverseIterator', () => {
            expect(reverse.hasNext()).toBe(true);
            reverse.next();
            reverse.next();
            reverse.next();
            expect(reverse.hasNext()).toBe(false);
        });
    });

    describe('next()', () => {
        it('Iterator', () => {
            expect(iterator.next()).toBe(1);
            expect(iterator.next()).toBe(2);
            expect(iterator.next()).toBe(3);
        });

        it('ReverseIterator', () => {
            expect(reverse.next()).toBe(3);
            expect(reverse.next()).toBe(2);
            expect(reverse.next()).toBe(1);
        });
    });

    describe('hasPrevious()', () => {
        it('Iterator', () => {
            expect(iterator.hasPrevious()).toBe(false);
            iterator.next();
            expect(iterator.hasPrevious()).toBe(true);
        });

        it('ReverseIterator', () => {
            expect(reverse.hasPrevious()).toBe(false);
            reverse.next();
            expect(reverse.hasPrevious()).toBe(true);
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
        
        it('ReverseIterator', () => {
            reverse.next();
            reverse.next();
            reverse.next();
            expect(reverse.previous()).toBe(1);
            expect(reverse.previous()).toBe(2);
            expect(reverse.previous()).toBe(3);
        });
    });

    describe('reset()', () => {
        it('Iterator', () => {
            iterator.next();
            iterator.next();
            iterator.reset();
            expect(iterator.next()).toBe(1);
        });

        it('ReverseIterator', () => {
            reverse.next();
            reverse.next();
            reverse.reset();
            expect(reverse.next()).toBe(3);
        });
    });

    describe('bringToStart()', () => {
        it('Iterator', () => {
            iterator.next();
            iterator.next();
            iterator.reset();
            expect(iterator.next()).toBe(1);
        });

        it('ReverseIterator', () => {
            reverse.next();
            reverse.next();
            reverse.reset();
            expect(reverse.next()).toBe(3);
        });
    });

    describe('bringToEnd()', () => {
        it('Iterator', () => {
            iterator.bringToEnd();
            expect(iterator.previous()).toBe(3);
        });

        it('ReverseIterator', () => {
            reverse.bringToEnd();
            expect(reverse.previous()).toBe(1);
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

        it('ReverseIterator', () => {
            expect(reverse.peekNextIndex()).toBe(2);
            expect(reverse.next()).toBe(3);
            expect(reverse.peekNextIndex()).toBe(1);
            expect(reverse.next()).toBe(2);
            expect(reverse.peekNextIndex()).toBe(0);
            expect(reverse.next()).toBe(1);
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

        it('ReverseIterator', () => {
            reverse.bringToEnd();
            expect(reverse.peekPreviousIndex()).toBe(0);
            expect(reverse.previous()).toBe(1);
            expect(reverse.peekPreviousIndex()).toBe(1);
            expect(reverse.previous()).toBe(2);
            expect(reverse.peekPreviousIndex()).toBe(2);
            expect(reverse.previous()).toBe(3);
        });
    });

    describe('incrementIndex()', () => {
        it('Iterator', () => {
            iterator.incrementIndex();
            expect(iterator.next()).toBe(2);
        });

        it('ReverseIterator', () => {
            reverse.incrementIndex();
            expect(reverse.next()).toBe(2);
        });
    });

    describe('decrementIndex()', () => {
        it('Iterator', () => {
            iterator.bringToEnd();
            iterator.decrementIndex();
            expect(iterator.next()).toBe(3);
        });

        it('ReverseIterator', () => {
            reverse.bringToEnd();
            reverse.decrementIndex();
            expect(reverse.next()).toBe(1);
        });
    });
});
