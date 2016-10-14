//fullpage start
$(function(){
	// 阻止浏览器默认动作
	$("#fullpage").mousedown(function(e){
		 e.preventDefault();
		$("#fullpage").mousemove(function(e){
			 e.preventDefault();
		})
	})

	// 获取浏览器的高度
	var ch=$(window).height();
	var len=$(".section").length;
	var n=0;
	var flag=true;

	// 给fullpage添加滑动事件
	touch.on("#fullpage","swipe",function(e){
		if(e.direction=="up"){
			if(n==len-1){
				return;
			}
			if(!flag){
				return;
			}
			flag=false;
			n++;
			$("#fullpage").css("marginTop",-n*ch);
			$(".section").each(function(index,obj){
				if(index==n){
					$(obj).find(".boxLeft").css({"transform":"translate(0,0)","opacity":1});
					$(obj).find(".tu").css({"transform":"translate(0,0)","opacity":1});
				}else{
					$(obj).find(".boxLeft").css({"transform":"translate(-50px,0)","opacity":1});
					$(obj).find(".tu").css({"transform":"translate(50px,0)","opacity":1});
				}
			});
			$(".yuanquan").css("background","").eq(n).css("background","#333");
		}else if(e.direction=="down"){
			if(n==0){
				return;
			}
			if(!flag){
				return;
			}
			flag=false;
			n--;
			$("#fullpage").css("marginTop",-n*ch);
			$(".section").each(function(index,obj){
				if(index==n){
					$(obj).find(".boxLeft").css({"transform":"translate(0,0)","opacity":1});
					$(obj).find(".tu").css({"transform":"translate(0,0)","opacity":1});
				}else{
					$(obj).find(".boxLeft").css({"transform":"translate(-50px,0)","opacity":1});
					$(obj).find(".tu").css({"transform":"translate(50px,0)","opacity":1});
				}
			});

		}
		$(".yuanquan").css("background","").eq(n).css("background","#333");
	})

	// 添加监测到过渡结束时发生的事件
	$("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
		flag=true;

	})
	$(window).resize(function(){
		var ch1=$(window).height();
		$("#fullpage").css("marginTop",-n*ch1);
	})
	//点击右边圆点
	$(".yuanquan").click(function(){
		var index1=$(".yuanquan").index(this);
		$("#fullpage").css("marginTop",-index1*ch);
		$(".section").each(function(index,obj){
			if(index==index1){
				$(obj).find(".boxLeft").css({"transform":"translate(0,0)","opacity":1});
				$(obj).find(".tu").css({"transform":"translate(0,0)","opacity":1});
			}else{
				$(obj).find(".boxLeft").css({"transform":"translate(-50px,0)","opacity":0.4});
				$(obj).find(".tu").css({"transform":"translate(50px,0)","opacity":1});
			}
		});
		$(".yuanquan").css("background","");
		$(this).css("background","#333");
		n=index1;
	})
	//滑过右边圆点
	$(".yuanquan").hover(function(){
		var index3=$(".yuanquan").index(this);
		$(".navWord").css("opacity",0).eq(index3).css("opacity",1);
	},function(){
		$(".navWord").css("opacity",0);
	})
	//点击下面的箭头
	$(".jt").click(function(){
		var index2=$(".jt").index(this);
		$("#fullpage").css("marginTop",-(index2+1)*ch);
		$(".section").each(function(index,obj){
			if(index==index2+1){
				$(obj).find(".boxLeft").css({"transform":"translate(0,0)","opacity":1});
				$(obj).find(".tu").css({"transform":"translate(0,0)","opacity":1});
			}else{
				$(obj).find(".boxLeft").css({"transform":"translate(-50px,0)","opacity":0.1});
				$(obj).find(".tu").css({"transform":"translate(50px,0)","opacity":0.1});
			}
		});
		$(".yuanquan").css("background","").eq(index2+1).css("background","#333");
		n=index2+1
	})
	$(window).resize(function(){
		var ch1=$(window).height();
		$("#fullpage").css("marginTop",-n*ch1);
	})
})

//头部隐藏导航
$(function(){
	var flag=true;
	$(".small-right").click(function(){
		if(flag){
			$(".small-one").css("transform","translate(0,7px) rotate(45deg)")
			$(".small-two").css("transform","translate(0,-7px) rotate(-45deg)")
			$(".menu").css({
				height:500,
				visibility:"visible"
			});
			$(".menu a").each(function(index,obj){
				$(obj).css("transition","all 0.4s ease "+index*0.2+"s");
			}).css({
				opacity:1,
				transform:"rotateY(0deg) scale(1,1)"
			})
			flag=false;
		}else{
			$(".small-one").css("transform","translate(0,0) rotate(0deg)")
			$(".small-two").css("transform","translate(0,0) rotate(0deg)")
			$(".menu").css({
				height:0,
				visibility:"hidden"
			});
			$(".menu a").each(function(index,obj){
				$(obj).css("transition","none");
			}).css({
				opacity:0,
				transform:"rotateY(60deg) scale(1,0.3)"
			});
			flag=true;
		}
	})
})

