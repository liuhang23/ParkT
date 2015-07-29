$(document).ready(function() {
	/*from--login.js*/
    mouse();//改变用户登录框的颜色 
	
	//注册
	$("#register").click(function(){
		register();
	});
	
	
	//检查注册的用户名
	$("#Rusername").blur(function(){
		Rcheckname();
	});
	//检查注册的密码
	$("#Rpassword").focus(function(){
		Rcheckpw2();
	});
	$("#Rpassword").blur(function(){
		Rcheckpw();
	});
	$("#Rpassword").keyup(function(){
			keyupChange();
		});
	$("#Rpassword1").blur(function(){
		Rcheckpw1();
	});
	
	//检查手机号
	$("#Rmobile").blur(function(){
	 	RcheckPhone();
	});
	//检查验证码
	$("#validation_text").blur(function(){
		validation();
	});
	//注册下一步
	showTwoStep();
	
});