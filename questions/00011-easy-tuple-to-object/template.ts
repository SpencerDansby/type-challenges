type TupleToObject<K extends readonly PropertyKey[]> = {
  [P in K[number]]: P
}
