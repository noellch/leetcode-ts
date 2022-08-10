// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
type Partial<T> = { [P in keyof T]?: T[P] | undefined };

// Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
type Required<T> = { [P in keyof T]-?: T[P] };

// Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// Record<Keys, Type>
//Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
type Record<K extends string | number | symbol, T> = { [P in K]: T };

// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P] };

// Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
type Exclude<T, U> = T extends U ? never : T;

// Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.
type Extract<T, U> = T extends U ? T : never;

// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
type NonNullable<T> = T extends null | undefined ? never : T;

// Parameters<Type>
// Constructs a tuple type from the types used in the parameters of a function type Type.
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// ConstructorParameters<Type>
// Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

// ReturnType<Type>
// Constructs a type consisting of the return type of function Type.
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// InstanceType<Type>
// Constructs a type consisting of the instance type of a constructor function in Type.
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

// ThisParameterType<Type>
// Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

// OmitThisParameter<Type>
// Removes the this parameter from Type. If Type has no explicitly declared this parameter, the result is simply Type. Otherwise, a new function type with no this parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
