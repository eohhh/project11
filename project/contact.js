// 회원가입시 정보저장.
let na = document.querySelector('input#userName');
let id = document.querySelector('input#id');
let pw = document.querySelector('input#pw');
let btn = document.querySelector('input#btn');
let obj = new Object();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(na.value);
  let js = JSON.parse(localStorage.getItem('use'));
  console.log(js)

  for (let i = 0; i < js.length; i++) {
    if (id.value == js[i].id) {
      alert("중복된 ID입니다.");
    } else {
      obj.id = id.value;
      obj.pw = pw.value;
      obj.na = na.value;
      js.push(obj);
      localStorage.setItem("use", JSON.stringify(js));
      alert("회원가입완료!!");
      location.href = 'blog.html';
    }
    break;
  }
})
// -------------------------------------------------------------------------- //

// document.getElementById("btn").addEventListener("click", function (event) {
//   event.preventDefault(); // 기본 폼 제출 방지

//   const userName = document.getElementById("userName").value;
//   const userId = document.getElementById("id").value;
//   const userPw = document.getElementById("pw").value;

//   if (userName && userId && userPw) {
//       localStorage.setItem("userId", userId); // 회원가입 후 자동 로그인
//       alert("회원가입 완료! 자동 로그인되었습니다.");
//       window.location.href = "index.html";
//   } else {
//       alert("모든 정보를 입력하세요.");
//   }
// });
