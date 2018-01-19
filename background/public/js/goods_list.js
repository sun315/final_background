//下一页
$(".next").click(function(){
	var pageNO = $(".pagenum").html();
	pageNO ++;
	console.log(pageNO);
	$.ajax({
		url:"/goods_list",
		type:"get",
		data:{
			pageNO:pageNO
		},
		success:function(res){
			location.href = "/goods_list?pageNO=" + pageNO;
		}
	})
});

//上一页
$(".before").click(function(){
	var pageNO = $(".pagenum").html();
	pageNO --;
	$.ajax({
		url:"/goods_list",
		type:"get",
		data:{
			pageNO:pageNO
		},
		success:function(res){
			location.href = "/goods_list?pageNO=" + pageNO;
		}
	})
});

