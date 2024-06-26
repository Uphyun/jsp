package co.yedam.service;

import java.util.List;

import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.SearchVO;

/*
 * 목록,단건,등록,수정,삭제
 * 기능의 실행은 mapper 실행
 */
public interface BoardService { 
	
	List<BoardVO> boardList(SearchVO search); //학생목록조회
	int boardTotal(SearchVO search);
	BoardVO getBoard(int bno); //단건조회
	boolean addBoard(BoardVO bvo); // 등록
	boolean editBoard(BoardVO bvo); // 편집
	boolean removeBoard(int bno);
	List<MemberVO> memberList();
	// checkMember(id, pw)
	MemberVO checkMember(String id, String pw);
	
	boolean addMemberAjaxs(MemberVO mvo);
	boolean checkMemberId(String id);
	boolean deleteMemberId(String id);
	boolean modifyMemberAjaxs(MemberVO mvo);
	
	
	
}
