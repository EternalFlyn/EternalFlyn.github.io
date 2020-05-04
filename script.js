$.ajax({
	type: "GET",
	url: "https://eternalflyn.github.io/data.json",
	dataType: "json",
	success: function(data) {
		console.log(data);
	},
	fail: function() {
		console.log("GG")
	}
});

$(document).ready(function(){
	$(".menuButton ul").hide();
	$("#menuIcon").click(function() {
		$("#menuContent").slideDown();
	})
	$("#menu").mouseleave(function() {
		$("#menuContent").fadeOut();
	})
	$(".menuTitle").click(function() {
		$(this).parent().children("ul").toggle();
	})
	$(".menuButton li").click(function() {
		jump($(this).parent().parent().children(".menuTitle").text(), $(this).text());
	})
});

// $(function() {
// 	$.get("https://spreadsheets.google.com/feeds/list/1wlPcHLWdDB6fzMWJv2do26qkJH26QyUj7rF2yx-_5UI/1/public/values?alt=json", function(data) {
// 		console.log(data);
// 	})
// })

function jump(title, id) {
	if(title == $("#title").text()) {
		let pos = $("#" + id).offset().top - $("#header").height();
		$("html,body").animate({scrollTop:pos}, 800);
	}
	console.log(title);
}