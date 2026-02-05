//gsap
window.addEventListener("load",function(){
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin);

window.scrollTo(0, 0);
ScrollTrigger.refresh();

if (winwidth >= 1025) {
  ScrollTrigger.refresh();
  const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      // normalizeScroll: true,
      smoothTouch: 0.1,
  });
}

//スクロールに合わせて縦に線が伸びていく
    const indexBar = document.querySelectorAll('.body__scroll__bar');
    gsap.fromTo(
      indexBar, {
        height: '1vh',
      },
      {
        height: '31.7vh',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          endTrigger: 'footer',
          end: 'top bottom',
          scrub: 1,
    //      markers: true,
        }
      }
); 

//KVスクロールボタン
ScrollTrigger.create({
  trigger: "body",
  start: 'top top-=100',
  toggleClass:{
      targets: ".scr-box",
      className: 'off',
  }
});


}); 

$(function() {
/*-------------------------------------------------------
 共通クラス付与
-------------------------------------------------------*/   
    // const jsAnms = document.querySelectorAll('.anm');
    // jsAnms.forEach((jsAnm, index) => {
    //   gsap.to(
    //     jsAnm,
    //   {
    //     scrollTrigger: {
    //       trigger: jsAnm,
    //       start: 'top center+=50',
    //       once: true,
    //       onEnter: () => jsAnm.classList.add("on"),
    //     }
    //   });
    // });

    document.querySelectorAll(".anm").forEach((el, index) => {
	    ScrollTrigger.create({
	        trigger: el,
	        start: 'top center',
	        toggleClass: {targets: el, className: "on"},
	    });
    });
    
    
/*-------------------------------------------------------
 hover時シャッフル
-------------------------------------------------------*/   

      var effectList = [];
      var elementList = document.querySelectorAll('.sh-txt');


      for (var i = 0; i < elementList.length; i++) {

        var element = elementList[i];
        var url = element.href;
        element.dataset.index = i;

        // インスタンスを取得する
        effectList[i] = new ShuffleText(element);

        // マウスオーバー時に再生する
        element.addEventListener('mouseenter', function () {
          effectList[+this.dataset.index].start();
        });

//        // マウスアウト時に再生する
//        element.addEventListener('mouseleave', function () {
//          effectList[+this.dataset.index].start();
//        });

        // マウスタッチ時に再生する
        element.addEventListener('touchstart', function () {
          effectList[+this.dataset.index].start();
        });
  }

    
/*-------------------------------------------------------
 文字処理　斜め下からぬるっと
-------------------------------------------------------*/

/*-------------------------------------------------------
 文字処理　背景付きタイピング
-------------------------------------------------------*/

function setupSplits() {
  const targets = gsap.utils.toArray(".js-motionTxt");
  targets.forEach((target) => {
    let SplitClient = new SplitText(target, { 
        type: "chars,words",
        charsClass:"t",
    });
  });
//  ScrollTrigger.batch(".t", {
//          onEnter: batch => gsap.to(batch, {
//              opacity: 1,
//              scale:1,
//              stagger: {each: 0.1}, 
//              overwrite: true, 
//              ease: Power4.out,
//          }),
//    });

  const bgtargets = gsap.utils.toArray(".js-motionTxtBg");
  bgtargets.forEach((bgtarget) => {
    let SplitClient = new SplitText(bgtarget, { 
        type: "chars,words",
        charsClass:"b",
        scale:0
    });
  });

}
setupSplits();


/*-------------------------------------------------------
     共通spanで囲む
-------------------------------------------------------*/

var element = $(".TextTyping");
  element.each(function () {
  var text = $(this).html();
  var textbox = "";
  text.split('').forEach(function (t) {
  if (t !== " ") {
      textbox += '<span>' + t + '</span>';
  } else {
      textbox += t;
  }
  });
  $(this).html(textbox);
});


    
    
/*-------------------------------------------------------
     共通下からフェードイン
-------------------------------------------------------*/
    const jsFadeUps = document.querySelectorAll('.js-fadeUp');
    jsFadeUps.forEach((jsFadeUp, index) => {
      gsap.to(
        jsFadeUp,
      {
        scrollTrigger: {
          trigger: jsFadeUp,
          start: 'top bottom-=100',
          end: 'bottom top',
          once: true,
          onEnter: () => jsFadeUp.classList.add("on"),
        }
      });
    });
    
    
    /*-------------------------------------------------------
     //画像と文字のパララックス
    -------------------------------------------------------*/
    const messageImgs = document.querySelectorAll('.js-kv__img');
    messageImgs.forEach((messageImg, index) => {
      gsap.to(
        messageImg,
        {
          scrollTrigger: {
            trigger: messageImg,
            start: 'top bottom-=100',
            end: 'bottom top',
            toggleClass: {targets: messageImg, className: "js-fadeImg"},
          }
        }
      );
    }); 
    
    
    /*-------------------------------------------------------
     //順番にフェードイン
    -------------------------------------------------------*/
    gsap.set(".fadegrp", {y: 100});
    ScrollTrigger.batch(".fadegrp", {
          onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.1}, overwrite: true, ease: Power4.out}),
          onLeave: batch => gsap.set(batch, {opacity: 0, y: -100,overwrite: true, ease: Power4.out}),
          onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.1, overwrite: true, ease: Power4.out}),
          onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true, ease: Power4.out})
    });

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".fadegrp", {y: 0})); 
  
  }); 

