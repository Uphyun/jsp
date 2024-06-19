package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class MemberAddAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 1. 파라미터 4개 client 한테 받기
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String nm = req.getParameter("nm");
		String auth = req.getParameter("auth");
		
		//파라미터에서 받은 값을 MemberVO 필드값에 입력
		MemberVO mvo = new MemberVO();
		mvo.setUserId(id);
		mvo.setUserPw(pw);
		mvo.setUserName(nm);
		mvo.setResponsibility(auth);
		
		
		BoardService svc = new BoardServiceImpl();
		if (svc.addMemberAjaxs(mvo)) { // {"retCode" : "OK", "retMsg":"Success"}
			resp.getWriter().print("{\"retCode\" : \"OK\", \"retMsg\":\"Success\"}");
		}else {//{"retCode":"NG","reMsg":"Fail"}
			resp.getWriter().print("{\"retCode\":\"NG\",\"reMsg\":\"Fail\"}");
					
			
		}
	}

}
