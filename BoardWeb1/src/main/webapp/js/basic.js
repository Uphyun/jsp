  //DOM 연습
  document.querySelector('ul#fruit>li').innerHTML= '사과';
  // li 생성
  let li = document.createElement('li');  //li태그 생성
  li.innerHTML = '<b>오렌지</b>'; // <li><b>오렌지<b></li>
  
  document.querySelector('ul#fruit').appendChild(li); //<ul id='fruit'> 자식(appendChild)으로 li 생성
  document.querySelector('ul#fruit>li').remove();
  document.querySelector('ul#fruit>li').style.backgroundColor = 'yellow';
  
  console.log(document.querySelectorAll('#fruit>li'));
  let lists = document.querySelectorAll('#fruit>li'); 
  for(let list of lists) {
	  //버튼생성
	  let btn = document.createElement('button'); //버튼생성
	  btn.innerText = '삭제'; //버튼안에 이름생성
	  btn.setAttribute('class', 'btn btn-primary'); //Attribute 추가
	  btn.addEventListener('click', function(){ //이벤트유형과 이벤트함수
		  btn.parentElement.remove(); //안에 내용물 삭제
	  });// 이벤트유형, 실행코드
	  list.appendChild(btn);
  }