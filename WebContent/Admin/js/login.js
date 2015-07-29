$(function() {

    // 大图
    focusPic();

    // 鼠标移上
    forBtn('#login');
    forBtn('#register');

	//点击登陆
	$("#login").click(function(){
		Clickland();
	});

});
function focusPic() {
    var totWidth = 0;
    var positions = new Array();
    $('#slides .slide').each(function(i) {
	positions[i] = totWidth;
	totWidth += $(this).width();
	if (!$(this).width()) {
	    alert("Please, fill in width & height for all your images!");
	    return false;
	}
    });
    $('#slides').width(totWidth);
    $('#menu ul li a').click(function(e, keepScroll) {
	$('li.menuItem').removeClass('act').addClass('inact');
	$(this).parent().addClass('act');
	var pos = $(this).parent().prevAll('.menuItem').length;
	$('#slides').stop().animate({
	    marginLeft : -positions[pos] + 'px'
	}, 450);
	e.preventDefault();
	if (!keepScroll)
	    clearInterval(itvl);
    });

    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    var current = 1;
    function autoAdvance() {
	if (current == -1)
	    return false;
	$('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [ true ]);
	current++;
    }
    var changeEvery = 10;
    var itvl = setInterval(function() {
	autoAdvance()
    }, changeEvery * 1000);
}

function forBtn(obj) {
    $(obj).mouseover(function() {
	$(this).animate({
	    color : '#fff',
	    backgroundColor : '#6cb6ee',
	}, 300);
    }).mouseout(function() {
	$(this).animate({
	    color : '#277fc2',
	    backgroundColor : '#fff',
	}, 300);
    })
}

//检查用户名是否为空
	function checkname(){
		var usename=document.getElementById("Username").value;
		var nameError=document.getElementById("UsernameError");
		if(!usename){
			nameError.style.display="block";
			nameError.innerHTML="用户名不能为空";
		}else{
			nameError.style.display="none";
		}
	}
	
	
	//检查密码是否为空
	function checkpw(){
		var pw=document.getElementById("Password").value;
		var pwError=document.getElementById("PasswordError");
		if(!pw){
			pwError.style.display="block";
			pwError.innerHTML="登录密码不能为空";
		}else{
			pwError.style.display="none";
		}
	}
	
	//检查密码是否为空
	function checkpin(){
		var pin=document.getElementById("Pin").value;
		var pinError=document.getElementById("PinError");
		if(!pin){
			pinError.style.display="block";
			pinError.innerHTML="请输入验证码";
		}else{
			pinError.style.display="none";
		}
	}
	
//点击关闭
function ClickClose(){
	var box=document.getElementById("login-register-box");
	var lay=document.getElementById("overlay");
	box.style.display="none";
	lay.style.display="none";
	}
	
//点击登录
function Clickland(){
	var box=document.getElementById("login-register-box");
	var lay=document.getElementById("overlay");
	box.style.display="block";
	lay.style.display="block";
	}
	

