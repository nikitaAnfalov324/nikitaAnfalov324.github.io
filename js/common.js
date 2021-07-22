$(document).ready(function() {
	
	$("form button").click(function(){
		var prdName = $(".form_sl option:selected").val();
		var prdNum = $(".quantity-num").val();
		$("input[name='comment']").val(prdName+' + amount '+prdNum);
	});
	
});


