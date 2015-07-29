$(document).ready(function() {
	//表格隔行变色
    window.onload=parkManage();
	
	//侧边栏
 	menuMainR();
	//侧边栏效果
	LeftClick();
	
	//停车预定三个横向导航切换
    HorNavigation();
});


//侧边栏
function menuMainR(){
	$("#TCCxq").click(function(){
			$("#park_details").css("display","block");
			$("#park_details").siblings().css("display","none");
		});
	$("#KStc").click(function(){
			$("#park_start").css("display","block");
			$("#park_start").siblings().css("display","none");
		});
	$("#TCyd").click(function(){
			$("#park_reserve").css("display","block");
			$("#park_reserve").siblings().css("display","none");
		});
}
//侧边栏效果
function LeftClick(){
	$(".menu-one").click(function(){
		$(this).addClass("click-change");
		$(this).parent("li").siblings("li").children("a").removeClass("click-change");
		$(this).parent("li").siblings("li").children("a").css("color","#666");
	});
}

//开始停车列表
function startPark(){
	
}
//表格隔行变色
function parkManage(){
	$("#park_startTr li:odd, #ResReq_tr li:odd, #EndPark_tr li:odd, #RemSche_tr li:odd").addClass("park-liOdd");
	$("#park_startTr li:even, #ResReq_tr li:even, #EndPark_tr li:even, #RemSche_tr li:even").addClass("park-liEven");
	}
//停车预定三个横向导航切换
function HorNavigation(){
	$("#ResReq_Navigation").click(function(){
		$("#park_ResReq").css("display","block");
		$("#park_ResReq").siblings(":not(#Hor_Navigation)").css("display","none");
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
	});
	$("#EndPark_Navigation").click(function(){
		$("#park_EndPark").css("display","block");
		$("#park_EndPark").siblings(":not(#Hor_Navigation)").css("display","none");
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
	});
	$("#RemSche_Navigation").click(function(){
		$("#park_RemSche").css("display","block");
		$("#park_RemSche").siblings(":not(#Hor_Navigation)").css("display","none");
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
	});
}
