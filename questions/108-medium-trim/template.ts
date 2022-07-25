type space=" " | "\n" | "\t"
export type Trim<S extends string> = S extends `${space}${infer Rest}`|`${infer Rest}${space}`? Trim<Rest>: S