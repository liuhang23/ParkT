

//改变边框颜色
function mouse(){
	$("#username,#password").focus(function(){
		$(this).parent().css("border-color","rgb(232, 94, 33)");
		});
	$("#username").blur(function(){
		$(this).parent().css("border-color","#277FC2");
		checkname();//检查登录用户名是否为空
		});
	$("#password").blur(function(){
		$(this).parent().css("border-color","#277FC2");
		checkpw();//检查登录密码是否为空
		});
}

//检查登录用户名是否为空
function checkname(){
	var usename=document.getElementById("username").value;
	var nameError=document.getElementById("usernameError");
	if(!usename){
		nameError.style.display="block";
		nameError.innerHTML="用户名不能为空";
	}else{
		nameError.style.display="block";
		nameError.innerHTML="";
	}
}

//检查登录密码是否为空
function checkpw(){
	var pw=document.getElementById("password").value;
	var pwError=document.getElementById("passwordError");
	if(pw==""){
		pwError.style.display="block";
		pwError.innerHTML="登录密码不能为空";	
	}else{
		pwError.style.display="block";
		pwError.innerHTML="";
	}
}


//显示登录界面
function showLandUI(){
	var mid=document.getElementById("centre");
var con=document.getElementById("content");
var regLand=document.getElementById("register");
var userReg=document.getElementById("User_register");
		userReg.style.display="none";
		mid.style.display="block";
		con.style.display="block";
		regLand.text="注册";
	}
//显示注册界面
function showRegisterUI(){
	var mid=document.getElementById("centre");
var con=document.getElementById("content");
var regLand=document.getElementById("register");
var userReg=document.getElementById("User_register");
	userReg.style.display="block";
	mid.style.display="none";
	con.style.display="none";
	regLand.text="登录";
	}
	
//登录注册界面切换
function register(){
	var regOrLand=document.getElementById("register").text;
	if(regOrLand=="注册"){
		showRegisterUI();
		//注册框显示
		$(".step input").focus(function(){
			$(this).css({"background-color":"rgb(226, 241, 253)","border-color": "rgb(124, 172, 215)"});
		});
		$(".step input").blur(function(){
			$(this).css({"background-color":"#fff","border-color": "#ccc"});
		});	
	}else if(regOrLand=="登录"){
		showLandUI();
		}
}


//检查注册用户名是否为空
function Rcheckname(){
	var Rusename=document.getElementById("Rusername").value;
	var RnameError=document.getElementById("RusernameError");
	if(!Rusename){
		RnameError.innerHTML='<img src="images/error.png" class="TSimg" />'+'请输入用户名';
	}else{
		RnameError.innerHTML='<img src="images/true.png" class="TSimg" />';
		return true;
	}
}


//检查注册密码是否为空
function Rcheckpw(){
	var Rpw=document.getElementById("Rpassword").value;
	var RpwError=document.getElementById("RpasswordError");
	if(Rpw.length<6||Rpw.length>20){
		RpwError.style.display="inline";
		if(Rpw.length<6){
		RpwError.innerHTML='<img src="images/error.png" class="TSimg" />'+'密码至少为6位';
		}else if(Rpw.length>20){
			RpwError.innerHTML='<img src="images/error.png" class="TSimg" />'+'密码最多为20位';
			}
		RpwError.style.color="red";
		$("#PWprompt").css("display","none");
	}else{
		RpwError.style.display="inline";
		RpwError.innerHTML='<img src="images/true.png" class="TSimg" />';
		$("#PWprompt").css("display","none");
		return true;
	}
}
//显示密码安全性
function keyupChange(){
	var Rpw=document.getElementById("Rpassword").value;
	var safyFour=document.getElementById("safyFour");
	if(Rpw.length==0){
		$("#safyOne,#safyTwo,#safyThree").css("background-color","#ccc");
	}else if(Rpw.length>0&&Rpw.length<12){
		$("#safyOne").css("background-color","#F60");	
		$("#safyTwo,#safyThree").css("background-color","#ccc");
		safyFour.innerHTML="低";
		}else if(Rpw.length>=12&&Rpw.length<=20){
			$("#safyOne,#safyTwo").css("background-color","#F60");	
			$("#safyThree").css("background-color","#ccc");
			safyFour.innerHTML="中";
			}
	}
//再次输入密码是否正确
function Rcheckpw1(){
	var Rpw=document.getElementById("Rpassword").value;
	var RpwError1=document.getElementById("RpasswordError1");
	var Rpw1=document.getElementById("Rpassword1").value;
	if(Rpw1==""){
			RpwError1.innerHTML='<img src="images/error.png" class="TSimg" />'+'请再次输入密码';
			RpwError1.style.color="red";
		}else if(Rpw!=Rpw1){
			RpwError1.innerHTML='<img src="images/error.png" class="TSimg" />'+'密码不一致';
			RpwError1.style.color="red";
		}else if(Rpw==Rpw1){
			RpwError1.innerHTML='<img src="images/true.png" class="TSimg" />';
			return true;
		}
}
function Rcheckpw2(){
	var RpwError2=document.getElementById("RpasswordError");
	$("#PWprompt").css("display","block");
	RpwError2.style.display="none";
}
//验证手机号
function RcheckPhone(){
	var mobile=document.getElementById("Rmobile").value;
	var phn= /^1\d{10}$/;
	var mobileError=document.getElementById("RmobileError");
	if(phn.test(mobile)){
		mobileError.innerHTML='<img src="images/true.png" class="TSimg" />';
		return true;
		}else{
			mobileError.innerHTML='<img src="images/error.png" class="TSimg" />'+'手机号错误';
			}
}
//检测验证码
function validation(){
	var validation1=document.getElementById("validation_text").value;
	var validation2=document.getElementById("validationError");
	if(validation1=="123456"){
		validation2.innerHTML='<img src="images/true.png" class="TSimg" />';
		return true;
		}else{
			validation2.innerHTML='<img src="images/error.png" class="TSimg" />'+'验证码错误';
			}
}
//显示第二步或第三部步
function showTwoStep(){
	$("#next-step1").click(function(){
		var agreeInput=document.getElementById("agreeInput");
		if(Rcheckname()&&Rcheckpw()&&Rcheckpw1()&&agreeInput.checked){
		$("#step2").css("display","block");
		$("#step1,#step1").css("display","none");
		$("#steps-inner li:eq(1)").addClass("active");
		$("#steps-inner li:eq(3)").removeClass("active");
		}
	});
	$("#next-step2").click(function(){
		if(RcheckPhone()&&validation()){
			$("#step3").css("display","block");
			$("#step1,#step2").css("display","none");
			$("#steps-inner li:eq(2)").addClass("active");
			startTime();
		}
	});
}

//注册成功倒计时
var six=6;
function startTime(){
		var mid=document.getElementById("centre");
		var con=document.getElementById("content");
		var regLand=document.getElementById("register");
		var userReg=document.getElementById("User_register");
		six--;
		document.getElementById("last_six").innerHTML=six;
		if(six>0){
		 setTimeout('startTime()',1000);
		}else{
			showLandUI();
			}
}


