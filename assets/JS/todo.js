$('ul').on('click', 'li', function(){
	$(this).toggleClass('complete-todo');
});
$('ul').on('click', '.trashholder', function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoinput = $(this).val();
		$(this).val("");
		$('ul').append("<li><span class='trashholder'><i class='far fa-trash-alt'></i></span> "+todoinput+"</li>");
	}
});
$('.plusholder').click(function(){
	$("input[type='text']").fadeToggle();
});