var comJs = {};

$(function() {
	'use strict';

	$('a').focus(function() {
		this.blur();
	});

	//アンカースクロール
	$('a[href^="#"]').not('.noScroll').click(function(e) {
		e.preventDefault();
		if($(this).attr('href') !== '#') {
			comJs.ancScr($($(this).attr('href')));
		}
  });

  comJs.hdNavSet();

});


/*===========================================================================
↓ヘッダーナビ↓
===========================================================================*/
comJs.hdNavSet = function () {
  var ns = 'hdNavSet';
  var $win = $(window);
  var $hd = $('#header');
  var $hdNav = $('.js-gnav');
  var $hdNavlink = $hdNav.find('a');
  var $hdBtn = $hd.find('.openbtn');
  var $hdBtnset = $hd.find('.btn_set');
  var openClass = 'active';
  var clickEvent = 'click.' + ns;
  var scrollEvent = 'scroll.' + ns;

  var init = function () {
    $hd.removeClass(openClass);  
      
    $hdBtn.on(clickEvent, function () {
        $(this).toggleClass(openClass);//ボタン自身に activeクラスを付与し
        $hdNav.toggleClass(openClass);//ナビゲーションにpanelactiveクラスを付与
        $hd.toggleClass(openClass);
        $hdBtnset.toggleClass('off');
    });
    $hdNavlink.on(clickEvent, function () {
        $hdBtn.removeClass(openClass);
        $hdNav.removeClass(openClass);
        $hdBtnset.removeClass('off');
    });
    $win.on(scrollEvent, function () {
        winMove();
    });
  };
   var winMove = function () {
      //$hd.addClass(openClass);
      $hdBtn.removeClass(openClass);
      $hdNav.removeClass(openClass);
      $hdBtnset.removeClass('off');
  };
  init();
};


/*===========================================================================
↓アンカースクロール↓
===========================================================================*/
comJs.ancScr = function($ancTarget, option) {
	var position;
	var opt = option || {};
	var speed = opt.speed || 1200;
	var offset = opt.offset || 0;
	var $hdH = $('#header').height();

	if (!$ancTarget.length) {
		return false;
	}

	position = $ancTarget.offset().top - offset - $hdH;

	$('body, html').stop().animate({
		scrollTop: position
	}, speed);
};


/*-------------------------------------------------------
 文字処理　シャッフル
-------------------------------------------------------*/

const targets = document.querySelectorAll('.js-shuffleText');
 
