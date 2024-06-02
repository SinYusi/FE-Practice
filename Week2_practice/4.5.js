function num1() {
  let obj = {};

  function A() { return obj; }
  function B() { return obj; }

  alert(new A() == new B()); // true
}

function num2() {
  function Calculator() {

    this.read = function () {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };

    this.sum = function () {
      return this.a + this.b;
    };

    this.mul = function () {
      return this.a * this.b;
    };
  }

  let calculator = new Calculator();
  calculator.read();

  alert("Sum=" + calculator.sum());
  alert("Mul=" + calculator.mul());
}

function num3() {
  function Accumulator(startingValue) {
    this.value = startingValue
    this.read = ()=>{
      this.value += +prompt('더할 값', 0)
    }
  }
  let accumulator = new Accumulator(1); // 최초값: 1

  accumulator.read(); // 사용자가 입력한 값을 더해줌
  accumulator.read(); // 사용자가 입력한 값을 더해줌

  alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
}