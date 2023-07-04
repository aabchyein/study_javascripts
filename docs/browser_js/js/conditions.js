// if () {
//  } else if () {
//  } else {
//  }

let first = 1;
let second = 4;

if (first < 10) {
    console.log("Mano");
} else  if (first > second) {
    console.log(`${first} > ${second}`);
} else {
    console.log(`second : ${second}`);
}

//-----------
// == vs ===
// == : 두 개의 변수의 값을 비교할 때 사용
// === : 값도 동일하고 data type도 동일해야 true가 나옴. 자바스크립트에서는 data type을 명확하게 구분하지 않기 때문에.
let third = `4`;
first = 4;

// 브라우저 콘솔 창에서 확인
// third == first
// true
// third === first
// false

//----------
// 삼항 연산자
// if () {
// } else {
// }

// 변수 = () ? : ;
let result = (third === first) ? `true!` : `false !`;