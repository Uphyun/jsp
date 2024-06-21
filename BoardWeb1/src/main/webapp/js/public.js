/**
 * public.js
 */

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=248&serviceKey=Cs8Czub8AC%2Fzhu1nyZb1Qv5EjxKOW2VpHi87jw3EOAvrwb%2FhisgW3YPTqDGxTdSaU81c%2FZ6ZTdBt08Dwzp4NBQ%3D%3D';
const target = document.querySelector('#centerList'); //하위목록
fetch(url)
	.then(
		result => // [{"id: 1, "center:..."},{},등] -> [{},{}] --> 객체로 변환(json)
			result.json()
	)
	.then(
		result =>{
			
			centers = result.data;
			console.log(centers);
			searchCenters(centers);
		});
		
function searchCenters(centers) {
	target.innerHTML = '';
	centers.forEach(center => {
		target.appendChild(makeRow(center));
	});
}
	
	//1. 목록출력하기
	const fields = ['id', 'centerName', 'phoneNumber', 'address'];
	function makeRow(center = {}){
		let tr = document.createElement('tr');
				fields.forEach(
					field => {
						let td = document.createElement('td');
						td.innerHTML = center[field];
						tr.appendChild(td);
					}
				);
				return tr;
		} //end of makeRow();
		
	//2. 주소검색기능
	document.getElementById('findBtn').addEventListener('click', searchAddress);
	
	function searchAddress(){
		let search = document.getElementById('search').value;
		let result = centers.filter(center => center.address.includes(search));
		searchCenters(result);
	}
	
	//3. option 선택 필터
	document.getElementById('selectSido').addEventListener('change', selectSido);
	
	function selectSido(){
		let select = document.getElementById('selectSido').value;
		let selectAll = centers.filter(center => center.sido.includes(select));
		
		searchCenters(selectAll);
		
	}
	
