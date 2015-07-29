<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../../common/taglib.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@include file="../../common/common.jsp"%>
<title>城市停车管理系统---用户登陆</title>
</head>
<body>
	<div class="header">
		<div class="header-inner">
			<img src="${basePath}/images/logo.png" alt="logo" class="fl_lt" />
			<h2 class="fl_lt">城市综合停车管理平台</h2>
			<a href="javascript:void(0)" id="register" class="fl_rt">注册</a>
			<div class="fl_rt welcome">您好，欢迎使用本系统!</div>
		</div>
	</div>
	<!--end header-->


	<div class="middle">
		<!--for land-->
		<div class="centre" id="centre">
			<div class="landText">
				<div class="landForgtPW">
					忘记<br>密码<br>？
				</div>
				<div class="landDiv">
					<div class="landInpute" id="UNdiv">
						<input type="text" placeholder="输入手机号" id="username" />
					</div>
					<div class="landError" id="usernameError"></div>
					<div class="landInpute" id="PWdiv">
						<input type="password" placeholder="登录密码" id="password" />
					</div>
					<div class="landError" id="passwordError"></div>
				</div>
				<!-- 我在这里加了一个id -->
				<div class="landForgtPW landButton" id="login">登录</div>
			</div>
		</div>
		<!--end centre-->

		<!--for register-->
		<div class="register" id="User_register">
			<div class="steps-inner" id="steps-inner">
				<ol>
					<li class="active"><i>1</i><font>设置用户名</font></li>
					<li><i>2</i><font>验证用户名</font></li>
					<li><i>&radic;</i><font>注册成功</font></li>
				</ol>
			</div>
			<div class="step-con">
				<div id="step1">
					<div class="step">
						<font>用户名</font><input type="text" class="fl_lt" id="Rusername"
							placeholder="请输入用户名" />
						<div class="regError" id="RusernameError"></div>
					</div>
					<div class="step">
						<font>密码</font><input type="password" id="Rpassword"
							placeholder="请输入密码" />
						<div class="regprompt" id="PWprompt">
							<div class="bubble">
								<ol>
									<li>安全程度:&nbsp;
										<div class="safety" id="safyOne"></div>
										<div class="safety" id="safyTwo"></div>
										<div class="safety" id="safyThree"></div>
										<div class="fl_rt" id="safyFour"></div>
									</li>
									<li><div class="seqIdentity"></div>6-20个字符</li>
									<li><div class="seqIdentity"></div>只能包含数字、字母以及标点符号</li>
								</ol>
							</div>
						</div>
						<div class="regError" id="RpasswordError"></div>
					</div>
					<div class="step">
						<font>确认密码</font><input type="password" class="fl_lt"
							id="Rpassword1" placeholder="请再输入密码" />
						<div class="regError" id="RpasswordError1"></div>
					</div>
					<!-- 我在此处加了id -->
					<div class="next-step" id="next-step1">
						<input type="button" value="下一步" id="first_step">
					</div>
					<!-- 我在这里加了id把提示改为空的div -->
					<div class="repUsername" id="hadregist"></div>
				</div>
				<div id="step2">
					<div class="step">
						<font>手机号码</font> <input type="text" id="Rmobile"
							placeholder="请输入手机号码" />
						<div class="regError" id="RmobileError"></div>
					</div>
					<!-- 我在此处加了id -->
					<div class="validation">
						<input type="button" value="免费获取短信验证" id="sendmessage">
					</div>
					<div class="step">
						<font>短信验证码</font> <input type="text" placeholder="6位数"
							id="validation_text" />
						<div class="regError" id="validationError"></div>
					</div>
					<div class="next-step" id="next-step2">
						<input type="button" value="下一步" id="second_step">
					</div>
				</div>
				<div id="step3">
					<div class="step last_six">
						<b id="last_six">6</b>秒后将自动跳转到登陆界面
					</div>
				</div>
			</div>
			<!--end .step-con-->
		</div>
	</div>
	<!--end middle-->


	<div class="content" id="content">
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
		<div class="footer_box fl_lt" style="margin-left: 180px;">
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
			<h4 class="footer_box_h4">其他</h4>
			<ul>
				<li><a class="footer_box_a" href="javascript:void(0)">行业新闻</a></li>
				<li><a class="footer_box_a" href="javascript:void(0)">客户案例</a></li>
				<li><a class="footer_box_a" href="javascript:void(0)">开发者大会</a></li>
			</ul>
		</div>

		<!-- <div class="footer_box fl_lt">
      	<h4 class="footer_box_h4">关注悦宏旭昂</h4>
          <li><img style="border:solid 1px #ccc; margin-top:10px;" src="../images/QR-code.jpg" /></li>
      </div> -->
	</div>
	<!--foot end-->

	<div id="copyright">Copyright ©2013 智能交通 版权所有 All right Reserved  粤ICP备13073522</div>
	<!--copyright end-->

	<script type="text/javascript">
		$("#login").click(function(){
			username = $("#username").val();
			password = $("#password").val();
			var send = {};
			send.cmd = "login";
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