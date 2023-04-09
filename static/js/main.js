'use strict';

var _app = _app || {};

_app.share = function () {
	var SimpleShare = function (options) {

		// get share content
		options = options || {};
		var url = options.url || window.location.href;
		var title = options.title || document.title;
		var content = options.content || '';
		var pic = options.pic || '';

		// fix content format
		url = encodeURIComponent(url);
		title = encodeURIComponent(title);
		content = encodeURIComponent(content);
		pic = encodeURIComponent(pic);

		// share target url
		var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={content}';
		var weibo = 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false';
		var tqq = 'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96';
		var renren = 'http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={content}';
		var douban = 'http://www.douban.com/share/service?href={url}&name={title}&text={content}&image={pic}';
		var facebook = 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}';
		var twitter = 'https://twitter.com/intent/tweet?text={title}&url={url}';
		var linkedin = 'https://www.linkedin.com/shareArticle?title={title}&summary={content}&mini=true&url={url}&ro=true';
		var weixin = 'http://qr.liantu.com/api.php?text={url}';
		var qq = 'http://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}';
		var tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl={url}&title={title}&content={content}';
		var pinterest = 'https://www.pinterest.com/pin/create/button/?url={url}&media=" + encodeURIComponent(a))';

		// replace content functions
		function replaceAPI(api) {
			api = api.replace('{url}', url);
			api = api.replace('{title}', title);
			api = api.replace('{content}', content);
			api = api.replace('{pic}', pic);

			return api;
		}

		// share target
		this.qzone = function () {
			window.open(replaceAPI(qzone));
		};
		this.weibo = function () {
			window.open(replaceAPI(weibo));
		};
		this.tqq = function () {
			window.open(replaceAPI(tqq));
		};
		this.renren = function () {
			window.open(replaceAPI(renren));
		};
		this.douban = function () {
			window.open(replaceAPI(douban));
		};
		this.facebook = function () {
			window.open(replaceAPI(facebook));
		};
		this.twitter = function () {
			window.open(replaceAPI(twitter));
		};
		this.linkedin = function () {
			window.open(replaceAPI(linkedin));
		};
		this.qq = function () {
			window.open(replaceAPI(qq));
		};
		this.tumblr = function () {
			window.open(replaceAPI(tumblr));
		};
		this.pinterest = function () {
			window.open(replaceAPI(pinterest));
		};
		this.weixin = function (callback) {
			if (!callback) {
				// window.open(replaceAPI(weixin));
				var wxHtml = '<div class="wx-share"><i class="wx-share-close js-wxClose icon-close"></i><img src="' + replaceAPI(weixin) + '" alt=""><p>分享到微信朋友圈</p></div>';
				$('body').append(wxHtml);
			} else {
				callback(replaceAPI(weixin));
			}
		};
	};
	var share = new SimpleShare({
		url: '',
		title: '',
		content: '',
		pic: ''
	});
	$('.social a').on('click', function () {
		var type = $(this).attr('data-share');
		switch (type) {
			case 'twitter':
				share.twitter();
				break;
			case 'facebook':
				share.facebook();
				break;
			case 'linkedin':
				share.linkedin();
				break;
			case "weixin":
				share.weixin();
				break;
			case "weibo":
				share.weibo();
				break;
			case 'tumblr':
				share.tumblr();
				break;
			case 'pinterest':
				share.pinterest();
				break;
			case 'qzone':
				share.qzone();
				break;
			case 'douban':
				share.douban();
				break;
			case 'qq':
				share.qq();
				break;
			default:
				break;
		}
	});

	$(document).on('click', '.js-wxClose', function () {
		$('.wx-share').remove();
	});
};

function throlle(fn,delay){
	delay || (delay=100);
	var timeout = null,
		starTime = new Date();
	clearTimeout(timeout);
	return function(){
		var endTime = new Date();
		if(endTime-starTime<delay){
			timeout = setTimeout(function(){
				fn();
				starTime = endTime;
			},delay);
		}else{
			fn();
		}
	}
}


var _rootWindow = $(window);

var header = {
	dropSubMenu: function(){
		$('.down-menu > a').mouseenter(function(){
			if(_rootWindow.width()>1024){
				var eleParent = $(this).parent();
				eleParent.addClass('active');
				eleParent.find('.sub-menu').slideDown(300);
			}
		})
	},
	upglideSubMenu: function(){
		$('.navigation .down-menu').mouseleave(function(){
			if(_rootWindow.width()>1024){
				var that = $(this);
				that.removeClass('active');
				that.find('.sub-menu').slideUp(300);
			}
		})
	},
	mobileDropMenu: function(){
		$('.navigation .down-menu > a').click(function(){
			if(_rootWindow.width()<1024){
				var eleParent = $(this).parent();
				eleParent.toggleClass('active on').siblings().removeClass('on');
				eleParent.find('.sub-menu').slideToggle(300);
			}
		})
	},
	openMenu: function(){
		$('.m-menu').click(function(){
			$('body').toggleClass('open');
		})
	},
	closeMenu: function(){
		$('.nav-close').click(function(){
			$('body').removeClass('open');
		})
	},
	__init: function(){
		header.dropSubMenu();
		header.upglideSubMenu();
		header.mobileDropMenu();
		header.openMenu();
		// header.closeMenu();
	}
}


$(function(){

	$('img.lazyload,.bg-cover.lazyload').lazyload({
		threshold: 200,
		effect: 'fadeIn'
	});

	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	});

	wow.init();
	header.__init();
	_app.share();

	
	function scollAddHeaderBg(){
		var box = $('.module-page__banner') || {},
			bodyEle = $('body');
		if(box.length>0){
			var getHeightValue = box.outerHeight() - 50;

			function st(){
				var winScroll = _rootWindow.scrollTop();
				if(winScroll>=getHeightValue){
					bodyEle.addClass('bg-header');
				}else{
					bodyEle.removeClass('bg-header');
				}
			}
			_rootWindow.scroll(throlle(st,100)).trigger('resize');
		}else{
			bodyEle.addClass('bg-header');
		}
	}

	scollAddHeaderBg();

	_rootWindow.scroll(function(){
		var that = $(this);
		if(that.scrollTop()>=that.height()/2){
			$('.suspension-wrap').fadeIn();
		}else{
			$('.suspension-wrap').fadeOut();
		}
	}).trigger('scroll');
})
