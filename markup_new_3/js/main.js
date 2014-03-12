$(document).ready(function() {
	$('.btn-list a, #page-nav a').click(function() {
		if ($(this).hasClass('active')) {return false;}
		else {
			$(this).parents('ul').find('a').removeClass('active');
			$(this).toggleClass('active');
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
	function hideMask01(className1, className2) {
		if ($(className1).is(":checked")) {
			$(className1).closest('.radio-box').find('.mask').hide();
			$(className1).closest('.radio-box').find('.text-box').css({'opacity' : '1'});
		}
		else if ($(className2).is(":checked")) {
			$(className2).closest('.radio-box').find('.mask').show();
			$(className2).closest('.radio-box').find('.text-box').css({'opacity' : '0.5'});
		}
	};
	$(".radio[name='radio-godset']").click(function() {
		hideMask("#godset-no","#godset-yes");
	});
	$(".radio[name='radio-senset']").click(function() {
		hideMask("#senset-yes","#senset-no");
	});
	$(".radio[name='loft']").click(function() {
		hideMask01("#loft-yes","#loft-no");
	});
	$(window).on('load', hideMask("#godset-no","#godset-yes"), hideMask("#senset-yes","#senset-no"), hideMask01("#loft-yes","#loft-no") );
	
	
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
	
	!function(window, $) {
        var $nav = $('#main'),
            $win = $(window),
            navTop = $nav.offset().top,
            onTop = false,
            checkScheduled = false;

        function checkNav() {
          var top = $win.scrollTop();
          if(navTop < top && !onTop) {
            onTop = true;
            $nav.addClass('menu-fixed');
            } else if(navTop >= top && onTop) {
            $nav.removeClass('menu-fixed');
            onTop = false;
          }
        }
        $win.on('scroll', function() {
          if(!checkScheduled) {
            checkScheduled = true;
            setTimeout(function() {
              checkNav();
              checkScheduled = false;
            }, 100);
          }
        });
      }(window, jQuery);
	
});