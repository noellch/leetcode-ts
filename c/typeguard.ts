/* in */
type Cat = {
    isMeow: boolean;
};

type Dog = {
    isBark: boolean;
};

type Animal = Cat | Dog;

const getNoise = (animal: Animal) => {
    if ('isBark' in animal) {
        console.log(animal.isBark);
    }

    if ('isMeow' in animal) {
        console.log(animal.isBark);
        // error
    }
};

/* typeof and instanceof */
const isUnknown: unknown = 'hello, unknown';

if (typeof isUnknown === 'string') {
    isUnknown.split(', ');
}

if (isUnknown instanceof Promise) {
    isUnknown.then((x: unknown) => x).catch((err: Error) => err);
}

/* discriminated Unions and unreachable Error */
enum STATUS_DESCRIPTION {
    OK = 'OK',
    ERROR = 'ERROR',
}

interface ISuccessResp {
    status: STATUS_DESCRIPTION.OK;
    payload: unknown;
}

interface IErrorResp {
    status: STATUS_DESCRIPTION.ERROR;
    errorCode: number;
    description: string;
}

type Resp = ISuccessResp | IErrorResp;

const parseResponse = (resp: Resp) => {
    switch (resp.status) {
        case STATUS_DESCRIPTION.OK: {
            const { payload } = resp;
            return payload;
        }

        case STATUS_DESCRIPTION.ERROR: {
            const { errorCode, description } = resp;
            return description;
        }

        default:
            // 避免沒定義到的情況
            const _exhaustiveCheck: never = resp;
            return _exhaustiveCheck;
    }
};

/* User-defined type guards */
let isUnknown2: unknown = 'hello unknown';

function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function isString(x: any): x is string {
    return typeof x === 'string';
}

if (isNumber(isUnknown2)) {
    isUnknown2.toFixed();
}

if (isString(isUnknown2)) {
    isUnknown2.split(', ');
}

// is type of
function isTypeof<T>(value: unknown, prim: T): value is T {
    if (prim === null) {
        return value === null;
    }
    return value !== null && typeof prim === typeof value;
}

// is defined
// 一定要加上 | undefined
function isDefined<T>(arg: T | undefined): arg is T {
    return typeof arg !== 'undefined';
}

// is present
export function isPresent<T>(arg: T | undefined | null): arg is T {
    return arg !== null && typeof arg !== 'undefined';
}

// assert 斷言 arr 一定是 string[]，不然會報錯
function assertIsStringArray(arr: any[]): asserts arr is string[] {
    const hasNonString = arr.some((item) => typeof item !== 'string');
    if (hasNonString) throw new Error('not an array of string!');
}

const arr = [1, 2, 3, null, undefined];
const filteredArr = arr.filter((item) => !!item);
// filteredArr 這邊型別還是 (number | null | undefined)[]

const filteredArrFixed = arr.filter((item): item is number => !!item);
// filteredArrFixed 型別變成 number[]

// 若是 array of obj 的話
const arr2 = [{ age: 10 }, { age: 20 }, { age: 30 }, null, undefined];
const filteredArr2 = arr2.filter((item) => !!item);

// 可以用 isDefined 或 isPresent
const filteredArr2Fixed = arr2.filter(isPresent);
// { age: number }[]
