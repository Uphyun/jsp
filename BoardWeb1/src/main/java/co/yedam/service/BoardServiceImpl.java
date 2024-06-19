package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.SearchVO;

public class BoardServiceImpl implements BoardService {
	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);

	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); // <-- interface - 구현객체.
	@Override
	public List<BoardVO> boardList(SearchVO search) {
		// TODO Auto-generated method stub
		return mapper.boardListpaging(search);
	}

	@Override
	public BoardVO getBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.insertBoard(bvo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.updateBoard(bvo) == 1; 
	}

	@Override
	public boolean removeBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.deleteBoard(bno) == 1;
	}
	
	@Override
	public int boardTotal(SearchVO search) {
		// TODO Auto-generated method stub
		return mapper.getTotalCnt(search);
	}
	
	@Override
	public MemberVO checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id, pw);
	}
	
	@Override
	public List<MemberVO> memberList() {
		return mapper.memberList();
	}
	
	@Override
	public boolean addMemberAjaxs(MemberVO mvo) {
		return mapper.insertMemberAjax(mvo) == 1;
	}
	
	@Override
	public boolean checkMemberId(String id) {
		// TODO Auto-generated method stub
		return mapper.selectMemberAjax(id) == 1;
	}
	
	@Override
	public boolean deleteMemberId(String id) {
		// TODO Auto-generated method stub
		return mapper.deleteMemberAjax(id) == 1;
	}
	@Override
	public boolean modifyMemberAjaxs(MemberVO mvo) {
		// TODO Auto-generated method stub
		return mapper.modifyMemberAjax(mvo) == 1;
	}
}
