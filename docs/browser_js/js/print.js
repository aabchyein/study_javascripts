let welcome = "Hello World!"; // 변수 선언
let numbers = 55;

let concats = 'String:' +welcome+ 'Number:'+numbers;
concats = `String: ${welcome}, Number: ${numbers}`; // 위의 방식보다 ``백팁을 넣은 아래 방식이 편리함.

console.log(concats) //출력
