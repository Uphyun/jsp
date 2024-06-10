package co.yedam;

public class Student {
	private String stdNo;  //오라클에서는 대소문자 구문 안함
	private String stdName;
	private String phone;
	private String btype;
	private String createDate;
	
	public String getStdNo() {
		return stdNo;
	}
	public void setStdNo(String stdNo) {
		this.stdNo = stdNo;
	}
	public String getStdName() {
		return stdName;
	}
	public void setStdName(String stdName) {
		this.stdName = stdName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getbtype() {
		return btype;
	}
	public void setbtype(String btype) {
		this.btype = btype;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	
	//toString 오버라이딩
	@Override
	public String toString() {
		return "Student [stdNo=" + stdNo + ", stdName=" + stdName + ", phone=" + phone + ", bldType=" + btype
				+ ", createDate=" + createDate + "]";
	}
	
	
	
	
	
}
