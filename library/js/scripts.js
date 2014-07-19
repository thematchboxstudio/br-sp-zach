/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop === 'float') { prop = 'styleFloat'; }
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		};
		return this;
	};

}

// as the page loads, call these scripts =======================================================================================*/
jQuery(document).ready(function($) {

	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/

	/* getting viewport width */
	var responsive_viewport = $(window).width();

	/* if is below 481px */
	if (responsive_viewport < 481) {

	} /* end smallest screen */

	/* if is larger than 481px */
	if (responsive_viewport > 481) {

	} /* end larger than 481px */

	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {

			/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
		$(this).attr('src',$(this).attr('data-gravatar'));
		});

	}

	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {

	}


	// add all your scripts here

$( "a" ).click(function( event ) {
  event.preventDefault();

});




	// CUSTOM MATCHBOX MENU CODE
	// add class to nav based on page
	$('.nav-btn-wrap a').each(function() {
		if ($(this).prop('href') === window.location.href) {
			$(this).addClass('sidebar-active');
		}
	});

	// function for site menu display toggle
	var showMenu = function() {
		$('body').removeClass("active-sidebar").toggleClass("active-nav");
		$('.sidebar-button').removeClass("active-button");
		$('.menu-button').toggleClass("active-button");
		$('#container').toggleClass('close');
		$('#content, .footer').click(function(e){
			if ( $('body').hasClass("active-nav") ) {
				showMenu();
				return false;
				}
		});};

	$('.menu-button').click(function(e) {
		showMenu();
		e.preventDefault();
	});
	// END OF MENU CODE

	 $('.slider').slick({
	 	autoplay: false,
	 	dots: true,
	 	arrows: true,
	 	infinite: false
	});
$('.slider .slick-next, .slider .slick-prev').addClass('icon-large-r-w-arrow');






// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();
// 	var fixedAmount = 900;
// 	if(scroll <= fixedAmount){
// 		$('.feature-header').css('top', scroll);
// 		$('.feature-header').css('margin-bottom', scroll);
// 	}else{
// 		$('.feature-header').css('top', fixedAmount);
// 		$('.feature-header').css('margin-bottom', fixedAmount);
// 	}
// });

}); /* end of as page load scripts =======================================================================================*/




/******************************************************************************
ON-MEDIA-QUERY - Basically JS MQs
******************************************************************************/


