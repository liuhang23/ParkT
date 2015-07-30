<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../../common/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>城市综合停车管理平台</title>
<link rel="stylesheet" type="text/css" href="../css/public.css">
<link rel="stylesheet" type="text/css" href="css/login.css">
<script type="text/javascript" src="../js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="${basePath}/js/Smart.js"></script>
</head>
<body>
	<div class="header">
		<div class="header-inner">
			<img src="../images/logo.png" alt="logo" class="fl_lt" />
			<h2 class="fl_lt">城市综合停车管理平台</h2>
			<div class="fl_rt welcome">您好，欢迎使用本系统!</div>
		</div>
	</div>
	<!--end header-->

	<div class="middle">
		<div class="fl_lt">
			<img src="images/landBak.png" class="img" />
		</div>
		<div class="fl_lt land-box">
			<div>
				<div class="land-text">登录名：</div>
				<input type="text" id="land_name" />
			</div>
			<div>
				<div class="land-text mar-top">
					密码：
					<div class="fl_rt forgetPW">忘记密码？</div>
				</div>
				<input type="password" id="password" />
			</div>
			<div class="mar-top">
				<button id="landButton">登录</button>
			</div>
			<div class="mar-top">
				<input type="checkbox" checked />&nbsp;我同意并已阅读《悦宏旭昂网站服务协议》
			</div>
		</div>
		<!--end .land-Box-->
		<div style="clear: both"></div>
	</div>
	<!--.middle-->


	<script type="text/javascript">
		$("#landButton").click(function() {
			username = $("#land_name").val();
			password = $("#password").val();
			var send = {};
			send.cmd = "ParkAdminLogin";
			send.username = username;
			send.password = password;
		    Smart.post("/ParkT/login",send,function(data){
		    	var res = data.res;
		    	var cmd = data.cmd;
				if(res == "true" && cmd == "ParkAdminLogin"){
					location.href = "Index.html";
				}
			}); 
			/* var json_data = JSON.stringify(send);
			$.ajax({
				type : "post",
				url : "/ParkT/login",
				data : json_data,
				success : function(data) {
					var jdata = data.trim();
					var Odata = JSON.parse(jdata);
					alert(Odata.res);
				}
			});*/
 
		});
	</script>

</body>
</html>