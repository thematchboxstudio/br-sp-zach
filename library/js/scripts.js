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

$( "a, form button" ).click(function( event ) {
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
	 	infinite: false,

	});
	 $('.slider .slick-next').on('click', function(){
	 	var total = $('.slider .slick-slide').length;
		var current = $('.slider .slick-active').text();
		$('.slider .counter em').text(total);
		$('.slider .counter strong').text(current);
	 });
	 $('.slider .slick-prev').on('click', function(){
	 	var total = $('.slider .slick-slide').length;
		var current = $('.slider .slick-active').text();
		$('.slider .counter em').text(total);
		$('.slider .counter strong').text(current);
	 });
$('.slider .slick-next, .slider .slick-prev').addClass('icon-large-r-w-arrow');

$('.slider2').slick({
	dots: true,
	autoplay: false,
	infinite: false,
	speed: 500,
	//fade: true,
	arrows: true,
	//slide: '> div',
  	cssEase: 'ease'
	});

var total = $('.slider .slick-slide').length;
var current = $('.slider .slick-active').text();

$('.slider .counter em').text(total);
$('.slider .counter strong').text(current);


function updateCount() {
	$('.slider .counter em').text(total);
	$('.slider .counter strong').text(current);
}

$('.slider2 .slick-next, .slider2 .slick-prev').addClass('icon-r-arrow-smaller');
$('.slider2 .slick-dots').appendTo('.slide-content-wrap')


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



		///////////////////VIDEO!!!!!!!!!!!!!!!!!!!!!!!!!
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


		// ///////////////////////CIRCLES!!!!!!!!!!!!!!!!!!!!!
		(function(){
			var canvas = document.querySelector('canvas');
		    var stage, textStage, form, input;
		    var circles, textPixels, textFormed;
		    var offsetX, offsetY, text;
		    var colors = ['#303030'];
		    //var colors = ['#f8222f', '#ff2532', '#fe212e', '#ff3743', '#ff222c', '#d00909'];

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
		        for(var i=0; i<200; i++) {
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
		  			c.attr('height', $(container).height() ); //max height
					init();
		 		}
				//Initial call
				respondCanvas();
		    window.onload = function() { init() };
		})();// circles


		///////////////////////CIRCLES 22222222!!!!!!!!!!!!!!!!!!!!!
		(function(){
			var canvas = document.querySelector('canvas');
		    var stage2, textStage, form, input;
		    var circles, textPixels, textFormed;
		    var offsetX, offsetY, text;
		    var colors = ['#f8222f', '#ff2532', '#fe212e', '#ff3743', '#ff222c', '#d00909'];

		    function init() {
		        initStages();
		        initCircles();
		        animate();
		    }
		    // Init Canvas
		    function initStages() {
		        stage = new createjs.Stage("stagetwo");
		    }
		    function initCircles() {
		        circles = [];
		        for(var i=0; i<155; i++) {
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
		  		var c = $('#stagetwo');
		  		var ct = c.get(0).getContext('2d');
		  		var container = $(c).parent();

		  		//Run function when browser  resize
			  	$(window).resize( respondCanvas );

			  	function respondCanvas(){
		  			c.attr('width', $(container).width() ); //max width
		  			c.attr('height', $(container).height() ); //max height
					init();
		 		}
				//Initial call
				respondCanvas();
		    window.onload = function() { init() };
		})();// circles 2

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



// (function($) {

//   /**
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
//    */

//   $.fn.visible = function(partial) {

//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;

//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };

// })(jQuery);

// var win = $(window);

// var allMods = $(".animated");
// var iconsFirst = $(".icons-first");
// var iconsSecond = $(".icons-second");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
// iconsFirst.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });
// iconsSecond.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });

// win.scroll(function(event) {

//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true) && !(el.hasClass("already-visible"))) {
//       el.addClass("fade-in");
//     }
//   });

//   iconsFirst.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true) && !(el.hasClass("already-visible"))) {
//       el.addClass("fadeInUp");
//     }
//   });

//   iconsSecond.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true) && !(el.hasClass("already-visible"))) {
//       el.addClass("fadeIn");
//     }
//   });

// });





































// /*global jQuery */
// /*!
// * FitText.js 1.2
// *
// * Copyright 2011, Dave Rupert http://daverupert.com
// * Released under the WTFPL license
// * http://sam.zoy.org/wtfpl/
// *
// * Date: Thu May 05 14:23:00 2011 -0600
// */

// (function( $ ){

//   $.fn.fitText = function( kompressor, options ) {

//     // Setup options
//     var compressor = kompressor || 1,
//         settings = $.extend({
//           'minFontSize' : Number.NEGATIVE_INFINITY,
//           'maxFontSize' : Number.POSITIVE_INFINITY
//         }, options);

//     return this.each(function(){

//       // Store the object
//       var $this = $(this);

//       // Resizer() resizes items based on the object width divided by the compressor * 10
//       var resizer = function () {
//         $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
//       };

//       // Call once to set.
//       resizer();

//       // Call on resize. Opera debounces their resize by default.
//       $(window).on('resize.fittext orientationchange.fittext', resizer);

//     });

//   };
// $("#fittext1").fitText(1.2);
// 		//$("#fittext2").fitText(1.1, { minFontSize: '30px', maxFontSize: '200px' });
// })( jQuery );























/*
 * CSS3 Animate it
 * Copyright (c) 2014 Jack McCourt
 * https://github.com/kriegar/css3-animate-it
 * Version: 0.1.0
 *
 * I utilise the jQuery.appear plugin within this javascript file so here is a link to that too
 * https://github.com/morr/jquery.appear
 *
 * I also utilise the jQuery.doTimeout plugin for the data-sequence functionality so here is a link back to them.
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {

        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);



/*!
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery doTimeout: Like setTimeout, but better!
//
// *Version: 1.0, Last updated: 3/3/2010*
//
// Project Home - http://benalman.com/projects/jquery-dotimeout-plugin/
// GitHub       - http://github.com/cowboy/jquery-dotimeout/
// Source       - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.js
// (Minified)   - http://github.com/cowboy/jquery-dotimeout/raw/master/jquery.ba-dotimeout.min.js (1.0kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// Debouncing      - http://benalman.com/code/projects/jquery-dotimeout/examples/debouncing/
// Delays, Polling - http://benalman.com/code/projects/jquery-dotimeout/examples/delay-poll/
// Hover Intent    - http://benalman.com/code/projects/jquery-dotimeout/examples/hoverintent/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-dotimeout/unit/
//
// About: Release History
//
// 1.0 - (3/3/2010) Callback can now be a string, in which case it will call
//       the appropriate $.method or $.fn.method, depending on where .doTimeout
//       was called. Callback must now return `true` (not just a truthy value)
//       to poll.
// 0.4 - (7/15/2009) Made the "id" argument optional, some other minor tweaks
// 0.3 - (6/25/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.

  var cache = {},

    // Reused internal string.
    doTimeout = 'doTimeout',

    // A convenient shortcut.
    aps = Array.prototype.slice;

  // Method: jQuery.doTimeout
  //
  // Initialize, cancel, or force execution of a callback after a delay.
  //
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  //
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  //
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced. (for debouncing, be sure to
  // specify an id).
  //
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  //
  // Usage:
  //
  // > jQuery.doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery.doTimeout( id [, force_mode ] );
  //
  // Arguments:
  //
  //  id - (String) An optional unique identifier for this doTimeout. If id is
  //    not specified, the doTimeout will NOT be able to be manually canceled or
  //    forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed.
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true.
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  //
  // Returns:
  //
  //  If force_mode is true, false or undefined and there is a
  //  yet-to-be-executed callback to cancel, true is returned, but if no
  //  callback remains to be executed, undefined is returned.

  $[doTimeout] = function() {
    return p_doTimeout.apply( window, [ 0 ].concat( aps.call( arguments ) ) );
  };

  // Method: jQuery.fn.doTimeout
  //
  // Initialize, cancel, or force execution of a callback after a delay.
  // Operates like <jQuery.doTimeout>, but the passed callback executes in the
  // context of the jQuery collection of elements, and the id is stored as data
  // on the first element in that collection.
  //
  // If delay and callback are specified, a doTimeout is initialized. The
  // callback will execute, asynchronously, after the delay. If an id is
  // specified, this doTimeout will override and cancel any existing doTimeout
  // with the same id. Any additional arguments will be passed into callback
  // when it is executed.
  //
  // If the callback returns true, the doTimeout loop will execute again, after
  // the delay, creating a polling loop until the callback returns a non-true
  // value.
  //
  // Note that if an id is not passed as the first argument, this doTimeout will
  // NOT be able to be manually canceled or forced (for debouncing, be sure to
  // specify an id).
  //
  // If id is specified, but delay and callback are not, the doTimeout will be
  // canceled without executing the callback. If force_mode is specified, the
  // callback will be executed, synchronously, but will only be allowed to
  // continue a polling loop if force_mode is true (provided the callback
  // returns true, of course). If force_mode is false, no polling loop will
  // continue, even if the callback returns true.
  //
  // Usage:
  //
  // > jQuery('selector').doTimeout( [ id, ] delay, callback [, arg ... ] );
  // > jQuery('selector').doTimeout( id [, force_mode ] );
  //
  // Arguments:
  //
  //  id - (String) An optional unique identifier for this doTimeout, stored as
  //    jQuery data on the element. If id is not specified, the doTimeout will
  //    NOT be able to be manually canceled or forced.
  //  delay - (Number) A zero-or-greater delay in milliseconds after which
  //    callback will be executed.
  //  callback - (Function) A function to be executed after delay milliseconds.
  //  callback - (String) A jQuery.fn method to be executed after delay
  //    milliseconds. This method will only poll if it explicitly returns
  //    true (most jQuery.fn methods return a jQuery object, and not `true`,
  //    which allows them to be chained and prevents polling).
  //  force_mode - (Boolean) If true, execute that id's doTimeout callback
  //    immediately and synchronously, continuing any callback return-true
  //    polling loop. If false, execute the callback immediately and
  //    synchronously but do NOT continue a callback return-true polling loop.
  //    If omitted, cancel that id's doTimeout.
  //
  // Returns:
  //
  //  When creating a <jQuery.fn.doTimeout>, the initial jQuery collection of
  //  elements is returned. Otherwise, if force_mode is true, false or undefined
  //  and there is a yet-to-be-executed callback to cancel, true is returned,
  //  but if no callback remains to be executed, undefined is returned.

  $.fn[doTimeout] = function() {
    var args = aps.call( arguments ),
      result = p_doTimeout.apply( this, [ doTimeout + args[0] ].concat( args ) );

    return typeof args[0] === 'number' || typeof args[1] === 'number'
      ? this
      : result;
  };

  function p_doTimeout( jquery_data_key ) {
    var that = this,
      elem,
      data = {},

      // Allows the plugin to call a string callback method.
      method_base = jquery_data_key ? $.fn : $,

      // Any additional arguments will be passed to the callback.
      args = arguments,
      slice_args = 4,

      id        = args[1],
      delay     = args[2],
      callback  = args[3];

    if ( typeof id !== 'string' ) {
      slice_args--;

      id        = jquery_data_key = 0;
      delay     = args[1];
      callback  = args[2];
    }

    // If id is passed, store a data reference either as .data on the first
    // element in a jQuery collection, or in the internal cache.
    if ( jquery_data_key ) { // Note: key is 'doTimeout' + id

      // Get id-object from the first element's data, otherwise initialize it to {}.
      elem = that.eq(0);
      elem.data( jquery_data_key, data = elem.data( jquery_data_key ) || {} );

    } else if ( id ) {
      // Get id-object from the cache, otherwise initialize it to {}.
      data = cache[ id ] || ( cache[ id ] = {} );
    }

    // Clear any existing timeout for this id.
    data.id && clearTimeout( data.id );
    delete data.id;

    // Clean up when necessary.
    function cleanup() {
      if ( jquery_data_key ) {
        elem.removeData( jquery_data_key );
      } else if ( id ) {
        delete cache[ id ];
      }
    };

    // Yes, there actually is a setTimeout call in here!
    function actually_setTimeout() {
      data.id = setTimeout( function(){ data.fn(); }, delay );
    };

    if ( callback ) {
      // A callback (and delay) were specified. Store the callback reference for
      // possible later use, and then setTimeout.
      data.fn = function( no_polling_loop ) {

        // If the callback value is a string, it is assumed to be the name of a
        // method on $ or $.fn depending on where doTimeout was executed.
        if ( typeof callback === 'string' ) {
          callback = method_base[ callback ];
        }

        callback.apply( that, aps.call( args, slice_args ) ) === true && !no_polling_loop

          // Since the callback returned true, and we're not specifically
          // canceling a polling loop, do it again!
          ? actually_setTimeout()

          // Otherwise, clean up and quit.
          : cleanup();
      };

      // Set that timeout!
      actually_setTimeout();

    } else if ( data.fn ) {
      // No callback passed. If force_mode (delay) is true, execute the data.fn
      // callback immediately, continuing any callback return-true polling loop.
      // If force_mode is false, execute the data.fn callback immediately but do
      // NOT continue a callback return-true polling loop. If force_mode is
      // undefined, simply clean up. Since data.fn was still defined, whatever
      // was supposed to happen hadn't yet, so return true.
      delay === undefined ? cleanup() : data.fn( delay === false );
      return true;

    } else {
      // Since no callback was passed, and data.fn isn't defined, it looks like
      // whatever was supposed to happen already did. Clean up and quit!
      cleanup();
    }

  };

})(jQuery);




//CSS3 Animate-it
$('.animatedParent').appear();
$('.animatedClick').click(function(){
  var target = $(this).attr('data-target');


  if($(this).attr('data-sequence') != undefined){
    var firstId = $("."+target+":first").attr('data-id');
    var lastId = $("."+target+":last").attr('data-id');
    var number = firstId;

    //Add or remove the class
    if($("."+target+"[data-id="+ number +"]").hasClass('go')){
      $("."+target+"[data-id="+ number +"]").addClass('goAway');
      $("."+target+"[data-id="+ number +"]").removeClass('go');
    }else{
      $("."+target+"[data-id="+ number +"]").addClass('go');
      $("."+target+"[data-id="+ number +"]").removeClass('goAway');
    }
    number ++;
    delay = Number($(this).attr('data-sequence'));
    $.doTimeout(delay, function(){
      console.log(lastId);

      //Add or remove the class
      if($("."+target+"[data-id="+ number +"]").hasClass('go')){
        $("."+target+"[data-id="+ number +"]").addClass('goAway');
        $("."+target+"[data-id="+ number +"]").removeClass('go');
      }else{
        $("."+target+"[data-id="+ number +"]").addClass('go');
        $("."+target+"[data-id="+ number +"]").removeClass('goAway');
      }

      //increment
      ++number;

      //continute looping till reached last ID
      if(number <= lastId){return true;}
    });
  }else{
    if($('.'+target).hasClass('go')){
      $('.'+target).addClass('goAway');
      $('.'+target).removeClass('go');
    }else{
      $('.'+target).addClass('go');
      $('.'+target).removeClass('goAway');
    }
  }
});

$(document.body).on('appear', '.animatedParent', function(e, $affected){
  var ele = $(this).find('.animated');
  var parent = $(this);


  if(parent.attr('data-sequence') != undefined){

    var firstId = $(this).find('.animated:first').attr('data-id');
    var number = firstId;
    var lastId = $(this).find('.animated:last').attr('data-id');

    $(parent).find(".animated[data-id="+ number +"]").addClass('go');
    number ++;
    delay = Number(parent.attr('data-sequence'));

    $.doTimeout(delay, function(){
      $(parent).find(".animated[data-id="+ number +"]").addClass('go');
      ++number;
      if(number <= lastId){return true;}
    });
  }else{
    ele.addClass('go');
  }

});

 $(document.body).on('disappear', '.animatedParent', function(e, $affected) {
  if(!$(this).hasClass('animateOnce')){
    $(this).find('.animated').removeClass('go');
   }
 });

 $(window).load(function(){
  $.force_appear();
 });


