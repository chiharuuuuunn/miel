








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
slick
===================================================*/
// $(document).ready(function () {
//   $(".slick-area").slick({
//     arrows: false,
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           centerPadding: "50px",
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });


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
ローディング
===================================================*/
// window.addEventListener("load", function () {
//   // 5秒後にローディング画面を非表示にする
//   setTimeout(function () {
//     const loader = document.querySelector(".loader");
//     if (loader) loader.style.display = "none";

//     // bodyにカーソル非表示を再適用（重要！）
//     document.body.style.cursor = "none";
//   }, 5000); // ← 5000ミリ秒 = 5秒
// });




/*=================================================
 bee-cursor
 ===================================================*/
window.addEventListener("DOMContentLoaded", function () {
  const bee = document.getElementById("bee-cursor");

  if (!bee) return; // 念のため：beeが存在しなければ終了

  let mouseX = 0;
  let mouseY = 0;
  let beeX = 0;
  let beeY = 0;

  const beeWidth = 60;
  const beeHeight = 60;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateBee() {
    beeX += (mouseX - beeX) * 0.08;
    beeY += (mouseY - beeY) * 0.08;

    const angle = (mouseX - beeX) * 0.05;

    bee.style.left = beeX - beeWidth / 2 + "px";
    bee.style.top = beeY - beeHeight / 2 + "px";
    bee.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animateBee);
  }

  animateBee();
});



// マウスで掴む動き
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".splide__list");
//   const wrappers = document.querySelectorAll(".feed-box-wrapper");

//   let startX = 0;

//   slider.addEventListener("mousedown", (e) => {
//     startX = e.clientX;
//     slider.classList.add("is-grabbing");

//     wrappers.forEach((wrapper) => {
//       wrapper.classList.remove("is-active-left", "is-active-right");
//     });

//     const handleMouseMove = (e) => {
//       const diffX = e.clientX - startX;

//       wrappers.forEach((wrapper) => {
//         wrapper.classList.remove("is-active-left", "is-active-right");
//         if (diffX < -5) {
//           wrapper.classList.add("is-active-left"); // 左へドラッグ
//         } else if (diffX > 5) {
//           wrapper.classList.add("is-active-right"); // 右へドラッグ
//         }
//       });
//     };

//     const handleMouseUp = () => {
//       slider.classList.remove("is-grabbing");
//       wrappers.forEach((wrapper) => {
//         wrapper.classList.remove("is-active-left", "is-active-right");
//       });

//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   });
// });












