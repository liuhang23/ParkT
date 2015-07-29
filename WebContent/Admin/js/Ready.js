$(document).ready(function() {
	//点击菜单栏之后主体改变
	menuMainR();
	
	//鼠标移上去及点击时菜单效果
    clickChange();
	
	//鼠标在input上的样式
    mouseInput();
	
	//车场管理隔行变色
	window.onload=parkManage();
	//停车场详情
  	parkDetails();
	
	//修改停车场
	$("#XGpark_but").click(function(){
		modifyPark();//修改停车场界面显示
		OldparkData();//旧的停车场数据
	});
	
	//全部停车场与创建停车场切换
	AllCreateParks();
	
	//创建停车场
	createParks();
	
	//普通用户信息面板切换
	 panelSlide();
	//普通用户隔行变色
	window.onload=panalStyle();
	 
	 
	//基本资料与修改资料切换
    InfoChange();
	
	//查看受理未处理工单详情
	$("#Rep_submitStata .submit_State1").click(function(){
		submitRep();
	});
	
	//查看处理中的工单详情
	$("#Rep_handBox .submit_State1").click(function(){
		handRep();
	});
	 
	//查看历史工单详情
	$("#Rep_hiatoryBox .submit_State1").click(function(){
	 	historyRep();
	});
});