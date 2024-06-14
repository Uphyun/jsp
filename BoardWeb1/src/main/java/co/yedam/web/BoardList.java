package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.common.PageDTO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;
import co.yedam.vo.SearchVO;
/*
 *  oracle DB 에 글 목록 조회 후 -> boardList.jsp 출력
 */
public class BoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition"); //searchCondtion
		String kw = req.getParameter("keyword");
		
		page = page == null ? "1" : page;
		
		SearchVO search = new SearchVO(Integer.parseInt(page), sc, kw);
		
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList(search);
		
		req.setAttribute("boardList", list);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		  
		//페이지 계산
		int totalCnt = svc.boardTotal(search); // 마지막페이지 1~25page 전체건수
		PageDTO dto = new PageDTO(Integer.parseInt(page), totalCnt);
		req.setAttribute("paging", dto);
		
		
		req.getRequestDispatcher("board/boardList.tiles").forward(req, resp); //board.jsp 로 출력
	}

}
