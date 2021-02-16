function test() {
  let num = 10;
  return function() {
    return num--;
   
  }
}
let func = test();
let func1 = test();

func();
func();
func1();
func();
console.log(func());

