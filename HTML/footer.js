document.addEventListener('DOMContentLoaded', () => {
  fetch('/HTML/footer.html')
    .then((res) => res.text())
    .then((headerHTML) => {
      document.getElementById('footer').innerHTML = headerHTML;

      document.querySelector('.home').onclick = () => {
        location.href = '/HTML/main.html';
      };
      document.querySelector('.joinUs').onclick = () => {
        location.href = '/HTML/Members/join.html';
      };
      document.querySelector('.signIn').onclick = () => {
        location.href = '/HTML/Members/login.html';
      };
    })
    .catch((err) => console.error('헤더 로딩 중 오류 발생:', err));
});
