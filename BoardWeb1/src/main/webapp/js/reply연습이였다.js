/**
 * reply.js
 */
// 댓글 -> li 생성(목록)
function makeRow(reply = {}){
	let fields = ['replyNo', 'reply', 'replyer', 'replyDate' ];
	let li = document.createElement('li');
	fields.forEach(
		field =>{
			let span = document.createElement('span');
			span.innerHTML = reply[field];
		    if (field == 'reply'){
				width = '4';
			} else if (field == 'replyDate'){
				width = '3';
			} else {
				width = '2';
			}
			
			span.setAttribute('class', 'col-sm-' + width);
			li.appendChild(span);
		}
	)
	return li;
}

function colneRow(reply ={}){
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true);
	console.log(template);
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	return template;
}

//한건 삭제
function deleteRow(e){
	const removeReply = new XMLHttpRequest();
	let rno = e.target.parentElement.parentElement.children[0].innerText;
	console.log(rno);
	let span = document.createElement('span');
	removeReply.open('get', 'removeReply.do?rno=' + rno);
	removeReply.send();
	removeReply.onload() = function(){
		let result = JSON.parse(removeReply.responseText);
		if(result.retCode == 'OK'){
			alert('삭제완료');
			span.remove();
		}else{
			alert('실패');
		}
		
		  
	}
	
}


const listAjax = new XMLHttpRequest();
listAjax.open('get', 'replyListJson.do?bno=' + bno);
listAjax.send();
listAjax.onlond = function(){
	let data = JSON.parse(listAjax.responseText);
	console.log(data);
	data.forEach(
		reply =>{
			document.querySelector('div.content>ul').appendChild(colneRow(reply));
		}
	)
}

