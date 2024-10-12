// ナビゲーションのリンクを取得
document.querySelectorAll('.vertical-navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // デフォルトのアンカー動作を防止

      // クリックしたリンクのhref属性からターゲットIDを取得
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // スムーズにスクロール
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});
