<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- script/js.jsp -->
<div id="dom">
<h3>자바스크립트 연습페이지</h3>
<ul id='fruit'>
  <li>apple<button>삭제</button></li>
  <li>banana</li>
</ul>

<table class="table">
  <tr>
    <th>사번</th>
    <td><input id="mid"></td>
  </tr>
  <tr>
    <th>사원명</th>
    <td><input id="mname"></td>
  </tr>
  <tr>
    <th>이메일</th>
    <td><input id="mphone"></td>
  </tr>
  <tr>
    <th>급여</th>
    <td><input id="mpoint"></td>
  </tr>
  <tr>
    <td colspan="2">	
      <button id="addBtn">추가</button>
    </td>
  </tr>
</table>
<table class="table">
<thead id="list">
<tr>
  <th>아이디</th>
  <th>이름</th>
  <th>연락처</th>
  <th>포인트</th>
  <th>삭제</th>
  <th><input type="checkbox"></th>
</tr>
</thead>
<tbody id="memberList"></tbody>
</table>
<select id="selectMonth">
	<option value="5">5월</option>
	<option value="6">6월</option>
	<option value="7">7월</option>
</select>
</div>

<table class="table">
  <tr>
    <th>사번</th>
    <td><input id="mid"></td>
  </tr>
  <tr>
    <th>사원명</th>
    <td><input id="mname"></td>
  </tr>
  <tr>
    <th>이메일</th>
    <td><input id="mphone"></td>
  </tr>
  <tr>
    <th>급여</th>
    <td><input id="mpoint"></td>
  </tr>
  <tr>
    <td colspan="2">	
      <button id="addBtn">추가</button>
    </td>
  </tr>
</table>
<table class="table">
  <thead>
    <tr>
      <th>사번</th>
      <th>이름(firstname)</th>
      <th>이메일</th>
      <th>급여</th>
    </tr>
	<tbody id="list"></tbody>
</table>
<div id="show"></div>


<script src="js/data.js"></script>
<script src="js/obj1.js"></script>



