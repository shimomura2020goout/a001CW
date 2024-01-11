'use strict';

$(function () {

  /*=======================================
  スクロール後のヘッダーサイズ調整
  =======================================*/
  $(window).scroll(function () {
    if($(window).scrollTop() > 0) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });




  /*=======================================
  スムーススクロール
  =======================================*/

  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 150;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /*=======================================
  ハンバーガーメニュー & スライドメニュー
  =======================================*/

  $(".hbg-menu").on('click', function () {
    $('.hbg-menu').toggleClass('active');
    $('.drawer-menu-container').toggleClass('active');
  });
  //スライドメニュー表示を閉じるための処理
  //リンク、スライドメニュー表示範囲
  $('.drawer-menu-list li a').on('click', function () {
    $('.drawer-menu-list').removeClass('active');
  });
  $('.drawer-menu-list').on('click', function () {
    $('.hbg-menu').removeClass('active');
    $('.drawer-menu-container').removeClass('active');
  });


});


/*=======================================
アコーディオン表示
=======================================*/
$(function () {
  // タイトルをクリックすると
  $(".question").on("click", function () {
    // クリックした次の要素(コンテンツ)を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("is-opened");
  });
});

/*=======================================
snsアイコン表示
=======================================*/
$('.footer-facebook').hover(
  function () {
    $(this).addClass('is-hovered');
  },
  function () {
    $(this).removeClass('is-hovered');
  }
);
$('.footer-twitter').hover(
  function () {
    $(this).addClass('is-hovered');
  },
  function () {
    $(this).removeClass('is-hovered');
  }
);

var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {

} else {
  //
}

