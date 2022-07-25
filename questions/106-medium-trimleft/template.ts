import { Trim } from "../108-medium-trim/template";
type Empty=" " | "\n" | "\t"
export type TrimLeft<S extends string> = S extends`${Empty}${infer Rest}` ? TrimLeft<Rest>: S
