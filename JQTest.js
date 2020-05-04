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
});

$(function() {
	$.get("https://spreadsheets.google.com/feeds/list/1wlPcHLWdDB6fzMWJv2do26qkJH26QyUj7rF2yx-_5UI/1/public/values?alt=json", function(data) {
		console.log(data);
	})
})