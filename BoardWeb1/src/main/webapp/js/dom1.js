/**
 *  <<<dom1.js >>>
 */

 document.getElementById('fruit').style.display = 'none';
 document.querySelector('table.table tr:nth-of-type(5)').setAttribute('align','center'); // 가운데 정렬
 //------페이지가 로딩하면서 회원3명 바로 출력-----
 console.log(myMembers);
for(let mem of myMembers){
	
	document.getElementById('memberList').appendChild(addRow(mem));
}

 
 // -----추가버튼 클릭이벤트 등록-----
 
 document.getElementById('addBtn').addEventListener('click', addMemberFnc);
 document.getElementById('modBtn').addEventListener('click', modMemberFnc);
 document.getElementById('delBtn').addEventListener('click', delMemberFnc);
 document.querySelector('thead input[type="checkbox"]').addEventListener('change', allCheckFnc);
 
 //this -> 1. 이벤트(이벤트대상) (addBtn, modBtn등) 2.함수(window), 3.객체(객체자신)
 
 
//전체체크박스 선택 함수 
 function allCheckFnc(){
   document.querySelectorAll('#memberList tr').forEach(item => item.children[5].children[0].checked = this.checked);
 }
 
 function delMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr'); //전체값부르기
	
	for(let tr of targetTr){
		console.log(tr.children[5].children[0].checked); // 6번째-> td , 0번째->input
		if(tr.children[5].children[0].checked == true){
			tr.remove();
		}
	}

 }
 
 function modMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr'); //전체값부르기
	
	//입력화면의 회원아이디 값을 가져와서 mid변수에 저장 및 mid값이 tr에 첫번째 배열과 같을때 정보수정
	const mid = document.getElementById('mid').value;
	const mname = document.getElementById('mname').value;
	const mphone = document.getElementById('mphone').value;
	for (let tr of targetTr){
		console.log(tr.children[0].innerHTML);
		if(tr.children[0].innerHTML == mid){
			tr.children[1].innerHTML = mname;
			tr.children[2].innerHTML = mphone;
		}
	}
	

 }
 
 function addMemberFnc(){
	const id = document.getElementById('mid').value;
	const name = document.getElementById('mname').value;
	const phone = document.getElementById('mphone').value;
	const point = document.getElementById('mpoint').value;
	
	if(!id || !name || !phone || !point){
		alert('필수값을 입력하세요');
		return;
	}
	
	document.getElementById('memberList')
	.appendChild(addRow({id, name, phone, point}));
	
	document.getElementById('mid').value = "";
	document.getElementById('mname').value = "";
	document.getElementById('mphone').value = "";
	document.getElementById('mpoint').value = "";
	
 } // end of addMemberFnc()
 
 //member는 오브젝트 타입(각 변수를 담음)
 function addRow(member = {id, name, phone, point}) {
	// tr > td * 4
	const tr = document.createElement('tr');
	//tr 이벤트생성
	tr.addEventListener('click', showDetailFnc)
	
	for (let prop in member){
		const td = document.createElement('td');

		td.innerHTML = member[prop];
		tr.appendChild(td);
	}
	
	//삭제버튼 생성
	//<td><button>삭제</buttn></td> + tr에 붙힘
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click', removeTrElement);
	
	btn.innerText ='삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	
	// 체크박스 생성
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
 } //end of addRow()
 
 //이벤트 핸들러 함수
  function removeTrElement(e){
	console.log('btn',e);
	e.stopPropagation(); //상위요소로 이벤트전파 차단하는 함수
	console.log(this.parentElement.parentElement.remove()); //부모의부모// <버튼>위의 <td>위의 <tr>을 remove() 함수 호출
 }
 
 function showDetailFnc(e){ // 각 항에 클릭값 넣어주기
	console.log('tr',e);
	console.dir(this.children[1].innerText);
	document.getElementById('mid').value = this.children[0].innerText;
	document.getElementById('mname').value = this.children[1].innerText;
	document.getElementById('mphone').value = this.children[2].innerText;
	document.getElementById('mpoint').value = this.children[3].innerText;
	
 }
 
