import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return { x: 10, y: 3 };
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, { x: number; y: number }>>];
