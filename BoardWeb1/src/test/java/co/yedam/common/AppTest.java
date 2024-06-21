package co.yedam.common;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.ReplyMapper;
import co.yedam.vo.ReplyVO;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class); // <-- interface - 구현객체.
		// interface에 구현해야할 메소드가 하나만 있는 인터페이스 : 함수형 인터페이스
//		mapper.selectList(201).forEach(
//				reply -> 
//				System.out.println(reply)
//		);
		
//		ReplyVO rvo = mapper.selectReply(24);
//		System.out.println(rvo);
		
		ReplyVO rvo = new ReplyVO();
		rvo.setReply("댓글작성테스트");
		rvo.setReplyer("admin");
		rvo.setBoardNo(201);
		try {
			if(mapper.deleteReply(23) == 1) {
				System.out.println("삭제성공");
		}
		} catch (Exception e) {
			System.out.println("예외발생");
		}
	 mapper.selectList(201).forEach(reply -> System.out.println(reply));
	}
}
