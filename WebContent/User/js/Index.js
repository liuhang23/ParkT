//点击菜单栏之后主体改变
function menuMainR(){
	$("#FWcx").click(function(){
			$("#range_search").css("display","block");
			$("#street_search").css("display","none");
			$("#street_search").siblings().css("display","block");
			$("#range_search").siblings().css("display","none");
		});
	$("#JDcx").click(function(){
			$("#range_search").css("display","block");
			$("#street_search").css("display","block");
			$("#street_search").siblings().css("display","none");
			$("#range_search").siblings().css("display","none");
		});
	$("#XFjl").click(function(){
			$("#expense_calendar").css("display","block");
			$("#expense_calendar").siblings().css("display","none");
		});
	$("#CWyd").click(function(){
			$("#parking_reservation").css("display","block");
			$("#parking_reservation").siblings().css("display","none");
		});
	$("#YHzx").click(function(){
			$("#user_center").css("display","block");
			$("#user_center").siblings().css("display","none");
			//基本资料、修改资料、安全设置切换
    		userChange();
			//用户中心基本资料的基本信息与绑定信息的切换
			UserBasicInfo();
			//新增加绑定信息
			newBuild();
			//删除绑定信息
			Del();
		});
	$("#WDgd").click(function(){
			$("#repair_system").css("display","block");
			$("#My_repairs").css("display","block");
			$("#build_system").css("display","none");
			$("#repair_system").siblings().css("display","none");
		});
	$("#TJgd").click(function(){
			$("#repair_system").css("display","block");
			$("#build_system").css("display","block");
			$("#My_repairs").css("display","none");
			$("#repair_system").siblings().css("display","none");
		});
	$("#FWzc").click(function(){
			$("#service_support").css("display","block");
			$("#service_support").siblings().css("display","none");
		});
	}
	
//隔行变色
function trColor(){
	$("#userExpence_record li:odd, #AllSingle_list li:odd").addClass("tbody-odd");
	$("#userExpence_record li:even, #AllSingle_list li:even").addClass("tbody-even");
	}
//语音卡号查询和车牌号查询切换
function changeYuChe(){
	$("#YuY").click(function(){
		$(this).addClass("changeYuChe changeYuChe1");
		$(this).siblings().removeClass("changeYuChe");
		$("#query_texts").text("语音卡号：");
		$("#expense_SoundCard").css("display","block");
		$("#expense_LicensePlate").css("display","none");
	});
	$("#CheP").click(function(){
		$(this).addClass("changeYuChe");
		$(this).siblings().removeClass("changeYuChe");
		$("#query_texts").text("车牌号：");
		$("#expense_SoundCard").css("display","none");
		$("#expense_LicensePlate").css("display","block");
	});
}


//基本资料、修改资料、安全设置切换
function userChange(){
	$("#usermenu1").click(function(){
		$(this).addClass("changeYuChe");
		$(this).siblings().removeClass("changeYuChe");
		$("#basicInfo_radio").attr("checked","checked");
		$("#basic_data, #basic-info").css("display","block");
		$("#bind-info").css("display","none");
		$("#basic_data").siblings().not("#inquire-lab").css("display","none");
		$(".user-hiddShow").css("display","block");
		});
	$("#usermenu2").click(function(){
		$(this).addClass("changeYuChe");
		$(this).siblings().removeClass("changeYuChe");
		$("#basicInfo_radio").attr("checked","checked");
		$("#modify_data, #modify_bacInfos").css("display","block");
		$("#modify-bindInfos").css("display","none");
		$("#modify_data").siblings().not("#inquire-lab").css("display","none");
		$(".user-hiddShow").css("display","block");
		});
	$("#usermenu3").click(function(){
		$(this).addClass("changeYuChe");
		$(this).siblings().removeClass("changeYuChe");
		$("#security_etting").css("display","block");
		$("#security_etting").siblings().not("#inquire-lab").css("display","none");
		$(".user-hiddShow").css("display","none");
		});
	}
	
//用户中心基本资料的基本信息与绑定信息的切换
function UserBasicInfo(){
	$("#basicInfo_radio").click(function(){
		if($("#usermenu1").hasClass("changeYuChe")){
			$("#basic-info").css("display","block");
			$("#bind-info").css("display","none");
		}else if($("#usermenu2").hasClass("changeYuChe")){
			$("#modify_bacInfos").css("display","block");
			$("#modify-bindInfos").css("display","none");
		}
	});
	$("#bindInfo_radio").click(function(){
		if($("#usermenu1").hasClass("changeYuChe")){
			$("#bind-info").css("display","block");
			$("#basic-info").css("display","none");
		}else if($("#usermenu2").hasClass("changeYuChe")){
			$("#modify_bacInfos").css("display","none");
			$("#modify-bindInfos").css("display","block");
		}
	});	
		//删除的logo变色
	$(".bind-imgs").mouseenter(function(){
		$(this).children("img").attr("src","images/delete1.png");
	});
	$(".bind-imgs").mouseleave(function(){
		$(this).children("img").attr("src","images/delete.png");
	});
}

