function tablelist() {
const carInfors_obj = [
    {YEAR: "2020", CAR_NAME: "소나타", CAR_INFOR_ID: "CI001", COMPANY_ID: "C001"},
    {YEAR: "2021", CAR_NAME: "코나", CAR_INFOR_ID: "CI002", COMPANY_ID: "C002"},
    {YEAR: "2019", CAR_NAME: "SM6", CAR_INFOR_ID: "CI003", COMPANY_ID: "C003"},
    {YEAR: "2022", CAR_NAME: "3 시리즈", CAR_INFOR_ID: "CI004", COMPANY_ID: "C004"},
    {YEAR: "2020", CAR_NAME: "캠리", CAR_INFOR_ID: "CI005", COMPANY_ID: "C005"}
];

let outHtml = ``;
for (let car_hashmap of carInfors_obj) {
    console.log(`YEAR : ${car_hashmap.YEAR}, CAR_NAME : ${car_hashmap.CAR_NAME}, CAR_INFOR_ID : ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
    outHtml  = `${outHtml}<tr><td>${car_hashmap.YEAR}</td> <td>${car_hashmap.CAR_NAME}</td> <td>${car_hashmap.CAR_INFOR_ID}</td> <td>${car_hashmap.COMPANY_ID}</td></tr>`;
}
console.log(outHtml);

// document.querySelector라는 function을 이용하면 html 안에 있는 id=list 부분의 내용과 fuction을 모두 가져와서 클래스화 시켜줌. 그래서 내부적으로 클래스로 리턴됨.
// list_source는 클래스
let list_source = document.querySelector(`#list`) // 화면으로 보여지는 것이 document. 이 안에는 HTML, CSS, JAVA SCRIPT가 포함되어 있다.

// list_source의 지정된 변수 innerHTML을 outHtml로 바꿔줌
list_source.innerHTML = outHtml

}

// add keydown Event
let keydownObject = document.querySelector("#keydownEnter");

keydownObject.addEventListener('keydown', (event) => {
    if (event.code == 'Enter'){
        console.log(`key down : ${event.code}`);
        tablelist();
    }
});


let url = 'http://localhost:8080/selectAll/CI002';

let request = fetch(url)
.then(response => {
    response.json();
})
.then(data => {
    console.log(data);
})
.catch((data) => {
    console.log(data)
});

// function 호출
// tablelist() ;


// function carTableBody(){
//     const carinfor_obj = [
//         {"YEAR":"2020","CAR_NAME":"Sonata","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
//         {"YEAR":"2021","CAR_NAME":"Kona","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
//         {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
//         {"YEAR":"2022","CAR_NAME":"3 Series","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
//         {"YEAR":"2020","CAR_NAME":"Camry","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
//       ];

//       let outHtml = ``; //테이블열기
//       for (let car_hashmap of carinfor_obj) {   
//         // 각 자동차의 정보를 콘솔에 출력(올바르게 액세스하고 있는지 확인용)
//         console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
//          // 동적으로 생성된 HTML 테이블 행을 추가
//         outHtml = `${outHtml}<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
//       }
//       outHtml += ``; //테이블 닫기 </table>태그
//     // "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
//       let carTableBody = document.querySelector('#carTableBody'); // list.html에서 이 id 넣음 <tbody id="carTableBody"> 
//       carTableBody.innerHTML = outHtml; //outHtml 변수에 저장된 동적으로 생성된 HTML이 선택된 <tbody> 요소의 내부 HTML로 할당됨
//     }
    
//     carTableBody();