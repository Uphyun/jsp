<%@page import="co.yedam.common.PageDTO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../public/header.jsp" %>
<%
  String paging = (String)request.getAttribute("page");
  BoardVO board = (BoardVO) request.getAttribute("board");
  SimpleDateFormat sdf = new SimpleDateFormat("yyyy년 MM월 dd일 EEEE hh시 mm분 ss초");
  String yyyymmdd = sdf.format(board.getCreationDate());
%>
<p><%=board %></p>
<table class="table">
  <tr>
    <th style="width:100px">글번호</th>
    <td><%=board.getBoardNo() %></td>
    <th style="width:150px">조회수</th>
    <td style="width:20px"><%=board.getClickCnt() %></td>
  </tr>
    <tr>
    <th>제목</th>
    <td colspan="3" class="underlined"><%=board.getTitle() %></td>
    </tr>
    <tr>
    <th>내용</th>
    <td colspan="4" ><textarea rows="10" cols="50"><%=board.getContent() %></textarea></td>
    </tr>
    <tr>
    <th>작성자</th>
    <td colspan="5"><%=board.getWriter() %></td>
    </tr>
    <tr>
    <th>작성일시</th>
    <td colspan="6"><%=yyyymmdd %></td>
    </tr>
 
</table>
<a href="boardList.do?page=<%=paging %>">목록으로 이동하기</a>

<%@include file="../public/footer.jsp" %>