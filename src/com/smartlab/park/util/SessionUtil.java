package com.smartlab.park.util;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;



/**
 * session工具类
 * 
 * @author liu
 */
public class SessionUtil {

//	@EJB
//	private IParkService parkService;

	// 使用线程安全的map(用户名为key)

	// 将map改成mem

	// 普通用户session
	public static Map<String, String> userSession = new ConcurrentHashMap<String, String>();

	// 管理员session
	public static Map<String, String> adminSession = new ConcurrentHashMap<String, String>();

	// 停车场管理员
	public static Map<String, String> parkAdminSession = new ConcurrentHashMap<String, String>();

	// 订单号(目前正在记录的订单 使用车牌号作为key) //不使用
	public static Map<String, Long> orderNum = new ConcurrentHashMap<String, Long>();

	public static int startloading_flag = 0;

	// 验证判断是不是存在(判断方法可以改下,先验证key是不是在map)
	public boolean isUser(String username, String sessionid) {
		// int flag = 0;
		// for (Map.Entry<String, String> Map_temp : userSession.entrySet())
		// {
		// if (username.equals(Map_temp.getKey())) {
		// flag = 1;
		// if (sessionid.equals(Map_temp.getValue())) {
		// flag = 2;
		// }
		// }
		// }
		// if (flag == 0) {
		// System.out.println("不存在该用户!");
		// return false;
		// } else if (flag == 1) {
		// System.out.println(username + "的session失效");
		// return false;
		// } else {
		// return true;
		// }
		if (userSession.containsKey(username)) {
			if (userSession.get(username).equals(sessionid)) {
				return true;
			} else {
				System.out.println(username + "的session失效");
				return false;
			}
		} else {
			System.out.println("userSession不存在该用户!");
			return false;
		}

	}

	public boolean isAdmin(String username, String sessionid) {
		if (adminSession.containsKey(username)) {
			if (adminSession.get(username).equals(sessionid)) {
				return true;
			} else {
				System.out.println(username + "的session失效");
				return false;
			}
		} else {
			System.out.println("adminSession不存在该用户!");
			return false;
		}
	}

	public boolean isparkAdmin(String username, String sessionid) {
		if (parkAdminSession.containsKey(username)) {
			if (parkAdminSession.get(username).equals(sessionid)) {
				return true;
			} else {
				System.out.println(username + "的session失效");
				return false;
			}
		} else {
			System.out.println("parkAdminSession不存在该用户!");
			return false;
		}
	}

	public void startloading() {
		if (startloading_flag == 0) {
			startloading_flag++;
//			parkService.loadingPark();
		}
	}
}
