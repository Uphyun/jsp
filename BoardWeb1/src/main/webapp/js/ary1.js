/**
 *  ary1.js
 *  forEach, filter, map, reduce
 */

// ary: 배열, idx: 인덱스, elem: 값
 const numAry = [23, 17, 6, 41, 30, 12];
 let result = 0;
 
 //짝수값의 합 
 let evenSum = function(elem, idx, ary){
	console.log(idx, elem, ary);
	if(elem % 2 == 0){
		result += elem;
	}	
 };
 //홀수번째 합
 let oddSum = function(elem, idx, ary){
	console.log(idx, elem, ary);
	if(idx % 2 == 0 ){
		result += elem;
	}
 };
 //35보다 작은 값들의 합
  let less35 = function(elem, idx, ary){
	console.log(idx, elem, ary);
	if(elem < 35){
		result += elem;
	}
 };
 
numAry.forEach(evenSum); 
console.log('짝수의 합은', result);

numAry.forEach(oddSum); 
console.log('홀수번째의 합은', result);

numAry.forEach(less35); 
console.log('35보다 작은 값들의 합', result);


const dupAry = [10, 27, 32, 55, 27, 10];
const ary =[]; // indexOf(10) 비교값 => 인덱스값을 반환, 없으면 -1을 반환

//중복된 값 제거 ary에 등록

dupAry.forEach(function(elem){
	if(ary.indexOf(elem) == -1){
		ary.push(elem);
	}
});

console.log(ary);


