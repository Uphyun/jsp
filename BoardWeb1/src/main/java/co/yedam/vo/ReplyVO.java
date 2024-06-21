package co.yedam.vo;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyNo;
	private String reply;
	private String replyer;
	private String replyDate;
	private int boardNo;
}
