/* extends 的 特性 */
type S = 'foo' | 'bar' | 35;

// extends 會比較 ('foo' | 'bar' | 35) extends string
type T1 = S extends string ? true : false;
// false

// 泛型會一一比較
type T2<C> = C extends string ? true : any;
type K = T2<S>;
// any
