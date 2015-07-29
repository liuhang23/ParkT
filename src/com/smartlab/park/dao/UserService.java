package com.smartlab.park.dao;

import com.smartlab.park.util.BaseDao;

//用户Service层
public class UserService {

	// 用户登陆
	public static boolean login(String username, String password) {
		String sql = "select *from user where username = ? and password = ?";
		Object[] params = { username, password };
		Boolean flag = BaseDao.QuerySql(sql, params);
		if (flag) {
			return flag;
		} else {
			try {
				throw new Exception("该用户不存在");
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}
	}

	// 管理员登陆
	public static boolean adminLogin(String username, String password) {
		String sql = "select *from admin where username = ? and password = ?";
		Object[] params = { username, password };
		Boolean flag = BaseDao.QuerySql(sql, params);
		if (flag) {
			return flag;
		} else {
			try {
				throw new Exception("该管理员用户不存在");
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}
	}

	// 管理员登陆
	public static boolean ParkAdminLogin(String username, String password) {
		String sql = "select *from parkAdmin where username = ? and password = ?";
		Object[] params = { username, password };
		Boolean flag = BaseDao.QuerySql(sql, params);
		if (flag) {
			return flag;
		} else {
			try {
				throw new Exception("该停车管理员用户不存在");
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}
	}

}
