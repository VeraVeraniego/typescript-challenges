export type Awaited<T extends Promise<any>> = T extends Promise<infer InnerType> 
? InnerType extends Promise<any> 
  ? Awaited<InnerType>
  : InnerType
  : T;