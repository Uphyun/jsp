/**
 *  calendar.js (달력만들기)
 */
document.querySelectorAll('.container-fluid h3') //NodeList 반환타입
	.forEach(item => item.remove());

document.querySelectorAll('.container-fluid table.table') //NodeList 반환타입
	.forEach(item => item.remove());
	
document.getElementById('fruit').remove();

//월을 변경하면 달력을 출력하는 이벤트를 등록
document.getElementById('selectMonth').addEventListener('change', changeMonthFnc);

function changeMonthFnc(){
	
    makeCalendar(parseInt(this.value));
    
}

//------달력 만들기-----
// 달력의 첫째날 계산하는 함수, 달력의 마지막날 계산 함수
function getFirstDay(month = 6){
	switch(month) {
		case 5:
			return 4;
		case 7:
			return 2;
	}
	return 7;
}

function getLastDate(month = 6){
	switch(month){
		case 5:
	    case 7:
			return 31;
	}
	return 30;
}

function makeCalendar(month = 6){ //달력만드는 메소드
	let firstDay = getFirstDay(month); //1일의 위치를 지정하기 위해 공란의 갯수를 반환
	let lastDate = getLastDate(month); // 월의 마지막날을 반환하는 함수
	
    document.getElementById('show').innerHTML = ''; // 기존데이터 초기화 
	//table 생성, border="2"
	let tbl = document.createElement('table'); //테이블생성
	tbl.setAttribute('class', 'table');
	let thd = document.createElement('thead'); //티해드생성
	let tbd = document.createElement('tbody'); //티바디생성
	
	// thead 하위요소.
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
	let tr = document.createElement('tr');
	days.forEach(day=>{
			let td = document.createElement('th');
			td.innerHTML = day;
			tr.appendChild(td);
	});
	thd.appendChild(tr);
	
	//tbody 하위요소.
	tr = document.createElement('tr');
	
	//일~금까지 빈공간만들어주기
	for(let i = 1; i < firstDay; i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	//실제 날짜 출력
	for(let d = 1; d <= lastDate; d++){
		let td = document.createElement('td');
			td.innerHTML = d;
			tr.appendChild(td);
			if((d + getFirstDay(month) - 1) % 7 == 0){ // 7일마다 줄바꿈
				tbd.appendChild(tr);
				tr = document.createElement('tr');
			}
			//토요일 배경색 파란색
			if((d + firstDay - 1) % 7 == 0){
			  td.style.background = 'blue';
			  td.style.color = 'yellow';
			//일요일 배경색 빨간색
			} else if((d + firstDay - 1) % 7 == 1){
				td.style.background = 'red';
				td.style.color = 'yellow';
			}
	}
	tbd.appendChild(tr);
	 
	tbl.appendChild(thd); //테이블에 티헤드 붙이기
	tbl.appendChild(tbd); //테이블에 티바디 붙이기
	
	document.getElementById('show').appendChild(tbl); //div id값 'show'에 테이블 붙이기
}
makeCalendar(5);