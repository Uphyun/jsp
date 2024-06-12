<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<h3>게시글편집</h3>
<% String message = (String) request.getAttribute("message"); %>
<form action="boardEdit.do">
<table class="table">
 <tr>
  <th>수정할 게시글 번호</th><td><input type="text" name="sbno" class="underlined" placeholder="105"></td>
 </tr>
  <tr>
  <th>수정할 내용</th><td><textarea rows="10" cols="50" placeholder="Hello, World!"></textarea></td>
 </tr>
  <tr>
  <td colspan="2" align="center">
   <input type="submit" class="btn btn-primary" value="저장">
  </td>
 </tr>
</table>
<% if (message != null) { %>
    <div class="error"><%= message %></div>
<% } %>
</form>
<%@include file="../public/footer.jsp" %>