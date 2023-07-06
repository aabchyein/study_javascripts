let keydownObject = document.querySelector("#keydownEnter")  // 여러 내용이나 변수나 function이 들어간 Object를 뱉어낸다. 그것을 변수 keydownObject 넣어줌. html의 input 부분을 다 가져온 것임. id라는 것을 표시해주기 위해 #를 해줘야 함.

keydownObject.addEventListener('keydown', (event) => {  // 자바스크립트에서는 addEventListener() 메서드를 사용하여 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정
    if (event.code == 'Enter') {
        console.log(`key down : ${event.code}`);
    }
});

// 객체.addEventListener("click", 함수명); 이런식으로 작성하며 괄호 안의 앞부분에 이벤트를 잓겅하고 뒤에는 함수명을 작성해준다.