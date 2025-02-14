let user = [{
  id: 'user01',
  pw: '1111'
},
{
  id: 'user02',
  pw: '2222'
},
{
  id: 'user03',
  pw: '3333'
},
]


// let user_json = JSON.stringify(user);
localStorage.setItem('use', JSON.stringify(user));

user = JSON.parse(localStorage.getItem('use'));

let userId = document.querySelector('input#userId');
let userPw = document.querySelector('input#userPw');

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(userId.value, userPw.value);

  for (let i = 0; i < user.length; i++) {
    console.log(user[i])
    if (user[i].id == userId.value && user[i].pw == userPw.value) {
      alert('로그인성공');
      localStorage.setItem('sign', JSON.stringify(user));
      location.href = 'index.html';
      return;
    }
  }
  alert('비밀번호 불일치.')
});

function logout() {
  localStorage.removeItem('sign');
  alert('로그아웃 되었습니다.');
  window.location.href = "blog.html"
}
// ------------------------------------------------------------------------- //

// document.getElementById("test").addEventListener("submit", function (event) {
//   event.preventDefault(); // 기본 폼 제출 방지

//   const userId = document.getElementById("userId").value;
//   const userPw = document.getElementById("userPw").value;

//   if (userId && userPw) {
//       localStorage.setItem("userId", userId); // 사용자 정보 저장
//       alert("로그인 성공!");
//       window.location.href = "index.html"; // 로그인 후 메인 페이지로 이동
//   } else {
//       alert("아이디와 비밀번호를 입력하세요.");
//   }
// });