//新建
function newBuild(){
	$("#newBuild-binds").click(function(){
		var liList=document.createElement("div");
		liList.className="bind-odd modify-carDivList";
		liList.innerHTML="<div class='bind-firstDiv fl_lt'><input type='text' value='输入车牌号' /></div>"
                          +"<div class='fl_lt'><input type='text' value='输入语音卡号' /></div>"
                          +"<div class='bind-imgs'><img src='images/delete.png' /></div>";
		document.getElementById("modify-bindCar").appendChild(liList);
		$("#modify-bindCar").children(":last-child").children(":last-child").click(function(){
			var a=confirm("确定删除该车牌号、语音卡？");
			if(a==true){
				$(this).parent().remove();
			}
		});
		$("#modify-bindCar").children(":last-child").children(":last-child").mouseenter(function(){
			$(this).children("img").attr("src","images/delete1.png");
		});
		$("#modify-bindCar").children(":last-child").children(":last-child").mouseleave(function(){
			$(this).children("img").attr("src","images/delete.png");
		});
	});	
}
	

function Del(){
	$(".bind-imgs").click(function(){
		var a=confirm("确定删除该车牌号、语音卡？");
		if(a==true){
			$(this).parent().remove();
		}
	});
}

//显示工单的四步
function fourRepair(){
	$("#AllSingle_list").children("li").children(".span1").click(function(){
		var state=$(this).siblings(".span4").text();
		if(state=="待客服响应"){
			repReady();
			repReady1();
			repReady3();
			repReady4();
			repReady5();
			}
		if(state=="正在处理"){
			repReady();
			repReady4();
			repReady5();
			$("#MyPro_feedback").css("display","block");
			$("#MyCli_evaluation").css("display","none");
			}
		if(state=="处理完成"){
			repReady();
			repReady1();
			repReady5();
			}
		if(state=="待评价"){
			repReady();
			$("#MyCli_evaluation").css("display","block");
			$("#MyPro_feedback").css("display","none");
			}
	});
}
function repReady(){
	$("#all_Myrepair").css("display","none");
	$("#repair_fourShow").css("display","block");
	$("#response_problems").css("display","block");
	$("#MyCom_records").css("display","block");
	}
function repReady1(){
	$("#MyPro_feedback").css("display","none");
	$("#MyCli_evaluation").css("display","none");
	}
function repReady3(){
	$("#repair-step2").children("div:nth-child(1)").addClass("step-tailBak2");
	$("#repair-step2").children("div:nth-child(2)").addClass("repair-minStepBak2");
	$("#repair-step2").children("div:nth-child(3)").addClass("step-headBak2");
	}
function repReady4(){
	$("#repair-step3").children("div:nth-child(1)").addClass("step-tailBak2");
	$("#repair-step3").children("div:nth-child(2)").addClass("repair-minStepBak2");
	$("#repair-step3").children("div:nth-child(3)").addClass("step-headBak2");
	}
function repReady5(){
	$("#repair-step4").children("div:nth-child(1)").addClass("step-tailBak2");
	$("#repair-step4").children("div:nth-child(2)").addClass("repair-minStepBak2");
	}


/*新建工单*/
function buildTitle(){
	var title=document.getElementById("Build_recTil").value;
	var tilLength=title.length;
	if(tilLength!=0){
		$("#newBuild_content").css("display","block");
		$("#build_til1").children(".outerDiv").addClass("outerDiv1");
		$("#build_til1").children(".outerDiv").children(".innerDiv").addClass("innerDiv1");
		$("#build_til1").children(".buildSteps-text").addClass("buildSteps-text1");
		}else{
			alert("请输入标题。");
			}
}
function buildContent(){
	var sure=confirm("提交后不可修改，确定提交工单？");
	if(sure==true){
		$("#build_til2").children(".outerDiv").addClass("outerDiv1");
		$("#build_til2").children(".outerDiv").children(".innerDiv").addClass("innerDiv1");
		$("#build_til2").children(".buildSteps-text").addClass("buildSteps-text1");
		alert("提交成功！");
	}
}
