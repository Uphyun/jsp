package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.MemberVO;

public class ModifyAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String pw = req.getParameter("pass");

		MemberVO mvo = new MemberVO();
		mvo.setUserId(id);
		mvo.setUserName(name);
		mvo.setUserPw(pw);
		
		
		BoardService bsv = new BoardServiceImpl();
		if (bsv.modifyMemberAjaxs(mvo)) { // {"retCode":"Exist"}
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");

		}

	}

}
