package com.smartlab.park.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 用户实体(user)
 * 
 * @author liu
 */
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	private long id;

	// private long parkId; // 关联的停车场id

	private String username; // 用户登陆名

	private String password; // 用户密码

	private String phone; // 手机号

	private String realname; // 真实姓名

	private String IDcard; // 语音卡

	private String bankcard; // 银行卡

	private String mail; // 邮箱

	private String registerTime; // 注册时间

	private String money; // 消费总金额

	private List<Bind> bindList = new ArrayList<>(); // 车牌号和语音卡相绑定

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User() {

	}

	public User(long id, String username, String password, String phone,
			String realname, String iDcard, String bankcard, String mail,
			String registerTime, String money, List<Bind> bindList) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.phone = phone;
		this.realname = realname;
		this.IDcard = iDcard;
		this.bankcard = bankcard;
		this.mail = mail;
		this.registerTime = registerTime;
		this.money = money;
		this.bindList = bindList;
	}

	// public long getParkId() {
	// return parkId;
	// }
	//
	// public void setParkId(long parkId) {
	// this.parkId = parkId;
	// }

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getRealname() {
		return realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public String getIDcard() {
		return IDcard;
	}

	public void setIDcard(String iDcard) {
		IDcard = iDcard;
	}

	public String getBankcard() {
		return bankcard;
	}

	public void setBankcard(String bankcard) {
		this.bankcard = bankcard;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(String registerTime) {
		this.registerTime = registerTime;
	}

	public String getMoney() {
		return money;
	}

	public void setMoney(String money) {
		this.money = money;
	}

	public List<Bind> getBindList() {
		return bindList;
	}

	public void setBindList(List<Bind> bindList) {
		this.bindList = bindList;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password="
				+ password + ", phone=" + phone + ", realname=" + realname
				+ ", IDcard=" + IDcard + ", bankcard=" + bankcard + ", mail="
				+ mail + ", registerTime=" + registerTime + ", money=" + money
				+ ", bindList=" + bindList + "]";
	}

}
