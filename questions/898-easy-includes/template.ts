type IsEqual<A, B> = [A, B] extends [B, A] ? true : false 
export type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Rest] ?
IsEqual<U, X> extends true ? true : Includes<Rest, U>: false
