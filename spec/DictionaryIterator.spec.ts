
import {DictionaryIterator, IDictionaryIteratorResult} from '../src/DictionaryIterator';

interface IKeyPair {
    name: string;
    value: number;
}

describe('DictionaryIterator', () => {
    let data: IKeyPair = {
        name: 'Norman Breau',
        value: 28
    };

    let iterator: DictionaryIterator<any> = null;

    beforeEach(() => {
        iterator = new DictionaryIterator<any>(data);
    });

    it('constructs', () => {
        expect(iterator instanceof DictionaryIterator).toBe(true);
    });

    it('next()', () => {
        expect(iterator.next()).toEqual({
            key: 'name',
            value: 'Norman Breau'
        });
        expect(iterator.next()).toEqual({
            key: 'value',
            value: 28
        });
    });

    it('previous()', () => {
        iterator.next();
        iterator.next();

        let p1: IDictionaryIteratorResult<any> = iterator.previous();
        let p2: IDictionaryIteratorResult<any> = iterator.previous();

        expect(p1).withContext(JSON.stringify(p1)).toEqual({
            key: 'value',
            value: 28
        });
        expect(p2).withContext(JSON.stringify(p2)).toEqual({
            key: 'name',
            value: 'Norman Breau'
        });
    });
});
