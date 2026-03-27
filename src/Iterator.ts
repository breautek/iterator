
export class Iterator<T> {
    private $collection: T[];
    private $cursor: number;

    constructor(collection: T[] = [], index: number = 0) {
        this.$collection = collection;
        this.$cursor = index;
    }

    public hasNext(): boolean {
        return Object.prototype.hasOwnProperty.call(this.$collection, this.$getIndex());
    }

    public next(): T {
        let data: T = this.$collection[this.$getIndex()];
        this.incrementIndex();
        return data;
    }

    public hasPrevious(): boolean {
        return Object.prototype.hasOwnProperty.call(this.$collection, this.peekPreviousIndex());
    }

    public previous(): T {
        this.decrementIndex();
        let data: T = this.$collection[this.$cursor];
        return data;
    }

    public reset(): void {
        this.bringToStart();
    }

    public bringToStart(): void {
        this.$cursor = 0;
    }

    public bringToEnd(): void {
        this.$cursor = this.$collection.length;
    }

    public peekNextIndex(): number {
        return this.$cursor;
    }

    public peekPreviousIndex(): number {
        return this.$cursor - 1;
    }

    public incrementIndex(): number {
        this.$cursor += 1;
        return this.$cursor;
    }

    public decrementIndex(): number {
        this.$cursor -= 1;
        return this.$cursor;
    }

    private $getIndex(): number {
        return this.$cursor;
    }
}

export default Iterator;
