$(document).ready(function() {
	//点击菜单栏之后主体改变
	menuMainR();
	
	//鼠标移上去及点击时菜单效果
    clickChange();
	
	//鼠标在input上的样式
    mouseInput();
	
	//隔行变色
	trColor();
	
	//语音卡号查询和车牌号查询切换
    changeYuChe();
		
	//显示工单的四步
	fourRepair();
	
	//新建工单标题下一步
	$("#title_next").click(function(){
		buildTitle();
	});
	//新建工单内容下一步
	$("#con_next").click(function(){
		buildContent();
	});

});