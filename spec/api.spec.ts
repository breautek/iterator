
import * as api from '../src/api';

describe('Public API', () => {
    it('Iterator', () => {
        expect(api.Iterator).toBeTruthy();
    });

    it('DictionaryIterator', () => {
        expect(api.DictionaryIterator).toBeTruthy();
    });
});
