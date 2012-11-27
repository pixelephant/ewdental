/*
 * jQuery Anystretch
 * Version 1.1
 * https://github.com/danmillar/jquery-anystretch
 *
 * Add a dynamically-resized background image to the body
 * of a page or any other block level element within it
 *
 * Copyright (c) 2012 Dan Millar (@danmillar / decode.uk.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * This is a fork of jQuery Backstretch (v1.2)
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
*/
(function(a){a.fn.anystretch=function(b,c,d){var e=this.selector.length?!1:!0;return this.each(function(f){function r(){if(b){var c;e||h.css({position:j.elPosition,background:"none"}),i.length==0?i=a("<div />").attr("class","anystretch").css({left:0,top:0,position:e?"fixed":"absolute",overflow:"hidden",zIndex:e?-999999:-999998,margin:0,padding:0,height:"100%",width:"100%"}):i.find("img").addClass("deleteable"),c=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999}).bind("load",function(b){var c=a(this),e,f;c.css({width:"auto",height:"auto"}),e=this.width||a(b.target).width(),f=this.height||a(b.target).height(),l=e/f,s(function(){c.fadeIn(j.speed,function(){i.find(".deleteable").remove(),typeof d=="function"&&d()})})}).appendTo(i),h.children(".anystretch").length==0&&(e?a("body").append(i):h.append(i)),i.data("settings",j),c.attr("src",b),a(window).resize(s)}}function s(b){try{q={left:0,top:0},n=t(),o=n/l,o>=u()?(p=(o-u())/2,j.positionY=="center"||j.centeredY?a.extend(q,{top:"-"+p+"px"}):j.positionY=="bottom"&&a.extend(q,{top:"auto",bottom:"0px"})):(o=u(),n=o*l,p=(n-t())/2,j.positionX=="center"||j.centeredX?a.extend(q,{left:"-"+p+"px"}):j.positionX=="right"&&a.extend(q,{left:"auto",right:"0px"})),i.children("img:not(.deleteable)").width(n).height(o).filter("img").css(q)}catch(c){}typeof b=="function"&&b()}function t(){return e?h.width():h.innerWidth()}function u(){return e?h.height():h.innerHeight()}var g={positionX:"center",positionY:"center",speed:0,elPosition:"relative"},h=a(this),i=e?a(".anystretch"):h.children(".anystretch"),j=i.data("settings")||g,k=i.data("settings"),l,m,n,o,p,q;return c&&typeof c=="object"&&a.extend(j,c),c&&typeof c=="function"&&(d=c),a(document).ready(r),this})},a.anystretch=function(b,c,d){var e="onorientationchange"in window?a(document):a(window);e.anystretch(b,c,d)}})(jQuery);