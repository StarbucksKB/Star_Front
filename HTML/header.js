window.addEventListener('load', function () {
  const productList = document.querySelector('.productList');
  const orderList = document.querySelector('.orderList');
  const cartList = document.querySelector('.cartList');
  const login = document.querySelector('.login');
  const join = document.querySelector('.join');
  const logout = document.querySelector('.logout');
  // 각 클래스로 가져온 다음 window.location.href를 사용하여 각 폴더에 해당하는 홈페이지로 이동
  productList.addEventListener('click', (event) => {
    window.location.href = './Products/productList.html';
  });
  orderList.addEventListener('click', (event) => {
    window.location.href = './Products/orderList.html';
  });
  cartList.addEventListener('click', (event) => {
    window.location.href = './Products/cartList.html';
  });
  login.addEventListener('click', (event) => {
    window.location.href = './Members/login.html';
  });
  join.addEventListener('click', (event) => {
    window.location.href = './Members/join.html';
  });
  logout.addEventListener('click', () => alert('로그아웃 되셨습니다.'));
});
