/**
 * ary2.js  
 */
console.log(employees);

let result = [23, 45, 22, 39, 10, 56].filter(function(item, idx, ary){
	if(item % 2 == 0){
		return true;
	}
}); // 조건을 만족할때 true 이면 item 을 result 값에 담는다.
console.log(result);

//employees.forEach(console.log);

// 급여가 5000이 넘는 여자만 필터링
// filter [A, A, A] -> [A, A]
let over5000 = [];
let over5000Sum = 0;
let filterFnc = employees.filter(emp =>
	emp.salary > 5000 && emp.gender == 'Female'); //아래 함수를 간략하게 표현 
	
filterFnc = function(emp){
	return emp.gender == 'Female' && emp.salary > 5000;
}

employees.filter(filterFnc)   //over5000에 넣어 담는 것이 아니라
	.forEach(function(emp){   // fliterFnc의 값을 forEach문으로 돌리면서 또 다른 값을 가져올 수 있음
		over5000Sum += emp.salary;

	});   
	
console.log('조건만족하는 사람의 급여', over5000Sum);

//console.log(over5000);

// map [A,A,A] -> [A',A',A']
employees
	 .map(function(elem, idx, ary){
		const obj = {}
		obj.name = elem.first_name + '-' + elem.last_name;
		obj.no = elem.id;
		obj.salary = elem.salary;
		return obj;
	 }).forEach(console.log);
	 