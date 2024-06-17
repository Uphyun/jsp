package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.Control;
import co.yedam.common.DataSource;
import co.yedam.mapper.StudentMapper;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class addForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) 
		 throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String title = req.getParameter("stitle");
		String content = req.getParameter("scont");
		String writer = req.getParameter("writer");
		
		BoardService bsv = new BoardServiceImpl();
		
		BoardVO bvo = new BoardVO();
		bvo.setTitle(title);
		bvo.setContent(content);
		bvo.setWriter(writer);
		 
		if(bsv.addBoard(bvo)) {
		
			System.out.println("정상등록..");
			resp.sendRedirect("board/boardList.tiles");
		}else {
			System.out.println("등록실패..");
			req.setAttribute("message", "처리 중 오류 발생");
			req.getRequestDispatcher("board/boardForm.tiles").forward(req, resp);
		}
	}

}
