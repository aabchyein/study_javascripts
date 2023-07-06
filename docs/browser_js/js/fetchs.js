// 정부 데이터 포털 : 대구 의료기 판매
function fetchdatagokr() {
let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=n1D34DQYo4jF080CnTyQNe%2FDQKRrmxq%2FVWIpwgfqdvG%2FXUWF1i2u64KLG5MjwwtQTatblMXR0S8v8B2pTqev0g%3D%3D&currentPage=1&perPage=10&SN=1';
let request = fetch(url)  // fetch를 타고 네트워크를 통해 온 결과값을 받음. json형식으로 결과값이 나옴.
    .then((response) => {  // 네트워크에서 날아오면 그 결과값의 뭉치(hashmap, header, body 등 여러 정보가 포함)가 response, 즉 데이터 묶음 형식
        response.json()
    })  
    .then((data) => {
        console.log(data);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
}

// 자동차 정보 상세 
function fetchCarInforDetail() {
    let url = 'http://localhost:8080/selectDetail/CI002';
    let request = fetch(url)  // fetch를 타고 네트워크를 통해 온 결과값을 받음. json형식으로 결과값이 나옴.
        .then((response) => {  // 네트워크에서 날아오면 그 결과값의 뭉치(hashmap, header, body 등 여러 정보가 포함)가 response, 즉 데이터 묶음 형식. response는 function 내부에서 사용하는 변수이므로 이름은 내가 지정해서 사용.
            return response.json()
        })  
        .then((data) => {  // json으로 변화된 data를 받음. chain method
            console.log(data);
        })
        .catch((errorMessage) => {
            console.log(errorMessage);
        });
    }

    // 자동차 정보 수정
    function fetchCarInforUpdate() {
        // 192.168.0.31:8080/update
        //  body -
        // {
        //     "CAR_NAME": "코나",
        //     "CAR_INFOR_ID": "CAR-02"
        // }
        // headers -
        // Content-Type : application/json
        let url = 'http://127.0.0.1:8080/update';
        let option = {
            method : "PUT",
            headers : {"Content-Type" : "application/json"}, //header가 키, {}가 value
            body : JSON.stringify ({"CAR_NAME": "요주랩", "CAR_INFOR_ID": "CI002"}) // 네트워크에 실어보낼 때는 STRING 형태이므로 CAST를 해줘야 한다.(CAST : JSON.stringify)
        }
        let request = fetch(url, option)  // fetch를 타고 네트워크를 통해 온 결과값을 받음. json형식으로 결과값이 나옴. fetch는 default가 GET.
            .then((response) => {  // 네트워크에서 날아오면 그 결과값의 뭉치(hashmap, header, body 등 여러 정보가 포함)가 response, 즉 데이터 묶음 형식. response는 function 내부에서 사용하는 변수이므로 이름은 내가 지정해서 사용.
                return response.json();
            })  
            .then((data) => {  // json으로 변화된 data를 받음. chain method
                console.log(data);
            })
            .catch((errorMessage) => {
                console.log(errorMessage);
            });
        }

// 자동차 정보 테이블 채우기
function fetchCarInforTable() {
    let url = 'http://localhost:8080/selectAll/CI002';
    let outHtml = '';
    let request = fetch(url)
        .then((response) => {
            return response.json()
        })  
        .then((data) => {
            for (let car_hashmap of data) {
                console.log(`YEAR : ${car_hashmap.YEAR}, CAR_NAME : ${car_hashmap.CAR_NAME}, CAR_INFOR_ID : ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
                outHtml  = `${outHtml}<tr><td>${car_hashmap.YEAR}</td> <td>${car_hashmap.CAR_NAME}</td> <td>${car_hashmap.CAR_INFOR_ID}</td> <td>${car_hashmap.COMPANY_ID}</td></tr>`;
            }
            console.log(data);
            let list_source = document.querySelector(`#list`)
            list_source.innerHTML = outHtml
        })
        .catch((errorMessage) => {
            console.log(errorMessage);
        });
    }