/* onMediaQuery | http://springload.co.nz/love-the-web/ | Released under the MIT license. | Fri 21 June, 2013 */
(function(b,a){"function"===typeof define&&define.amd?define(function(){return b.MQ=a(b,b.MQ||{})}):b.MQ=a(b,b.MQ||{})})(this,function(b){b.init=function(a){this.callbacks=[];this.new_context=this.context="";if("undefined"!==typeof a)for(i=0;i<a.length;i++)this.addQuery(a[i]);this.addEvent(window,"resize",b.listenForChange,b);this.listenForChange()};b.listenForChange=function(){var a;document.documentElement.currentStyle&&(a=document.documentElement.currentStyle.fontFamily);window.getComputedStyle&&
(a=window.getComputedStyle(document.documentElement,null).getPropertyValue("font-family"));null!==a&&(a=a.replace(/['",]/g,""),a!==this.context&&(this.new_context=a,this.triggerCallbacks(this.context,"unmatch"),this.triggerCallbacks(this.new_context,"match")),this.context=this.new_context)};b.addQuery=function(a){if(null!==a&&void 0!==a)return this.callbacks.push(a),"string"==typeof a.context&&(a.context=[a.context]),"boolean"!==typeof a.call_for_each_context&&(a.call_for_each_context=!0),""!==this.context&&
this._inArray(this.context,a.context)&&a.match(),this.callbacks[this.callbacks.length-1]};b.removeQuery=function(a){if(null!==a&&void 0!==a)for(var e=-1;-1<(e=b._indexOf(a,this.callbacks));)this.callbacks.splice(e,1)};b.triggerCallbacks=function(a,b){var c,d;for(c=0;c<this.callbacks.length;c++)!1===this.callbacks[c].call_for_each_context&&("match"===b&&this._inArray(this.context,this.callbacks[c].context)||"unmatch"===b&&this._inArray(this.new_context,this.callbacks[c].context))||(d=this.callbacks[c][b],
this._inArray(a,this.callbacks[c].context)&&void 0!==d&&d())};b.addEvent=function(a,b,c,d){null!==a&&void 0!==a&&(a.addEventListener?a.addEventListener(b,function(){c.call(d)},!1):a.attachEvent?a.attachEvent("on"+b,function(){c.call(d)}):a["on"+b]=function(){c.call(d)})};b.getPreviousContext=function(){return this.context};b.getContext=function(){return this.new_context};b._inArray=function(a,b){for(var c=b.length,d=0;d<c;d++)if(b[d]==a)return!0;return!1};b._indexOf=function(a,b,c){var d;if(b){if(b.indexOf)return b.indexOf(a,
c);d=b.length;for(c=c?0>c?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1};return b});

var queries = [	{
	context: 'mobile',
	match: function() { // Your mobile specific logic can go here.
		console.log('entering mobile.');
	},
	unmatch: function() { // We're leaving mobile.
		console.log('leaving mobile.');
	}// unmatch
},
{
	context: 'skinny',
	match: function() {
		console.log('entering tablet');
	},
	unmatch: function() {
		console.log('leaving tablet');
	}// unmatch
},
{
	context: 'desktop',
	match: function() {
		console.log('entering desktop');
	}
}
];
// Go!
MQ.init(queries);




/* Label Slide (leSlide) | Version 1.3 | http://wesleytodd.com/ */
/* (function(a){a.leSlide=function(c,b){var d=this;d.$el=a(c);d.el=c;d.$el.data("leSlide",d);d.init=function(){d.options=a.extend({},a.leSlide.defaultOptions,b);if(typeof d.options.wrapper=="function"){d.$wrapper=d.options.wrapper.call(this,d.$el).addClass(d.options.wrapperClass)}else{d.$wrapper=d.$el.wrap('<div class="'+d.options.wrapperClass+'" />').closest("."+d.options.wrapperClass)}if(typeof d.options.label=="function"){d.$label=d.options.label.call(this,d.$el).attr("for",d.$el.attr("id"))}else{d.$label=a("<label>"+d.$el.attr("placeholder")+"</label>").attr("for",d.$el.attr("id"))}d.$el.removeAttr("placeholder");d.$wrapper.prepend(d.$label);if(d.options.animate){d.$label.css({"-moz-transition":"none","-webkit-transition":"none","-o-transition":"none","-ms-transition":"none",transition:"none"})}d.updateWidths();d.attachEventHandler(d.el);d.eventHandler(a.Event())};d.updateWidths=function(){console.log("here");var e=d.$label.clone().css({display:"inline",width:"auto"});d.$label.after(e);d.labelInlineWidth=e.width();e.remove();d.inputWidth=d.$el.width();d.baseTextIndent=d.inputWidth-d.labelInlineWidth-d.options.textIndentOffset};d.attachEventHandler=function(e){a(e).on("focus blur keyup",function(f){d.eventHandler(f)});a(window).on("resize",function(){clearTimeout(d.resizeTimer);d.resizeTimer=setTimeout(function(){d.updateWidths()},20)});a(e).on("unmaskreplace",function(g,f){d.el=f.get(0);d.$el=a(f);d.$el.data("leSlide",d);d.attachEventHandler(f)})};d.eventHandler=function(h){var g=0;if(h.type=="focus"){if(d.$el.val()==""){g=d.baseTextIndent}else{g=d.$label.css("text-indent");g=g-d.options.textIndentOffset}d.$el.closest("."+d.options.wrapperClass).addClass(d.options.focusClass)}else{if(h.type=="blur"){if(d.$el.val()!=""){g=d.$label.css("text-indent");g=g-d.options.textIndentOffset}d.$el.closest("."+d.options.wrapperClass).removeClass(d.options.focusClass)}else{if(d.$el.val()!=""){var i=a("<span />").html(d.$el.val());d.$el.after(i);var f=i.width();i.remove();if(f>d.inputWidth-d.labelInlineWidth-d.options.widthOffset-d.options.textIndentOffset){g=d.baseTextIndent+(f/d.options.textIndentMultiplier)}else{g=d.baseTextIndent}}}}if(!d.options.animate){d.$label.css("text-indent",g)}else{d.$label.stop().animate({"text-indent":g},d.options.animateDuration,d.options.animateEasing,d.options.animateComplete)}};d.init()};a.leSlide.defaultOptions={wrapper:false,wrapperClass:"leSlide-wrap",label:false,focusClass:"field-focus",animate:true,animateEasing:"swing",animateDuration:500,animateComplete:function(){},widthOffset:35,textIndentMultiplier:2.66,textIndentOffset:10};a.fn.leSlide=function(b){return this.each(function(){(new a.leSlide(this,b))})}})(jQuery); */

/*
jQuery('textarea').leSlide({
      'wrapperClass'         : 'leSlide-wrap',//This class will be assigned to the wrapper for the input and label
      'focusClass'           : 'field-focus', //This class is applied to the wrapper when focus is received
      'animate'              : true,          //Use jQuery animation
      'animateEasing'        : 'swing',       //jQuery animate() easing
      'animateDuration'      : 500,           //jQuery animate() duration
      'animateComplete'      : function(){},  //jQuery animate() callback function
      'widthOffset'          : 35,            //Add some extra pixels after the text length for better spacing
      'textIndendMultiplier' : 2.66           //This multiplier changes the speed the label animates off the screen
});
*/



/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".animated");
var iconsFirst = $(".icons-first");
var iconsSecond = $(".icons-second");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});
iconsFirst.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});
iconsSecond.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true) && !(el.hasClass("already-visible"))) {
      el.addClass("fade-in");
    }
  });

  iconsFirst.each(function(i, el) {
    var el = $(el);
    if (el.visible(true) && !(el.hasClass("already-visible"))) {
      el.addClass("fadeInUp");
    }
  });

  iconsSecond.each(function(i, el) {
    var el = $(el);
    if (el.visible(true) && !(el.hasClass("already-visible"))) {
      el.addClass("fadeIn");
    }
  });

});



















          var $player = $('#player');
            var player = $player.get(0);
            var $parent = $player.parent();
            var $win = $(window);
            var resizeTimeout = null;
            var shouldResize = false;
            var shouldPosition = false;
            var videoRatio = 16 / 9;
            player.volume = 0; // mute
            var resize = function() {
            if (!shouldResize) { return; }
            var height = $parent.height();
            var width = $parent.width();
            var viewportRatio = width / height;
            var scale = 1;

            if (videoRatio < viewportRatio) {
            // viewport more widescreen than video aspect ratio
                scale = viewportRatio / videoRatio;
            } else if (viewportRatio < videoRatio) {
            // viewport more square than video aspect ratio
                scale = (videoRatio / viewportRatio) + 0.02;
            }

            var offset = positionVideo(scale, width, height);
            setVideoTransform(scale, offset);
            };

            var setVideoTransform = function(scale, offset) {
                offset = $.extend({ x: 0, y: 0 }, offset);
                var transform = 'translate(' + Math.round(offset.x) + 'px,' + Math.round(offset.y) + 'px) scale(' + scale + ')';
                $player.css({
                    '-webkit-transform': transform,
                    'transform': transform
                });
            };

            // accounts for transform origins on scaled video
            var positionVideo = function(scale, width, height) {
                if (!shouldPosition) { return false; }
                var x = parseInt($player.data('origin-x'), 10);
                var y = parseInt($player.data('origin-y'), 10);
                setVideoOrigin(x, y);
                var viewportRatio = width / height;
                var scaledHeight = scale * height;
                var scaledWidth = scale * width;
                var percentFromX = (x - 50) / 100;
                var percentFromY = (y - 50) / 100;
                var offset = {};
                if (videoRatio < viewportRatio) {
                    offset.x = (scaledWidth - width) * percentFromX;
                } else if (viewportRatio < videoRatio) {
                    offset.y = (scaledHeight - height) * percentFromY;
                }
                return offset;
            };

            var setVideoOrigin = function(x, y) {
            var origin = x + '% ' + y + '%';
            $player.css({
                '-webkit-transform-origin': origin,
                'transform-origin': origin
            });
            $player.css('-webkit-transform-origin', origin);
            $player.css('transform-origin', origin);
            };

            $win.on('resize', function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(resize, 100);
            });

            var value = 'transform-origin';
           // player.setAttribute('style', '');
            switch (value) {
                case 'transform':
                    shouldResize = true;
                    shouldPosition = false;
                    resize();
                break;
                case 'transform-origin':
                    shouldResize = true;
                    shouldPosition = true;
                    resize();
                break;
                default:
                    shouldResize = false;
                    shouldPosition = false;
            }
            player.setAttribute('class', value);















