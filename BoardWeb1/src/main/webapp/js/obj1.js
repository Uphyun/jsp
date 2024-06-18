/**
 *  obj1.js
 */


document.getElementById('dom').remove();
const obj = {
	data:'',
	fields : ['id', 'first_name', 'email', 'salary'], 
	showList: function(ary = []) {
		ary.forEach((emp, idx) => { //ary 배열에 forEach 돌려 emp, idx 값을 넣음
			if(idx < 3){
				document.querySelector('#list').appendChild(this.makeRow(emp));
			}
		});
	},
	makeRow(emp = {id, first_name, email, salary}){
		let tr = document.createElement('tr');
		this.fields.forEach(field => {
			let td = document.createElement('td');
			td.innerHTML = emp[field];
			tr.appendChild(td);
		});
		return tr;
	}
} //end of object(객체)
 
obj.showList(employees);

document.getElementById('addBtn').addEventListener('click', addemployeesFnc);



 function addemployeesFnc(){
	const employees = {
		id : document.getElementById('mid').value,
		first_name : document.getElementById('mname').value,
		email : document.getElementById('mphone').value,
		salary : document.getElementById('mpoint').value
	};

	document.getElementById('list')
	.appendChild(obj.makeRow(employees));
	
	document.getElementById('mid').value = "";
	document.getElementById('mname').value = "";
	document.getElementById('mphone').value = "";
	document.getElementById('mpoint').value = "";
	
 }

 // 2024-06-19
const today = new Date();
 
Date.prototype.format = function(){
	let yy = this.getFullYear();
	let mon = this.getMonth();
	let dd = this.getDate();
	
	return yy + '-' + mon + '-' + dd;
}

console.log(today.format());