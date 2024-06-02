function num1() {
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
}

function num2() {
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  let schedule = {};

  alert(isEmpty(schedule)); // true

  schedule["8:30"] = "get up";

  alert(isEmpty(schedule)); // false
}

function num4() {
  let salaries = {
    Jhon: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0
  for (let key in salaries) {
    sum += salaries[key]
  }
  alert(sum)
}

function num5() {
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2
      }
    }
  }

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);
}