(function(){
	var canvas = document.querySelector('canvas');
    var stage, textStage, form, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#f8222f', '#ff2532', '#fe212e', '#ff3743'];

    function init() {
        initStages();
        initCircles();
        animate();
    }

    // Init Canvas
    function initStages() {
        //offsetX = (window.innerWidth-600)/2;
        //offsetY = (window.innerHeight-300)/2;
        //textStage = new createjs.Stage("text");
        //textStage.canvas.width = 600;
        //textStage.canvas.height = 200;

        stage = new createjs.Stage("stage");
        //stage.canvas.width = document.body.scrollWidth;//window.innerWidth;
        //stage.canvas.height = window.innerHeight;

    }


    function initCircles() {
        circles = [];
        for(var i=0; i<125; i++) {
            var circle = new createjs.Shape();
            var r = 15*Math.random();
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*200, y: c.y + -100+Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }


    //make canvas site responsive
	//Get the canvas & context
  		var c = $('#stage');
  		var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();

  		//Run function when browser  resize
	  	$(window).resize( respondCanvas );

	  	function respondCanvas(){
  			c.attr('width', $(container).width() ); //max width
  			c.attr('height', $(container).outerHeight() ); //max height
			init();
 		}

		//Initial call
		respondCanvas();

    window.onload = function() { init() };
})();


