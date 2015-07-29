// JavaScript Document
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
	$("#CCgl, #suface_img1").click(function(){
			$("#Paging_surface").css("display","none");
			$(".header, .main").css("display","block");
			
			$("#yard_management").css("display","block");
			$("#yard_management").siblings().css("display","none");
		});
	$("#PTyh").click(function(){
			$("#average_user").css("display","block");
			$("#average_user").siblings().css("display","none");
		});
	$("#YHzx").click(function(){
			$("#user_center").css("display","block");
			$("#user_center").siblings().css("display","none");
		});
	$("#WCLgd,#suface_img2").click(function(){
			$("#Paging_surface").css("display","none");
			$(".header, .main").css("display","block");
			
			$("#repair_system").css("display","block");
			$("#repair_system").siblings().css("display","none");
			$("#admin_untreatedRep").css("display","block");
			$("#admin_untreatedRep").siblings().css("display","none");
		});
	$("#CLZgd").click(function(){
			$("#repair_system").css("display","block");
			$("#repair_system").siblings().css("display","none");
			$("#admin_handRep").css("display","block");
			$("#admin_handRep").siblings().css("display","none");
		});
	$("#LSgd").click(function(){
			$("#repair_system").css("display","block");
			$("#repair_system").siblings().css("display","none");
			$("#admin_historyRrp").css("display","block");
			$("#admin_historyRrp").siblings().css("display","none");
		});
	}
//普通用户隔行变色
function panalStyle(){
	$("#averageUser_info .panel:odd").children("div:first-child").addClass("panelHead_Odd");
	$("#averageUser_info .panel:odd").children("div:last-child").addClass("panelBody_Odd");
	$("#averageUser_info .panel:even").children("div:first-child").addClass("panelHead_Even");
	$("#averageUser_info .panel:even").children("div:last-child").addClass("panelBody_Even");
}
	
//用户中心--全部停车场
//车场管理隔行变色
function parkManage(){
	$("#All_Packing li:odd, #Rep_submitStata li:odd, #Rep_handBox li:odd, #Rep_hiatoryBox li:odd").addClass("li-odd");
	$("#All_Packing li:even, #Rep_submitStata li:even, #Rep_handBox li:even, #Rep_hiatoryBox li:even").addClass("li-even");
	}
//停车场详情
function parkDetails(){
	$(".table-th5").click(function(){
		surface();
		$("#parkInfo_surface").css("display","block");
		$("#parkInfo_surface").siblings(":not(.header-surface)").css("display","none");
	});
}
//全选
/*操作全选复选框事件*/  
function doCheck(obj)  
{  
	var inputs=document.getElementsByTagName("input");  
	for(var i=0;i<inputs.length;i++)  
	{  
		if(inputs[i].type=="checkbox" && inputs[i].id!="select_AllParking") //刷选出所有复选框  
		{  
			inputs[i].checked=obj.checked;   
		}  
	}  
}  
/*复选框变化  全选按钮变化*/  
function toChkSon(obj){  
	if(obj==false) //当此复选框未选中 全选为未选  
	{  
		document.getElementById("select_AllParking").checked=false;  
		return ;  
	}  
  
	var chkInputs=getCheckBox(); //获取所有复选框  
	var j=0;  
	for(var i=0;i<chkInputs.length;i++)  
	{  
		if(chkInputs[i].checked==obj)  
			j++;  
		else  
			break;  
	}     
	  
	if(j==chkInputs.length) //当所有复选框为同一状态时 赋值全选同一状态  
		document.getElementById("select_AllParking").checked=obj;  
}  
  
/*获取所有复选框*/  
function getCheckBox(){  
	var inputs=document.getElementsByTagName("input");  
	var chkInputs=new Array();  
	var j=0;  
	for(var i=0;i<inputs.length;i++)  
	{  
		if(inputs[i].type=="checkbox" && inputs[i].id!="select_AllParking") //刷选出所有复选框  
		{  
			chkInputs[j]=inputs[i];  
			j++;  
		}  
	}  
	return chkInputs;  
}     
//删除
function parkDel(){
	var inputs=document.getElementsByName("parking");
	for(var i=0;i<inputs.length;i++) {
		if(inputs[i].type=="checkbox" && inputs[0].checked){
			$("#All_Packing").children("li").remove();
		}else if(inputs[i].type=="checkbox" && i!=0 && inputs[i].checked){
				var j=i-1;
				$("#All_Packing").children("li:eq("+j+")").remove();
			}
	}
}
//修改停车场
function modifyPark(){
		$("#modificationPark").css("display","block");
		$("#All_parksInfo,#create_parking").css("display","none");
}
//旧的停车场数据
function OldparkData(){
	$("#mod_province").val("1");
	$("#mod_city").val("2");
	$("#mod_area").val("3");
	$("#mod_address").val("4");
	$("#mod_userName").val("5");
	$("#mod_parkName").val("6");
	$("#mod_unitPrice").val("7");
	$("#mod_parkPrice").val("7");
	$("#mod_parkID").val("9");
	$("#mod_longitude").val("10");
	$("#mod_latitude").val("11");   
}

//全部停车场与创建停车场切换
function AllCreateParks(){
	$("#create_parkmenu").click(function(){
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
		$("#create_parking").css("display","block");
		$("#All_parksInfo,#modificationPark").css("display","none");
		});
	$("#All_packmenu").click(function(){
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
		$("#create_parking,#modificationPark").css("display","none");
		$("#All_parksInfo").css("display","block");
		});
}
//创建停车场
function createParks(){
	$("#creatPark_firstStep").click(function(){
		$(this).css("display","none");
		$("#secend_createPark").css({"display":"block","margin-top":"30px"});
	});
	$("#creatPark_secendStep").click(function(){
		$(this).css("display","none");
		$("#third_createPark").css({"display":"block","margin-top":"30px"});
	});
}
//普通用户信息面板切换
function panelSlide(){
	$(".Head_slide").click(function(){
		$(this).parent(".panel-head").siblings(".panel-body").slideToggle();
		var state=$(this).parent(".panel-head").siblings(".panel-body");
		if(state.is(":hidden")){
			}else{
				$(this).parent().parent().siblings().children(".panel-body").slideUp();
				}
	});
}
//基本资料与修改资料切换
function InfoChange(){
	$("#admin_JBInfo").click(function(){
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
		$("#admin_basicInfo").css("display","block");
		$("#admin_InfoSet").css("display","none");
		});
	$("#admin_XGInfo").click(function(){
		$(this).addClass("options-active");
		$(this).siblings().removeClass("options-active");
		$("#admin_basicInfo").css("display","none");
		$("#admin_InfoSet").css("display","block");
		});
}

//查看受理未处理工单详情
function submitRep(){
	 surface();
	$("#UntreatedRep_InfoSur").css("display","block");
	$("#UntreatedRep_InfoSur").siblings(":not(.header-surface)").css("display","none");
}
function surface(){
	$("body").css("background","rgb(250,250, 250)");
	$("#Paging_surface").siblings().css("display","none");
	$("#Paging_surface").css("display","block");
	}
//查看处理中的工单详情
function handRep(){
		$("#alone_handRep").css("display","block");
		$("#alone_handRep").siblings().css("display","none");
}
//查看历史工单详情
function historyRep(){
		$("#alone_historyRep").css("display","block");
		$("#alone_historyRep").siblings().css("display","none");
}


