package co.yedam;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.web.AddStudent;
import co.yedam.web.BoardList;
import co.yedam.web.GetBoard;
import co.yedam.web.MainControl;
import co.yedam.web.StudentForm;
import co.yedam.web.addForm;
import co.yedam.web.boardEdit;
import co.yedam.web.boardForm;
import co.yedam.web.editForm;
import co.yedam.web.productControl;

// front -> 요청url(*.do) - 실행컨트롤 매칭.
// main.do -> FrontController -> /WEB-INF/public/main.jsp
// 객체생성 -> init -> service -> destory
public class FrontController extends HttpServlet {
	private Map<String, Control> map; // key: url, value: control
	
	public FrontController() {
		map = new HashMap<>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init();
		map.put("/main.do", new MainControl());
		map.put("/product.do", new productControl());
		map.put("/studentForm.do", new StudentForm()); // 학생등록화면 studentForm.do
		map.put("/addStudent.do", new AddStudent()); //정보 db의 저장
		map.put("/boardList.do", new BoardList());//게시글목록
		map.put("/getBoard.do", new GetBoard());
		map.put("/addForm.do", new addForm());
		map.put("/boardForm.do", new boardForm());
		map.put("/boardEdit.do", new boardEdit());
		map.put("/editForm.do", new editForm());
		

		
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) //
			throws ServletException, IOException {
		  String uri = req.getRequestURI(); //http://localhost/BoardWeb/main.do
//		  System.out.println("uri : " + uri); // Boardweb/main.do
		  String context = req.getContextPath(); // BoardWeb => project.name
//		  System.out.println("context: " + context);
		  String page = uri.substring(context.length());
//		  System.out.println("page: " + page);
		  
		  Control result = map.get(page);
		  result.exec(req,resp);	
		  }

}
