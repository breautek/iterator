
export class Iterator<T> {
    private _collection: Array<T>;
    private _cursor: number;

    constructor(collection: Array<T> = [], index: number = 0) {
        this._collection = collection;
        this._cursor = index;
    }

    public hasNext(): boolean {
        return Object.prototype.hasOwnProperty.call(this._collection, this._getIndex());
    }

    public next(): T {
        let data: T = this._collection[this._getIndex()];
        this.incrementIndex();
        return data;
    }

    public hasPrevious(): boolean {
        return Object.prototype.hasOwnProperty.call(this._collection, this.peekPreviousIndex());
    }

    public previous(): T {
        this.decrementIndex();
        let data: T = this._collection[this._cursor];
        return data;
    }

    public reset(): void {
        this.bringToStart();
    }

    public bringToStart(): void {
        this._cursor = 0;
    }

    public bringToEnd(): void {
        this._cursor = this._collection.length;
    }

    public peekNextIndex(): number {
        return this._cursor;
    }

    public peekPreviousIndex(): number {
        return this._cursor - 1;
    }

    public incrementIndex(): number {
        this._cursor += 1;
        return this._cursor;
    }

    public decrementIndex(): number {
        this._cursor -= 1;
        return this._cursor;
    }

    private _getIndex(): number {
        return this._cursor;
    }
}

export default Iterator;
