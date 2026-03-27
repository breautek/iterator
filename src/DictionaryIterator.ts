import {Iterator} from './Iterator';

export interface IDictionary {
    [key: string]: any;
}

export interface IDictionaryIteratorResult<T> {
    key: string;
    value: T;
}

export class DictionaryIterator<T> extends Iterator<any> {
    private $dictionary: IDictionary;

    public constructor(dictionary: IDictionary) {
        super(Object.keys(dictionary));
        this.$dictionary = dictionary;
    }

    public next(): IDictionaryIteratorResult<T> {
        let key: string = super.next();
        return {
            key : key,
            value : this.$dictionary[key]
        };
    }

    public previous(): IDictionaryIteratorResult<T> {
        let key: string = super.previous();
        return {
            key : key,
            value : this.$dictionary[key]
        };
    }
}
