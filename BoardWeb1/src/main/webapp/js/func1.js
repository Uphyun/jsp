/**
 * 
 */

let name = "홍길동";
let age = 20;

 const obj = {
	 name,
	 age
}

function showObj(obj = {name:'홍길순', age:25}){
	return obj.name + '-' + obj.age;
	
}
console.log(showObj(obj));




function showItem(item){ //함수 또는 윈도우 최상위 객체
	let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

	days.forEach(function(val) {
		let span = document.createElement('span');
		span.innerHTML = val;
		item.appendChild(span);
	});
	result = sumAry([1, 2, 3, 4, 5]);
	console.log('결과',result);

	function sumAry(ary = []) {
		let sum = 0;
		for (let i = 0; i < ary.length; i++) {
			sum += ary[i];
		}
		return sum;
	}

}//end of showItem

showItem(document.getElementById('show'));

console.log(window);