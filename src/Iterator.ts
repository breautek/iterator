
export class Iterator<T> {
    private collection: Array<T>;
    private cursor: number;

    constructor(collection: Array<T> = [], index: number = -1) {
        this.collection = collection;
        this.cursor = index;
    }

    public hasNext(): boolean {
        return !!this.collection[this.peekNextIndex()];
    }

    public next(): T {
        return this.collection[this.incrementIndex()];
    }

    public hasPrevious(): boolean {
        return !!this.collection[this.peekPreviousIndex()];
    }

    public previous(): T {
        return this.collection[this.decrementIndex()];
    }

    public reset(): void {
        this.bringToStart();
    }

    public bringToStart(): void {
        this.cursor = -1;
    }

    public bringToEnd(): void {
        this.cursor = this.collection.length - 1;
    }

    public peekNextIndex(): number {
        return this.cursor + 1;
    }

    public peekPreviousIndex(): number {
        return this.cursor;
    }

    public incrementIndex(): number {
        return ++this.cursor;
    }

    public decrementIndex(): number {
        return this.cursor--;
    }
}

export default Iterator;
