/**
 *  ajax3.js
 */
// 목록가져오기
const xthp = new XMLHttpRequest();
xthp.open('get', 'memberAjax.do');
xthp.send();
xthp.onload = function() {
	let data = JSON.parse(xthp.responseText);
	console.log(data);
	data.forEach(
		user => {
			document.getElementById('list').appendChild(makeRow(user));
		}
	)
}
//json 문자열의 필드이름을 활용
const fields = ['userId', 'userName', 'userPw', 'responsibility'];
function makeRow(obj = {}) { // obj={}객체로 값이 온다는 뜻
	let tr = document.createElement('tr');
	tr.addEventListener('dblclick', function(e){
		 document.getElementById('myModal').style.display = 'block';
		 //선택된 사용자의 이름, 비번을 모달에 출력
		 console.log(e, this);
		 document.getElementById('modify_name').value =
		   this.children[1].innerHTML;
		 document.getElementById('modify_pass').value =
		   this.children[2].innerHTML;
		 document.getElementById('modify_id').value =
		   this.children[0].innerHTML;
	})
	fields.forEach(
		field => {
			let td = document.createElement('td');
			td.innerHTML = obj[field];
			tr.appendChild(td);
		}
	)
	//삭제버튼
	tr.setAttribute('id', obj.userId);
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-delid', obj.userId);
	btn.addEventListener('click', removeMemAjax);
	btn.innerText ='삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	
	//체크박스 생성
	td = document.createElement('td');
	btn = document.createElement('input');
	btn.setAttribute('type', 'checkbox');
	td.appendChild(btn);
	tr.appendChild(td);
	
	
	
		return tr;
}//end of onload
//수정이벤트
document.getElementById('modBtn').addEventListener('click', function() {
		let id = document.getElementById('modify_id').value; 
		let name = document.getElementById('modify_name').value;
		let pass = document.getElementById('modify_pass').value;
		
		// ajax 생성
		const modifyAjax = new XMLHttpRequest();
		modifyAjax.open('get', 'modifyAjax.do?name='
								+ name + '&pw=' 
								+ pass + '&id='
								+ id);
		modifyAjax.send();
		modifyAjax.onload = function() {
			let result = JSON.parse(modifyAjax.responseText);
			if (result.retCode == 'OK') {
			alert('수정완료');
		} else {
			alert('실패');
		}
	}
		
		//정상적으로 정보가 업데이트되면 화면에 수정완료
		
		//만약 수정이 안됐으면 화면수정X
		let targetTr = document.getElementById(id); //
		targetTr.children[1].innerHTML = name;
		targetTr.children[2].innerHTML = pass;

		// 모달창 닫기
		document.getElementById('myModal').style.display = 'none';
		
})//end of 수정이벤트


//등록이벤트
document.getElementById('addBtn').addEventListener('click', function() {
	let id = document.getElementById('uid').value; //여기서 아이디가 벨류값
	let pw = document.getElementById('upw').value;
	let nm = document.getElementById('uname').value;
	let auth = document.getElementById('auth').value;

	const addAjax = new XMLHttpRequest();
	let url = 'addAjax.do?id='
		+ id + '&pw='
		+ pw + '&nm='
		+ nm + '&auth='
		+ auth;
	addAjax.open('get', url);
	addAjax.send(); //서버 시작
	addAjax.onload = function() {
		let result = JSON.parse(addAjax.responseText);
		if (result.retCode == 'OK') {
			let newMem = { userId: id, userName: nm, userPw: pw, responsibility: auth }
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(newMem));
		} else {
			alert('실패');
		}
	}



}); //end of 등록이벤트


//id 중복체크
document.getElementById('uid').addEventListener('change', function() {
	let checkId = this.value;

	const checkAjax = new XMLHttpRequest();
	checkAjax.open('get', 'checkIdAjax.do?id=' + checkId);
	checkAjax.send();
	checkAjax.onload = function() {
		let result = JSON.parse(checkAjax.responseText);
		if (result.retCode == 'Exist') {
			alert('중복된 아이디입니다.')
			document.querySelector('#addBtn').disabled = true; // 버튼 비활성화를 true
		} else {
			alert('등록가능한 아이디입니다.')
			document.querySelector('#addBtn').disabled = false;

		}
	}
}); //end of id 중복체크

//목록 tr 삭제 클릭 이벤트
  function removeMemAjax(e){
	const deleteIdAjax = new XMLHttpRequest();
	let did = this.dataset.delid; // data-delId
	//let did = e.target.parentElement.children[5].innerText;
	console.log(did);
	let tr =  document.getElementById(did);
	deleteIdAjax.open('get', 'deleteIdAjax.do?id=' + did);
	deleteIdAjax.send();
	deleteIdAjax.onload = function(){
		let result = JSON.parse(deleteIdAjax.responseText);
		if(result.retCode == 'OK'){
			alert('정삭삭제완료')
			tr.remove();
		}else{
			
		}
	}
	
 }


	









