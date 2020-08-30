//click to check-off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//delete a task
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//create a new task
$("input").keypress(function(event){
	if(event.which === 13){
		var task = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + task + "</li>");
	}
});

//toogle form
$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle()
})