'use strict';

// ハンバーガーメニュー&ドロワー
$(function(){
  const hamburger = $('#js-hamburger');
  const drawer = $('#js-drawer');
  const features = $('#js-features');
  const price = $('#js-price');
  const contact = $('#js-contact');
  const cbtn = $('#js-cbtn');
  
  // ハンバーガーメニュークリック後にドロワー表示
  hamburger.on('click',function(){
    hamburger.toggleClass("is-checked")
    drawer.toggleClass("is-checked")
  })

  // ドロワー内の「特徴」クリック後にドロワーを閉じ、元に戻る
  features.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「価格」クリック後にドロワーを閉じ、元に戻る
  price.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「お問い合わせ」クリック後にドロワーを閉じ、元に戻る
  contact.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「お問い合わせ」クリック後にドロワーを閉じ、元に戻る
  cbtn.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })
})



// アコーディオン
// $(function(){
//   $(".js-accordion__title").on("click",function(){
//     $(this).toggleClass("is-open");
//     $(this).next().slideToggle(300);
//   })
// })

// アコーディオン（一つ目が開いた状態）
$(function(){
  $(".c-accordion__item:first-child .c-accordion__body").css("display","block")
  $(".js-accordion__title").on("click",function(){
    $(this).toggleClass("is-open");
    $(this).next().slideToggle("is-open");
  })
})

// Swiperの使用に必要な記述
const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1.5, // １度に表示するスライド数
  centeredSlides: true, //現在のスライドを中央に表示
  spaceBetween: 20, // スライド同士の余白
  mousewheel: true, // スマホの指でのスワイプ
  
  // 自動再生
  autoplay: {
    delay: 5000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
  },

  breakpoints: {
    // タブレット用
    768: {
      slidesPerView: 2.8, // １度に表示するスライド数
      spaceBetween: 40, // スライド同士の余白
    },
    
    // PC用
    1021: {
      slidesPerView: 3.75, // １度に表示するスライド数
      spaceBetween: 56, // スライド同士の余白
    } 
  }
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 95;
　　 var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// 送信制御(未入力がtrue)
$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #consent').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
      $submitBtn.toggleClass("is-checked")  // ボタンの色を変更

    } else {
      $submitBtn.prop('disabled', true);
      $submitBtn.removeClass("is-checked")  // 未入力時のボタンの色
    }
  });

});

// Googleフォームへの紐づけ
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd_UipSSGHTqaB5qO0ZXHdNiV82F3rDYDERmQAtW0EuOoeWTA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $("#form").fadeOut();
          // $(".send").fadeOut();
          // window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});