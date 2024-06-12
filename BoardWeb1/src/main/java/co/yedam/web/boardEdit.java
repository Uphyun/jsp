package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class boardEdit implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bNo = req.getParameter("sbno");
		String content = req.getParameter("scont");
		
		BoardService bsv = new BoardServiceImpl();
		
		BoardVO bvo = new BoardVO();
		bvo.setBoardNo(Integer.parseInt(bNo));
		bvo.setContent(content);
		
		if(bsv.editBoard(bvo)) {
			System.out.println("정상등록..");
			resp.sendRedirect("boardList.do");
		}else {
			System.out.println("등록실패..");
			req.setAttribute("message", "처리중 오류 발생");
			req.getRequestDispatcher("WEB-INF/view/editForm.jsp").forward(req, resp);
		}
	}

}
