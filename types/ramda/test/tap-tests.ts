import * as R from 'ramda';

() => {
  const sayX = (x: number) => console.log('x is ' + x);
  const a: number = R.tap(sayX, 100); // => 100

  const log = (value: any) => console.log(value);

  R.tap(log, 5); // $ExpectType number
  R.tap(log)(5); // $ExpectType number
};
