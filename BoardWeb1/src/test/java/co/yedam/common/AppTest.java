package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.StudentMapper;
import co.yedam.vo.Student;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession();
		
		//interface - 구현객체.
		StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
		
		Student std = new Student();
//		std.setStdNo("S0017");
//		std.setStdName("김영식");
//		std.setPhone("010-2345-5064");
//		std.setBldType("O");
//		
//		sqlSession.insert("co.yedam.mapper.StudentMapper.insertStudent", std);
//		sqlSession.commit();
//		
		
		std.setPhone("010-4444-4444");
		std.setStdNo("S0001");
		//sqlSession.update("co.yedam.mapper.StudentMapper.updateStudent");
		mapper.updateStudent(std);
		sqlSession.commit();
		
		
		List<Student> list//
		 		//= sqlSession.selectList("co.yedam.mapper.StudentMapper.selectBlog");
				= mapper.selectBlog();
		for(Student std1 : list) {
			System.out.println(std1.toString());
		}
	}
}