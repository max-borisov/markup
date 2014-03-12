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
	$('.eksempelside-link').click(function() {
		$(this).addClass('active-eksempelside-link').parent('.presentationsside-content').find('.eksempelside-holder').show();
		$('.eksempelside-holder').show();
		return false;
	});
	$(function() {
	    $( ".datepicker-text" ).datepicker({
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
	$('.map-holder .delete-link, .close-row-link').click(function() {
		$(this).closest('.row').hide();
		return false;
	});
	$('.close-row-link').click(function() {
		$(this).closest('.form-row').hide();
		return false;
	});
	$('.toggle-link').toggle(
		function () {
			$(this).parents('.toggle-holder-box').find('.toggle-hidden-box').show();
	},
		function () {
			$(this).parents('.toggle-holder-box').find('.toggle-hidden-box').hide();
		}
	);
	/*
$('.top-nav li.log-frame a').toggle(
		function () {
			$(this).parents().addClass('add-log-frame');
			$(this).parents('.nav-holder').find('.register-user-form').slideDown(400);
	},
		function () {
			$(this).parents().removeClass('add-log-frame');
			$(this).parents('.nav-holder').find('.register-user-form').slideUp(400);
		}
	);
*/
	$('.edit-link').click(function() {
		$(this).closest('.form-row').find('.column-value, .column-omrade, .link-list').hide();
		$(this).closest('.form-row').addClass('edit-row').find('.brugere-form').show();
		return false;
	});
	$('.cancel-link').click(function() {
		$(this).closest('.form-row').find('.column-value, .column-omrade, .link-list').show();
		$(this).closest('.form-row').removeClass('edit-row').find('.brugere-form').hide();
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
	$(".radio[name='frys-label']").click(function() {
		hideMask01("#frys-yes","#frys-no");
	});
	$(".radio[name='loft']").click(function() {
		hideMask01("#loft-yes","#loft-no");
	});
	$(window).on('load', hideMask("#godset-no","#godset-yes"), hideMask("#senset-yes","#senset-no"), hideMask01("#loft-yes","#loft-no"), hideMask01("#frys-yes","#frys-no") );
	
	
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
	
	!function fixedSidebar(window, $) {
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