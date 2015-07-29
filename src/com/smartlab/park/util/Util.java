package com.smartlab.park.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.DataTruncation;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 公共方法
 * 
 * @author chen
 *
 */
public class Util {

	/**
	 * 将post方式上传的数据解析成jsonObject格式 utf-8
	 * 
	 * @param request
	 *              (servlet中的)
	 * @return
	 * @throws IOException
	 */
	public static JSONObject postdecode(HttpServletRequest request) throws IOException {
		StringBuffer sb = new StringBuffer();
		InputStream is = request.getInputStream();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		String s = "";
		while ((s = br.readLine()) != null) {
			sb.append(s);
		}
		String send_str = new String(sb.toString().getBytes("utf-8"), "utf-8");
		JSONObject jsonObject = JSON.parseObject(send_str);
		return jsonObject;
	}

	/**
	 * 转时间格式
	 * 
	 * @param datetime
	 * @return
	 */
	public static String yyyymmddChange(String datetime) {
		if (datetime.length() == 8) {
			return (datetime.substring(0, 4) + "-" + datetime.substring(4, 6) + "-" + datetime.substring(6, 8) + " 00:00:00");
		} else {
			return "0000-00-00 00:00:00";
		}
	}

	/**
	 * 获取当前时间
	 * 
	 * @return
	 */
	public static String getNowTime() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date now = new Date();
		String nowTime = sdf.format(now);
		return nowTime;
	}

	/**
	 * 获得一个UUID
	 * 
	 * @return String UUID
	 */
	public static String getUUID() {
		String s = UUID.randomUUID().toString();
		// 去掉“-”符号
		return s.substring(0, 8) + s.substring(9, 13) + s.substring(14, 18) + s.substring(19, 23) + s.substring(24);
	}

	/**
	 * 计算地球上任意两点(经纬度)距离
	 * 
	 * @param long1
	 *              第一点经度
	 * @param lat1
	 *              第一点纬度
	 * @param long2
	 *              第二点经度
	 * @param lat2
	 *              第二点纬度
	 * @return 返回距离 单位：米
	 */
	public static double distance(double long1, double lat1, double long2, double lat2) {
		double a, b, R;
		R = 6378137; // 地球半径
		lat1 = lat1 * Math.PI / 180.0;
		lat2 = lat2 * Math.PI / 180.0;
		a = lat1 - lat2;
		b = (long1 - long2) * Math.PI / 180.0;
		double d;
		double sa2, sb2;
		sa2 = Math.sin(a / 2.0);
		sb2 = Math.sin(b / 2.0);
		d = 2 * R * Math.asin(Math.sqrt(sa2 * sa2 + Math.cos(lat1) * Math.cos(lat2) * sb2 * sb2));
		// 上面得到的是3667.295549328594以米为单位
		// d/1000 = 3.667295549328594
		// distance = d/1000
		DecimalFormat df1 = new DecimalFormat("#.###");
		return Double.parseDouble(df1.format(d / 1000));
		// return d;
	}

	// 测试
	public static void main(String[] args) {

		// double d = Distance(112.183692, 30.341042, 112.22178, 30.338861);
		// System.out.println(d / 1000); // 3.667295549328594
		// DecimalFormat df1 = new DecimalFormat("#.###");
		// System.out.println(df1.format(2.1)); // 10003.667

		// 3667.295549328594
		// 3.667

		System.out.println(yyyymmddChange("2015072"));
	}
}
