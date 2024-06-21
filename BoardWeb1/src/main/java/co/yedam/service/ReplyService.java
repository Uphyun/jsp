package co.yedam.service;

import java.util.List;

import co.yedam.vo.ReplyVO;

public interface ReplyService {
	//목록, 단건, 입력, 삭제
	List<ReplyVO> replyList(int boardNo, int page); //목록조회
	ReplyVO getReply(int replyNo); // 단건
	boolean registerReply(ReplyVO rvo); // 등록 추가입력 
	boolean removeReply(int replyNo); //  삭제
	
	//댓글 건수
	int getTotalCount(int bno);
}
