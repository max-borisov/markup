$(document).ready(function() {
	$('.btn-list a, #page-nav a').click(function() {
		if ($(this).hasClass('active')) {return false;}
		else {
			$(this).parents('ul').find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		}
	});
	jcf.lib.domReady(function(){
		jcf.customForms.replaceAll();
	});
	$(function() {
	    $( "#godset-date, #senset-date, #hvornar-date, #fra-date, #til-date" ).datepicker({
	      showOn: "button",
	      buttonImage: "images/calendar.gif",
	      buttonImageOnly: true,
	    });
	  });
	
	$('.more-link').click(function() {
		if ($(this).hasClass('active-link')) {
			return false;
		}
		else {
			$(this).addClass('active-link').css({'opacity' : '1'});
			$('.hide-box').fadeIn(300);
			return false;
		}
	});
	$('.map-holder .delete-link').click(function() {
		$(this).closest('.row').hide();
		return false;
	});
	function hideMask(className1, className2) {
		if ($(className1).is(":checked")) {
			$(className1).closest('.row').find('.mask').hide();
			$(className1).closest('.row').find('.text-box').css({'opacity' : '1'});
		}
		else if ($(className2).is(":checked")) {
			$(className2).closest('.row').find('.mask').show();
			$(className2).closest('.row').find('.text-box').css({'opacity' : '0.5'});
		}
	};
	$(".radio[name='radio-godset']").click(function() {
		hideMask("#godset-no","#godset-yes");
	});
	$(".radio[name='radio-senset']").click(function() {
		hideMask("#senset-yes","#senset-no");
	});
	$(window).on('load', hideMask("#godset-no","#godset-yes"), hideMask("#senset-yes","#senset-no"));
	
	
	$('input.checkbox, input.radio').each(function(){
		$(this).wrap('<div class="chk-area"></div>')
	})
	$('input.checkbox').change(function(){
		if($(this).is(':checked')){
			$(this).closest('.chk-area').addClass('chk-checked')
		} else{
			$(this).closest('.chk-area').removeClass('chk-checked')
		}
	});
    $('input.radio').change(function(){
        $('input.radio').each(function(){
            if($(this).is(':checked')){
                $(this).closest('.chk-area').addClass('chk-checked');
            } else{
                $(this).closest('.chk-area').removeClass('chk-checked');
            }
        })
    });
    $('input.checkbox, input.radio').each(function(){
        if($(this).is(':checked')){
            $(this).closest('.chk-area').addClass('chk-checked')
        } else{
            $(this).closest('.chk-area').removeClass('chk-checked')
        }
    });
	
});