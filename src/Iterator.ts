/*
MIT License

Copyright (c) 2019 Norman Breau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export class Iterator<T> {
    private collection: Array<T>;
    private cursor: number;

    constructor(collection: Array<T> = [], index: number = -1) {
        this.collection = collection;
        this.cursor = index;
    }

    public hasNext(): boolean {
        // return this.cursor + 1 < this.collection.length;
        return !!this.collection[this.peekNextIndex()];
    }

    public next(): T {
        // return this.collection[++this.cursor];
        return this.collection[this.incrementIndex()];
    }

    public hasPrevious(): boolean {
        // return this.cursor > 0;
        return !!this.collection[this.peekPreviousIndex()];
    }

    public previous(): T {
        // return this.collection[this.cursor--];
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
