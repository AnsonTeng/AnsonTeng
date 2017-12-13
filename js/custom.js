// 文件載入完成 進行初始化
$(document).ready(function(){
	// --- header color change ---
	// 網頁滾動偵聽函式
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}else{
			$header.removeClass("header--colored");
		}
	})

	// wow plugin initialize
	new WOW().init();

	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		// 讓圖片群組可以巡迴撥放
		loop: true
	})
});