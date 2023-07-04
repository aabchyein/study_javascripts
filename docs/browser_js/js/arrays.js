let init_array = new Array(); //초기화      // 초기화 하는 다른 방법:  let init_array = []

let fruits = ["apple", "banana", "orange", "mellon"];

//array에서 동작하는 여러가지 기능(브라우저의 검사-consol창에서 확인가능)
// fruits.length : array의 개수
// 4
// fruits.push('grape'); : push는 배열에 항목 추가
// 5
// fruits.indexOf('banana'); : 배열 항목의 위치를 모를 때 위치를 알 수 있다.
// 1
// fruits.join(' and ')  : join은 배열을 하나의 String으로 만들어준다.
// 'apple and banana and orange and mellon'


// list와 list를 붙여서 사용할 수 있다. fruits에 fruits_second를 붙인다.
let fruits_second = ["berry", "strawberry"]

let fruits_concat = fruits.concat(fruits_second); // 두 개의 array를 붙인 다음 변수에 꼭 담아줘야 완전히 붙어있는 것을 사용할 수 있다.
// fruits_concat
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']