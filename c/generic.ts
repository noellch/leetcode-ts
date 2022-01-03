type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type Keys<T> = keyof T & string
type Values<T> = T[keyof T]
type PickObj<T, U extends keyof T> = T[U]
type Extract<T, U> = T extends U ? T : never
type Exclude<T, U> = T extends U ? never : T
type Flatten<T> = T extends any[] ? T[number] : T
type returnType<T extends (...arg: any) => any> = T extends (...args: any) => infer R ? R : any
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

enum MANUFACTURE {
    APPLE = 'apple',
    SAMSUNG = 'samsung',
    GOOGLE = 'google',
    SONY = 'sony',
}

type M = `${MANUFACTURE}`
// get key of enum
type ManufactureKeys = keyof typeof MANUFACTURE

//recursive type aliases
type A<T> = T | A<T>[]

type SnakeToCamelCaseWithoutRecursion<T extends string> = T extends `${infer Head}_${infer Tail}`
    ? `${Uncapitalize<Head>}${Capitalize<SnakeToCamelCaseWithoutRecursion<Tail>>}`
    : T
type T1 = SnakeToCamelCaseWithoutRecursion<'this_is_snake_case'>

// get key type of object
const conference = {
    name: 'MOPCON',
    year: 2021,
    isAddToCalendar: true,
    website: 'https://mopcon.org/2021/',
}

type ConferenceKeys = keyof typeof conference

// mapped type
type SupportedEvent = {
    click: string
    change: string
    keyup?: string
    keydown: string
}

type HandledEvent = {
    [K in keyof SupportedEvent]: () => void
}

type MappedValuesToFunction<T> = {
    [K in keyof T]: () => void
}

type HandledEvent2 = MappedValuesToFunction<SupportedEvent>

type ToEventHandle<T> = {
    [K in keyof T as `handle${Capitalize<string & K>}`]: T[K] | (() => void)
}

type HandledEvent3 = ToEventHandle<SupportedEvent>

// Property Modifiers
type ToOptionalProp1<T> = {
    [K in keyof T]+?: T[K]
}

type ToOptionalProp2<T> = {
    [K in keyof T]-?: T[K]
}

type ToOptionalProp3<T> = {
    +readonly [K in keyof T]: T[K] // 最前面的 + 可以省略
}

// 把每個物件型別的屬性都移除 readonly
type ToOptionalProp4<T> = {
    -readonly [K in keyof T]: T[K]
}

type L1 = ToOptionalProp1<SupportedEvent>
type L2 = ToOptionalProp2<SupportedEvent>
type L3 = ToOptionalProp3<SupportedEvent>
type L4 = ToOptionalProp4<SupportedEvent>

type Partial<T> = { [P in keyof T]+?: T[P] }
type Required<T> = { [P in keyof T]-?: T[P] }
type Readonly<T> = { readonly [P in keyof T]: T[P] }

type Pick<T, K extends keyof T> = { [P in K]: T[P] }
type Record<K extends keyof any, T> = { [P in K]: T }

type I = Record<10 | 20, Person>

type Person = {
    firstName: string
    lastName: string
    age: number
}

type PersonName<T, K> = Pick<T, Exclude<keyof T, K>>
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type O = Omit<Person, 'firstName'>

type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type K = Optional<Person, 'age'>