if(targets !==null) {
  shuffleShowScroll();
}
 
function shuffleShowScroll() {
  function doWhenTargetObserve(entries, observerStop) {
    entries.forEach((entry) => {
      // 監視範囲にないときは何もしない
      if (!entry.isIntersecting) {
        return;
      }      
      // 監視範囲と交差したときの処理（シャッフルさせ、is-showクラス付与）
      shuffleLetters(entry.target, {
        step: 10,
        fps: 60,
      });
      entry.target.classList.add('is-show');
      //一度交差したら監視をやめる
      observerStop.unobserve(entry.target);
    });
  }
  // 監視範囲
  const options = {
    root: null,
    rootMargin: '-25% 0%',
    threshold: 1,
  };
  //IntersectionObseverのインスタンス作成
  const observer = new IntersectionObserver(doWhenTargetObserve, options);
  // ターゲットを監視
  targets.forEach((target) => {
    observer.observe(target);
  });
}

/*-------------------------------------------------------
 // フッターロゴの動き
-------------------------------------------------------*/

ScrollTrigger.create({
  trigger: "footer .logo",
  start: 'top center',
  toggleClass:{
      targets: "footer .logo",
      className: 'goanm',
  }
});


/*-------------------------------------------------------
 // マウスストーカー
-------------------------------------------------------*/

const $bigBall = document.querySelector('.follower');
const $smallBall = document.querySelector('.cursor');
const $bigBallwh = document.querySelector('#bg-white');
const $hoverables = document.querySelectorAll('a');
const $hoverablesbig = document.querySelectorAll('.title-link-area');
const $spotlights = document.querySelectorAll('.js-spot-area');
const $hoverablesLogo = document.querySelectorAll('.slide-media');
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  TweenMax.to($smallBall, 0, {
    x: e.clientX - 5,
    y: e.clientY - 7
  })
}

// Hover an element
function onMouseHover() {
  gsap.to($smallBall, { scale: 1.5, duration: .3, });
}
function onMouseHoverOut() {
  gsap.to($smallBall, { scale: 1, duration: .3, });
}
  
 
for (var i = 0; i < $hoverablesbig.length; i++) { // loop over them
  $hoverablesbig[i].addEventListener('mouseover', function(e) {
    $smallBall.classList.add("is-active");
    gsap.to($bigBall, { scale: 3, duration: .3, });
  });
}

for (var i = 0; i < $hoverablesbig.length; i++) { // loop over them
  $hoverablesbig[i].addEventListener('mouseleave', function(e) {
    $smallBall.classList.remove("is-active");
    gsap.to($bigBall, { scale: 1, duration: .3, });
  });
}

for (var i = 0; i < $spotlights.length; i++) { // loop over them
  $spotlights[i].addEventListener('mouseover', function(e) {
    $bigBall.classList.add("is-spot");
    gsap.to($bigBall, { scale: 6, duration: .3, });
  });
}

for (var i = 0; i < $spotlights.length; i++) { // loop over them
  $spotlights[i].addEventListener('mouseleave', function(e) {
    $bigBall.classList.remove("is-spot");
    gsap.to($bigBall, { scale: 1, duration: .3, });
  });
}

for (var i = 0; i < $hoverablesLogo.length; i++) { // loop over them
  $hoverablesLogo[i].addEventListener('mouseover', function(e) {
    $smallBall.classList.add("is-logo");
    $bigBall.classList.add("is-logo");
  });
}

for (var i = 0; i < $hoverablesLogo.length; i++) { // loop over them
  $hoverablesLogo[i].addEventListener('mouseleave', function(e) {
    $smallBall.classList.remove("is-logo");
    $bigBall.classList.remove("is-logo");
  });
}

$(window).on('resize', function() {
  if (winwidth >= 1025) {
      ScrollTrigger.refresh();
      const smoother = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          // normalizeScroll: true,
          smoothTouch: 0.1,
      });
    }
});

window.addEventListener("load", () => {
        ScrollTrigger.refresh();
});