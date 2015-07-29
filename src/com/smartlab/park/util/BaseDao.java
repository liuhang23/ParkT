package com.smartlab.park.util;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

import javax.servlet.jsp.jstl.sql.Result;
import javax.servlet.jsp.jstl.sql.ResultSupport;

import com.mysql.jdbc.Statement;

/**
 * @ClassName: DBHelper
 * @Description: JDBC连接源，管理所有与数据库的连接 包含对表进行操作的方法， 以及对存储过程的调用方法。
 * @author: hd
 * @date: 2015-6-29 下午3:05:24
 */

public class BaseDao {
	public static String DRIVER; // 驱动类
	public static String URL; // 地址
	public static String USERNAME; // 用户名
	public static String PASSWORD; // 密码
	// 连接结果集
	private static Connection conn = null;
	private static PreparedStatement pst = null;
	private static ResultSet rs = null;
	private static Result result = null;
	private static CallableStatement cst = null;

	/**
	 * 静态块 始终最新执行，类加载就执行
	 */
	static {
		// 用来存储配置信息
		Properties properties = new Properties();
		try {
			// 2.通过类加载器获取配置文件，从根目录开始
			properties.load(BaseDao.class.getClassLoader().getResourceAsStream(
					"jdbc.properties"));
			DRIVER = properties.getProperty("driver", "com.mysql.jdbc.Driver");
			URL = properties.getProperty("jdbcUrl");
			USERNAME = properties.getProperty("userName");
			PASSWORD = properties.getProperty("passWord");
			// 加载数据
			Class.forName(DRIVER);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("配置文件读取失败");
		}
	}

	// 获取连接
	public static void getConnection() {
		try {
			conn = DriverManager.getConnection(URL, USERNAME, PASSWORD);
			System.out.println("数据库连接成功");
		} catch (Exception e) {
			System.out.println("数据库连接失败");
			e.printStackTrace();
		}
	}

	// 1.执行不带参数的，带结果集的sql
	public static Result runQuerySql(String sql) {
		Result rst = null;
		try {
			getConnection();
			pst = conn.prepareStatement(sql);
			rs = pst.executeQuery();
			rst = ResultSupport.toResult(rs);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			relase(conn, pst, rst);
		}
		return rst;
	}

	// 2.执行带参数的，带结果集的sql
	public static Result runQuerySql(String sql, Object obj[]) {
		Result rst = null;
		try {
			getConnection();
			pst = conn.prepareStatement(sql);
			if (obj != null) {
				fillStatement(pst,obj);
			}
			rs = pst.executeQuery();
			rst = ResultSupport.toResult(rs);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			relase(conn, pst, rst);
		}
		return rst;
	}
	
	// 3.执行进行增加，删除，修改的Sql
		public static boolean QuerySql(String sql, Object obj[]) {
			getConnection();
			try {
				pst = conn.prepareStatement(sql);
				if (obj != null) {
					fillStatement(pst,obj);
				}
				pst.executeQuery();

			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}finally{
				relase(conn, pst);
			}
			return true;
		}
	
	

	// 3.执行进行增加，删除，修改的Sql
	public static boolean runUpdateSql(String sql, Object obj[]) {
		getConnection();
		try {
			pst = conn.prepareStatement(sql);
			if (obj != null) {
				fillStatement(pst,obj);
			}
			pst.executeUpdate();

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}finally{
			relase(conn, pst);
		}
		return true;
	}

	// 4.调用没结果，有参数的存储过程
	public static boolean runProcUpdate(String procName, Object[] params) {
		try {
			getConnection();
			String proc = "{call " + procName + "(";
			for (int i = 0; i < params.length; i++) {
				proc += "?,";
			}
			proc = proc.substring(0, proc.length() - 1) + ")}";
			cst = conn.prepareCall(proc);
			for (int i = 0; i < params.length; i++) {
				if (params[i] != null) {
					cst.setObject(i + 1, params[i]);
				} else {
					cst.registerOutParameter(i + 1, java.sql.Types.VARCHAR);
				}
			}
			cst.executeUpdate();
			for (int i = 0; i < params.length; i++) {
				if (params[i] == null) {
					params[i] = cst.getObject(i + 1);
				}
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			relase(conn, pst);
		}
	}

	// 5.调用有结果，有参数的存储过程
	public static Result runProcSelect(String procName, Object[] params) {
		try {
			getConnection();
			String proc = "{call " + procName + "(";
			for (int i = 0; i < params.length; i++) {
				proc += "?,";
			}
			proc = proc.substring(0, proc.length() - 1) + ")}";
			cst = conn.prepareCall(proc);
			for (int i = 0; i < params.length; i++) {
				if (params[i] != null) {
					cst.setObject(i + 1, params[i]);
				} else {
					cst.registerOutParameter(i + 1, java.sql.Types.VARCHAR);
				}
			}
			rs = cst.executeQuery();
			result = ResultSupport.toResult(rs);
			for (int i = 0; i < params.length; i++) {
				if (params[i] == null) {
					params[i] = cst.getObject(i + 1);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			relase(conn, pst);
		}
		return result;
	}

	// 6关闭连接集
	public static boolean relase(Object... obj) {
		Connection connection = null;
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		boolean flag = true;
		try {
			// 将传入的参数对象赋值给对应的对象
			for (int i = 0; i < obj.length; i++) {
				Object object = obj[i];
				if (object instanceof Connection) {
					connection = (Connection) object;
				} else if (object instanceof Statement) {
					preparedStatement = (PreparedStatement) object;
				} else if (object instanceof ResultSet) {
					resultSet = (ResultSet) object;
				}
			}
			if (resultSet != null) {
				resultSet.close();
			}
			if (preparedStatement != null) {
				preparedStatement.close();
			}
			if (connection != null) {
				connection.close();
			}
			System.out.println("数据库资源释放完成");
		} catch (Exception e) {
			flag = false;
			System.out.println("数据库资源释放失败");
			e.printStackTrace();
		}

		return flag;
	}

	// 7.参数的填充执行
	public static void fillStatement(PreparedStatement preparedStatement,Object... args) throws Exception {
		for (int i = 0; i < args.length; i++) {
			// 下标从1开始
			preparedStatement.setObject(i + 1, args[i]);
		}
	}

	public static void main(String[] args) {
		// System.out.println(BaseDao.getConnection());
	}

}