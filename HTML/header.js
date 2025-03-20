document.addEventListener('DOMContentLoaded', () => {
  fetch('/HTML/header.html')
    .then((res) => res.text())
    .then((headerHTML) => {
      document.getElementById('header').innerHTML = headerHTML;

      document.querySelector('#imagelogo').onclick = () => {
        location.href = 'HTML/main.html';
      };
      document.querySelector('.productList').onclick = () => {
        location.href = '/HTML/Products/productList.html';
      };
      document.querySelector('.cartList').onclick = () => {
        location.href = '/HTML/Products/cartList.html';
      };
      document.querySelector('.orderList').onclick = () => {
        location.href = '/HTML/Products/orderList.html';
      };
      document.querySelector('.login').onclick = () => {
        location.href = '/HTML/Members/login.html';
      };
      document.querySelector('.join').onclick = () => {
        location.href = '/HTML/Members/join.html';
      };
      document.querySelector('.logout').onclick = () => {
        alert('로그아웃 되셨습니다.');
      };
    })
    .catch((err) => console.error('헤더 로딩 중 오류 발생:', err));
});
