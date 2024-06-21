<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!--  publicData.jsp -->
<h3>공공데이터 연습</h3>
<select id="selectSido">
    <option value="all">전체</option>
    <option value="type1">서울특별시</option>
    <option value="type2">부산광역시</option>
    <option value="type3">인천광역시</option>
    <option value="type4">대구광역시</option>
    <option value="type5">광주광역시</option>
    <option value="type6">경상북도</option>
    <option value="type7">경상남도</option>
    <option value="type8">충정북도</option>
    <option value="type9">충정남도</option>
    <option value="type10">강원도</option>
    <option value="type11">전라북도</option>
    <option value="type12">전라남도</option>
</select>
<input type="text" id="search" placeholder="주소 검색 ex)동구"><button id="findBtn">검색</button>
<table class="table">
	<thead>
		<tr>
			<th>센터id</th>
			<th>센터명</th>
			<th>센터연락처</th>
			<th>센터주소</th>
		</tr>
	</thead>
	<tbody id="centerList"></tbody>
</table>
<script src="js/public.js"></script>