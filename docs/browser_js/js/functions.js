// 표준 function
function calculateSumFirst(first, second) {  // fuction은 선언이다. 자바스크립트에서는 선언 구문 2가지가 있다. (변수선언-let, fuction선언-fuction)
    return first + second;
}

// HTML에서 동작하기 때문에 인스턴스를 안해도 되고 그냥 사용하면 됨
let third = calculateSumFirst(4, 6);


// 여러 곳에서 fuction을 사용하는 경우가 있는데 변수에 담아서 활용한다.
let calculateMinusSecond = (first, second) => {  //calculateSumSecond 이 변수는 fuction을 담고 있으므로 fuction이 된다.
    return first - second;
} ;
// calculateMinusSecond(2, 1)
// 1


// callback function
function calculateForth(funcName, param1, param2) { // forth를 호출 했을 때 forth가 어덜 때는 first, 어떨 때는 second를 호출하는 것
    let result = funcName(param1, param2); // funName의 fuction에 param1, param2를 넣는다.
    result = result + 10;
    return result;  // return이 있다는 전제를 둠 
}
// 내부에서 동작할 function을 넣어주고 뒤에 parameter를 순서적으로 넣어줌
// calculateForth(calculateSumFirst, 5, 2)
// 17
// calculateForth(calculateSumFirst, 5)
// NaN