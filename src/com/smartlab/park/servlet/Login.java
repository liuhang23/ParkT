package com.smartlab.park.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sun.misc.BASE64Encoder;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.smartlab.park.dao.UserService;
import com.smartlab.park.util.SessionUtil;
import com.smartlab.park.util.Util;

@WebServlet(urlPatterns={"/login","/adminLogin"})
public class Login extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private SessionUtil SessionUtil;

	private UserService userService;

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		JSONObject outObject = new JSONObject(); // 实例化jsonObject
		HttpSession session = request.getSession(); // 请求得到session

		JSONObject jsonObject = Util.postdecode(request); // 使用解析工具

		String cmd = jsonObject.getString("cmd");
		String username = jsonObject.getString("username");
		String password = jsonObject.getString("password");
		if ("login".equals(cmd)) {
			if (userService.login(username, password)) {
				String username_ = username;
				username_ = URLEncoder.encode(username_, "utf-8");
				username_ = new BASE64Encoder().encode(username_.getBytes());
				Cookie user_Cookie = new Cookie("park_username", username_);
				user_Cookie.setPath("/ParkT");
				user_Cookie.setMaxAge(1 * 24 * 60 * 60);
				response.addCookie(user_Cookie);
				// 存session
				String sessionid = session.getId();
				SessionUtil.userSession.put(username, sessionid);
				outObject.put("res", "true");
			} else {
				outObject.put("res", "false");
			}

		} else if ("adminLogin".equals(cmd)) {
			if (userService.adminLogin(username, password)) {
				String username_ = username;
				username_ = URLEncoder.encode(username_, "utf-8");
				username_ = new BASE64Encoder().encode(username_.getBytes());
				Cookie user_Cookie = new Cookie("park_admin", username_);
				user_Cookie.setPath("/ParkT");
				user_Cookie.setMaxAge(1 * 24 * 60 * 60);
				response.addCookie(user_Cookie);
				// 存session
				String sessionid = session.getId();
				SessionUtil.adminSession.put(username, sessionid);
				outObject.put("res", "true");
			} else {
				outObject.put("res", "false");
			}
		} else if ("ParkAdminLogin".equals(cmd)) {
			if (userService.ParkAdminLogin(username, password)) {
				String username_ = username;
				username_ = URLEncoder.encode(username_, "utf-8");
				username_ = new BASE64Encoder().encode(username_.getBytes());
				Cookie user_Cookie = new Cookie("park_parkAdminname", username_);
				user_Cookie.setPath("/ParkT");
				user_Cookie.setMaxAge(1 * 24 * 60 * 60);
				response.addCookie(user_Cookie);
				// 存session
				String sessionid = session.getId();
				SessionUtil.parkAdminSession.put(username, sessionid);
				outObject.put("res", "true");
			} else {
				outObject.put("res", "false");
			}
		}
		outObject.put("cmd", cmd);
		out.print(JSON.toJSONString(outObject));

	}

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		System.out.println("test get");
		this.doPost(request, response);
	}

}
