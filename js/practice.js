const menuBtn = document.querySelector('.barsBtn');
const menu = document.querySelector('.middle')
const sns = document.querySelector('.right')
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  sns.classList.toggle('active');

});
