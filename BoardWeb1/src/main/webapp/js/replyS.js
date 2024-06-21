/**
 * replyS
 */

//댓글출력하기
let page = 1;
svc.replyList({ bno, page }, replyListFnc);

//등록이벤트
document.getElementById('addReply').addEventListener('click', addReplyFnc);



// 댓글 건수를 활용해서 건수만큼 페이징계산하고 a태그 목록추가 그려주기
function makePagingFnc() {
	svc.replyTotalCnt(bno, createPagingList);
}
let pagination = document.querySelector('div.pagination');
function createPagingList() {
	let totalCnt = this.responseText; // 댓글갯수 replyTotalCnt.do?bno=값
	console.log(totalCnt); // 632건/5 => 127page
	let startPage, endPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 5); // 127page

	endPage = Math.ceil(page / 10) * 10; // 10page
	startPage = endPage - 9; //1page
	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd;

	//startPage, endPage, prev, next => a태그 생성
	pagination.innerHTML = ''; //이전페이지 삭제
	if (prev) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage - 1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&laquo;";
		pagination.appendChild(aTag);
	}
	for (let p = startPage; p <= endPage; p++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', p);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = p;
		if (page == p) {
			aTag.className = 'active';
		}
		pagination.appendChild(aTag);
	}
	if (next) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage + 1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&raquo;";
		pagination.appendChild(aTag);
	}
	// 페이징 a 태그를 클릭하면 목록보여주기
	document.querySelectorAll('div.pagination>a').forEach(item => {
		item.addEventListener('click', function(e) {
			page = item.dataset.page;
			e.preventDefault(); //위페이지로 이동하는 걸 차단(기본기능을 차단함)
			svc.replyList({ bno, page }, replyListFnc);
		});
	});
}


// 등록버튼 클릭시 실행 함수
function addReplyFnc() {
	if (!replyer) {
		alert('로그인하세요!!');
		return;
	}
	let reply = document.getElementById('reply').value;
	if (!reply) {
		alert('댓글을 등록하세요!!');
		return;
	}
	svc.addReply({ replyer, reply, bno }, addReplyCallback);
} //end of 등록이벤트

function addReplyCallback() {
	console.log(this.responseText);
	// 화면에 댓글정보목록에 추가
	let result = JSON.parse(this.responseText);
	if (result.retCode == 'OK') {
		alert('등록성공!!');
		page = 1;
	    svc.replyList({ bno, page }, replyListFnc);
		document.getElementById('reply').value = '';
	} else {
		alert('실패=> ' + result.retVal);
	}
}// end of addReplyCallback()


// replyList의 매개값으로 쓰여지는 함수
function replyListFnc() {
	//기존 5개 댓글을 지워주고 새로운 클릭 페이지를 출력
	document.querySelectorAll('div.content>ul>li').forEach((item, idx) => {
		if (idx > 2) {
			item.remove();
		}
	});
	let data = JSON.parse(this.responseText);
	data.forEach(reply => {
		let li = cloneRow(reply);
		console.log(li);
		document.querySelector('div.content>ul').appendChild(li);

	})

	makePagingFnc();
} // 조회목록

//댓글정보활용 -> li생성
function cloneRow(reply = {}) {
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);

	console.log(template);
	template.style.display = 'block';
	template.setAttribute('id', reply.replyNo);
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;

	return template;
}

//삭제 함수 실행
function deleteRow(e) {
	let li = e.target.parentElement.parentElement;
	console.log(e); // target = button

	let rno = li.getAttribute('id');
	console.log(rno);

	svc.removeReply(rno, deleteReplyFnc);

	//removeReply메소드의 매개값으로 전달 될 함수, 화면에서 한건 지우기
	function deleteReplyFnc() {
		let result = JSON.parse(this.responseText);
		if (result.retCode == 'OK') {
			alert(result.retMsg);
			document.getElementById(rno).remove();
			svc.replyList({ bno, page }, replyListFnc);
		} else {
			alert('Error=>' + result.retMsg);
		}
	}

}//end of 삭제함수
