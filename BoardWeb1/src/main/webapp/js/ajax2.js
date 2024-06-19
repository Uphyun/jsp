/**
 *  ajax2.js
 *  XMLHttpRequest 객체
 */
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'data/MOCK_DATA.json'); // 서버상 페이지 요청
xhtp.send();
xhtp.onload = function(){ //onload 이벤트가 발생하면
	let data = JSON.parse(xhtp.responseText); // json문자열 -> 자바스크립트 객체로 변경해줌(명령어:parse)
//	console.log(data);
	// DOM 메소드를 활용해서 페이지 작성하는 작업
	data.forEach(
		function(emp){
		console.log(emp);
		document.getElementById('list').appendChild(makeRow(emp)); // '아이디 list'에 tr(makeRow) 붙이기
	    }
	);
}//end of onload()     

//tr 에 td만들어 fields 값 붙이는 함수 makeRow 로직짜기
let fields = ['id', 'first_name', 'email', 'salary'];
function makeRow(obj = {}){ // obj={}객체로 값이 온다는 뜻
	let tr = document.createElement('tr');
	fields.forEach(
		field => {
			let td = document.createElement('td');
			td.innerHtml = obj[field];
			tr.appendChild(td);
		}
	);
	return tr;
}

const xhtm = new XMLHttpRequest();
xhtm.open('get', 'loginForm.do');
xhtm.send();
xhtm.onload = function(){
	console.log(xhtm);
	document.getElementById('show').innerHTML = xhtm.responseText;
}

console.log('end');
