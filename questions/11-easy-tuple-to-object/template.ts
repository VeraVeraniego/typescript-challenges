export type TupleToObject<DataType extends readonly string[]> = {[key in DataType[number]]:key}
