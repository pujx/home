	/*------------- preloader js --------------*/
	$(window).on('load', function() {
		$('#preloader1').delay(150).fadeOut('slow');
//		$('body').delay(350).css({
//			'overflow': 'visible'
//		});
	})
	

function IEVersion() {
            var userAgent = navigator.userAgent;   
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; 
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
            	
               $('body').addClass('ie-browser');
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion <= 10) {
                    alert("10");
               	$('body').addClass('ie-browser');
                    return 7;
                }  
            } else if(isEdge) {
                return 'edge';
               $('body').addClass('ie-browser');
            } else if(isIE11) {
               $('body').addClass('ie-browser');
                return 11;
            }else{
               $('body').removeClass('ie-browser');
            }
        }
IEVersion();
