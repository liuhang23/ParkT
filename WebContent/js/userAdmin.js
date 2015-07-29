// JavaScript Document

//鼠标移上去及点击时菜单效果
function clickChange(){
	$(".menu-one:not(#repairXT), .menu-one:not(#admin_repXT)").click(function(){
		$(this).addClass("click-change");
		$(this).parent("li").siblings("li").children("a").removeClass("click-change");
		$("#my_repair,#submit_repair,#hand_repair,#untreated_repair,#history_repair").removeClass("click-change");
		$(this).parent("li").siblings("li").children("a").css("color","#666");
		$(".menu-two").css("color","#666");
	});
	$("#repairXT, #admin_repXT").click(function(){
		$(this).siblings("ul").slideToggle("slow",function(){
			if($(this).is(":hidden")){
				$("#repairXT,#admin_repXT").mouseenter(function(){
					$("#user_li,#admin_repair").css("background-position","20px 20px");
				});
				$("#repairXT,#admin_repXT").mouseleave(function(){
					$("#user_li,#admin_repair").css("background-position","20px -141px");
				});
			}else{
				$("#repairXT,#admin_repXT").mouseenter(function(){
					$("#user_li,#admin_repair").css("background-position","20px -302px");
				});
				$("#repairXT,#admin_repXT").mouseleave(function(){
					$("#user_li,#admin_repair").css("background-position","20px -463px");
				});
			}
		});
		$(this).parent("li").siblings().children("a").removeClass("click-change");
		$(this).parent("li").siblings().children("a").css("color","#666");
	});
	$("#repairXT,#admin_repXT").mouseenter(function(){
		$("#user_li,#admin_repair").css("background-position","20px -302px");
	});
	$("#repairXT,#admin_repXT").mouseleave(function(){
		$("#user_li,#admin_repair").css("background-position","20px -463px");
	});
	$("#repairXT,#my_repair,#admin_repXT,#hand_repair").click(function(){
		$("#my_repair,#hand_repair").addClass("click-change");
		$("#submit_repair,#untreated_repair,#history_repair").removeClass("click-change");
		$(".menu-one").removeClass("click-change");
		$("#user_li,#admin_repair").siblings("li").children("a").css("color","#666");
		$("#submit_repair,#untreated_repair,#history_repair").css("color","#666");
	});
	$("#submit_repair,#untreated_repair").click(function(){
		$("#submit_repair,#untreated_repair").addClass("click-change");
		$("#my_repair,#hand_repair,#history_repair").removeClass("click-change");
		$(".menu-one").removeClass("click-change");
		$("#user_li,#admin_repair").siblings("li").children("a").css("color","#666");
		$("#my_repair,#hand_repair,#history_repair").css("color","#666");
	});
	$("#history_repair").click(function(){
		$("#history_repair").addClass("click-change");
		$("#hand_repair,#untreated_repair").removeClass("click-change");
		$(".menu-one").removeClass("click-change");
		$("#admin_repair").siblings("li").children("a").css("color","#666");
		$("#hand_repair,#untreated_repair").css("color","#666");
	});
	$(".menu-one, .menu-two").mouseover(function(){
		$(this).css({"color":"#439DE2","text-decoration":"underline"});
	});
	$(".menu-one, .menu-two").mouseleave(function(){
		if($(this).hasClass("click-change")){
			$(this).css("color","#439DE2");
		}else{
			$(this).css({"color":"#666","text-decoration":"none"});
			}
	});
}
//鼠标在input上的样式
function mouseInput(){
	//input
	$(".input-self").mouseenter(function(){
		$(this).parent().parent().css("border-color","#439DE2");
	});
	$(".input-self").mouseleave(function(){
		$(this).parent().parent().css("border-color","#d9d9d9");
	});
	//tablist
	$(".tablist li").mouseover(function(){
		$(this).children("a").css("text-decoration","underline");
	});
	$(".tablist li").mouseleave(function(){
		$(this).children("a").css("text-decoration","none");
	});
	$(".tablist input").click(function(event){
		$(this).parent().css("background-color","#f7f7f7");
		$(this).parent().siblings().css("background-color","#fff");
		$(this).parent().parent("ul").slideUp();
		//距离显示
		var s=$(this).siblings("a").text();
		$("#distance_show").val(s)
	});
	$(".tabImg").click(function(){
		$(".tablist").slideToggle();
	});
}

