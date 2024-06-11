package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.Student;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		//interface - 구현객체.
		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
		List<BoardVO> list = mapper.boardList();
		for(BoardVO bvo : list) {
			System.out.println("bvo.toString");
		}
		
		BoardVO bvo = new BoardVO();
		bvo.setBoardNo(4);
		bvo.setTitle("어렵다어려워");
		bvo.setContent("개발자하기..");
		bvo.setWriter(null);
//		Student std = new Student();
//		std.setStdNo("S0017");
//		std.setStdName("김영식");		
//		std.setPhone("010-2345-5064");
//		std.setBldType("O");
//		
//		sqlSession.insert("co.yedam.mapper.StudentMapper.insertStudent", std);
//		sqlSession.commit();
//		
//		
//		std.setPhone("010-4444-4444");
//		std.setStdNo("S0015");
//		sqlSession.update("co.yedam.mapper.StudentMapper.updateStudent");
//		mapper.deleteStudent(std);
//		sqlSession.commit();
//		
//		
//		List<Student> list//
//		 		//= sqlSession.selectList("co.yedam.mapper.StudentMapper.selectBlog");
//				= mapper.selectBlog();
//		for(Student std1 : list) {
//			System.out.println(std1.toString());
//		}
	}
}
