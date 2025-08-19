/*=================================================
 スムーススクロール
 ===================================================*/
$('a[href^="#"]').click(function () {
  // クリックしたaタグのリンクを取得
  let href = $(this).attr("href");
  // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
  let target = $(href == "#" || href == "" ? "html" : href);
  // ページトップからジャンプ先の要素までの距離を取得
  let position = target.offset().top;
  // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
  // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  // urlが変化しないようにfalseを返す
  return false;
});


/*=================================================
スクロール時の画像フェード表示
===================================================*/
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".card").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "");
      $(this).css("transform", "translateY()");
    }
  });
});



/*=================================================
 スムーススクロール
 ===================================================*/
$('a[href^="#"]').click(function () {
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  return false;
});

/*=================================================
スクロール時の画像フェード表示
===================================================*/
$(window).scroll(function () {
  $(".card").each(function () {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "");
      $(this).css("transform", "translateY()");
    }
  });
});

/*=================================================
 bee-cursor
 ===================================================*/
// DOMContentLoadedイベント内でbee-cursorの初期化とアニメーションを開始
document.addEventListener("DOMContentLoaded", function () {
  const bee = document.getElementById("bee-cursor");

  if (!bee) return;

  let mouseX = 0;
  let mouseY = 0;
  let beeX = 0;
  let beeY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateBee() {
    beeX += (mouseX - beeX) * 0.08;
    beeY += (mouseY - beeY) * 0.08;

    const angle = (mouseX - beeX) * 0.05;

    bee.style.left = `${beeX}px`;
    bee.style.top = `${beeY}px`;
    bee.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animateBee);
  }

  animateBee();
});










