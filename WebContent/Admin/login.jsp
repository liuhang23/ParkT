<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../../common/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>城市停车管理系统</title>
<link rel="stylesheet" type="text/css" href="../css/public.css">
<link rel="stylesheet" type="text/css" href="css/login.css">
<script type="text/javascript" src="../js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</head>
<body>

	<div class="login-register-box" id="login-register-box"></div>
	<!--login-register-box end-->
	<div class="overlay" id="overlay">
		<div class="part login-part">
			<a href="javascript:void(0)" class="close" onClick="ClickClose()"><b>X</b></a>
			<form action="" class="form">
				<h3>登录</h3>
				<p>
					<input type="text" name="Username" id="Username" placeholder="用户名" onblur="checkname()"> 
					<label for="Username"><img src="images/part-user.png" alt=""></label> 
					<label class="lerror-lab" id="UsernameError"></label>
				</p>
				<p>
					<input type="password" name="pw" id="Password" class="password"
						placeholder="密码" onblur="checkpw()"> <label for="password"><img
						src="images/part-pw.png" alt=""></label> <label class="lerror-lab"
						id="PasswordError"></label>
				</p>
				<p>
					<input type="text" name="PIN" id="Pin" class="v-code"
						placeholder="验证码" onblur="checkpin()" />
				</p>
				<p style="margin: 17px auto;">
					<img name="randImage" id="randImage" src="#" class="randImage"></img>
					<a href="javascript:loadimage();" class="reload-img-code">看不清点我</a>
				</p>
				<p>
					<a id="btn_login" class="btn-login">登录</a>
				</p>
			</form>
		</div>
	</div>



	<div class="header">
		<div class="header-inner">
			<img src="../images/logo.png" alt="logo" class="fl_lt" />
			<h2 class="fl_lt">城市综合停车管理平台</h2>
			<a href="javascript:void(0)" id="login" class="enter">登录</a>
			<div class="fl_rt welcome">您好，欢迎使用本系统!</div>
		</div>
	</div>
	<!--header end-->

	<div id="main">
		<div id="gallery">
			<div id="slides" style="width: 3680px; margin-left: 0px;">
				<div class="slide">
					<img width="990" height="400" alt="side"
						src="images/sample_slides/1.jpg"></img>
				</div>
				<div class="slide">
					<img width="990" height="400" alt="side"
						src="images/sample_slides/2.jpg"></img>
				</div>
				<div class="slide">
					<img width="990" height="400" alt="side"
						src="images/sample_slides/3.jpg"></img>
				</div>
			</div>
			<div id="menu">
				<ul>
					<li class="fbar inact">&nbsp;</li>
					<li class="menuItem inact act"><a href=""><img
							alt="thumbnail" src="images/sample_slides/thumb_1.png"></img></a></li>
					<li class="menuItem inact"><a href=""><img alt="thumbnail"
							src="images/sample_slides/thumb_2.png"></img></a></li>
					<li class="menuItem inact"><a href=""><img alt="thumbnail"
							src="images/sample_slides/thumb_3.png"></img></a></li>
				</ul>
			</div>
		</div>
	</div>
	<!--main end-->

	<div class="content">
		<div class="con-box">
			<h4>关于平台</h4>
			<p>智能交通是一个基于现代化电子信息技术，一种面向城市交通的服务系统。能够为客户提供多样性的服务。</p>
		</div>
		<div class="con-box">
			<h4>项目背景</h4>
			<p>我国数目膨大的流动人口，城市的生产和生活强度增加，现阶段的城市交通问题是社会经济发展的必然结果，城市作为区域交通的枢纽作用日益明显承受沉重的压力。</p>
		</div>
		<div class="con-box">
			<h4>项目目标</h4>
			<p>希望在这里，智能交通为您提供更便捷的绿色出行选择智能交通，方便您的出行。</p>
		</div>
	</div>
	<!--content end-->

	<div class="footer">
		<div class="footer_box fl_lt" style="margin-left: 200px;">
			<h4 class="footer_box_h4">友情链接</h4>
			<ul>
				<li><a class="footer_box_a"
					href="http://www.yhxuang.com/EIP/index/about">悦宏旭昂</a></li>
				<li><a class="footer_box_a"
					href="http://zhongcheng-xrj.company.xuanruanjian.com/">中诚旭昂</a></li>
				<li><a class="footer_box_a" href="http://szjfkhwu.foodqs.cn/">金图旭昂</a></li>
			</ul>
		</div>

		<div class="footer_box fl_lt">
			<h4 class="footer_box_h4">服务与支持</h4>
			<ul>
				<li><a class="footer_box_a" href="#">新手引导</a></li>
				<li><a class="footer_box_a" href="#">帮助中心</a></li>
				<li><a class="footer_box_a" href="#">在线反馈</a></li>
			</ul>
		</div>

		<div class="footer_box fl_lt">
			<h4 class="footer_box_h4">用户中心</h4>
			<ul>
				<li><a class="footer_box_a" href="javascript:void(0)">会员登录</a></li>
				<li><a class="footer_box_a" href="javascript:void(0)">免费注册</a></li>
			</ul>
		</div>

		<div class="footer_box fl_lt">
			<h4 id="footer_box_h4">其他</h4>
			<ul>
				<li><a class="footer_box_a" href="javascript:void(0)">行业新闻</a></li>
				<li><a class="footer_box_a" href="javascript:void(0)">客户案例</a></li>
				<li><a class="footer_box_a" href="javascript:void(0)">开发者大会</a></li>
			</ul>
		</div>

	<!-- 	<div class="footer_box fl_lt">
			<h4 class="footer_box_h4">关注悦宏旭昂</h4>
			<li><img style="border: solid 1px #ccc; margin-top: 10px;"
				src="../images/QR-code.jpg" /></li>
		</div> -->
	</div>
	<!--foot end-->
	<div id="copyright">Copyright ©2013 智能交通 版权所有 All right Reserved
		粤ICP备13073522</div>
	<!--copyright end-->
	
	
	
	<script type="text/javascript">
		$("#btn_login").click(function(){
			username = $("#Username").val();
			password = $("#Password").val();
			var send = {};
			send.cmd = "adminLogin";
			send.username = username;
			send.password = password;
			/* Smart.post("http://localhost:8080/ParkT/login",send,function(data){
				alert(data);
			});  */
		    var json_data = JSON.stringify(send);
			$.ajax({
				type:"post",
				url:"/ParkT/login",
				data:json_data,
				success:function(data){
					var jdata = data.trim();
					var Odata = JSON.parse(jdata);
					alert(Odata.res);
				}
			});	 	
		
		});
	</script>
</body>
</html>
