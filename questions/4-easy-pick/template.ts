// export type MyPick<DataType, KeyType extends keyof DataType>=Pick<DataType,KeyType>
export type MyPick<DataType, KeyType extends keyof DataType> =  {[key in KeyType]:DataType[key]}