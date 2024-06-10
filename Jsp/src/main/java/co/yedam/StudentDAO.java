package co.yedam;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO extends DAO{
//등록,삭제,수정,목록 기능 구현
	boolean updateStudent(Student std) {
		getConnection();
		String sql = "update tbl_student set phone = ? where std_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, std.getPhone());
			psmt.setString(2, std.getStdNo());
			if(psmt.executeUpdate() == 1) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	boolean deleteStudent(String stdNo) {
		getConnection();
		String sql = "delete from tbl_student where std_no = ?";
		try {
		 psmt = conn.prepareStatement(sql);
		 psmt.setString(1, stdNo);
		 if(psmt.executeUpdate() == 1) {
			 return true;
		 }
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	boolean insertStudent(Student std) {
		getConnection();
		String sql = "insert into tbl_student(std_no, std_name, phone, bld_type) values(?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, std.getStdNo());
			psmt.setString(2, std.getStdName());
			psmt.setString(3, std.getPhone());
			psmt.setString(4, std.getbtype());
			if(psmt.executeUpdate() == 1){ //sql에서 insert처리 한건이 되었다는 의미
				return true;
			};
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	} //end of insertStudent 
	
	List<Student> studentList(){
		getConnection(); // Connection 객체(세션)
		String sql = "select * from tbl_student order by std_no";
		List<Student> students = new ArrayList<>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery(); // Result 자료형 데이터 반환
			// 조회된 결과목록을 List<Student>에 담아서 반환.
			while(rs.next()) {
				Student std = new Student();
				std.setStdNo(rs.getString("std_no"));
				std.setStdName(rs.getString("std_name"));
				std.setPhone(rs.getString("phone"));
				std.setbtype(rs.getString("bld_type"));
				std.setCreateDate(rs.getString("create_date"));
				students.add(std); //데이터베이스의 조회값 하나를 List에 담아줌.
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return students;
	}// end of StudentList();
}