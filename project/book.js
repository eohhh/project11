let cnt = 1;

function a() {
  let writer = f.writer.value;
  let pwd = f.pwd.value;
  let content = f.content.value;
  let el = mkDiv(writer, pwd, content);
  let list = document.getElementById("list");
  list.appendChild(el);
  f.writer.value = "";
  f.pwd.value = "";
  f.content.value = "";
}

function mkDiv(writer, pwd, content) {
  let newDiv = document.createElement("div");
  newDiv.id = "d_" + cnt;
  newDiv.pwd = pwd;
  let html = "";
  html += "작성자: <span id='w_" + cnt + "'>" + writer + "</span><br/>";
  html += "내용: <span id='c_" + cnt + "'>" + content + "</span><br/>";
  // html += "<input type='button' value='수정' onclick='editForm(" + cnt + ")'>";
  html += "<input type='button' value='삭제' onclick='del(" + cnt + ")'>";
  newDiv.innerHTML = html;
  cnt++;
  return newDiv;
}

function editForm(cnt) {
  console.log(cnt)
  let editDiv = document.getElementById("d_" + cnt);
  let editForm = document.getElementById("editf");
  let writer = document.getElementById("w_" + cnt).innerHTML;
  let content = document.getElementById("c_" + cnt).innerHTML;
  document.getElementById("editwriter").value = writer;
  document.getElementById("editcontent").value = content;
  document.getElementById("editbtn").cnt = cnt;
  editForm.style.display = '';
  document.body.appendChild(editForm); // append back to body
}

function cancel() {
  let editForm = document.getElementById("editf");
  editForm.style.display = 'none';
  document.body.appendChild(editForm); // append back to body
}

function edit() {
  let cnt = document.getElementById("editbtn").cnt;
  let editDiv = document.getElementById("d_" + cnt);
  let pwd2 = document.getElementById("editpwd").value;
  if (editDiv.pwd != pwd2) {
    alert("비밀번호를 확인하세요.");
  } else {
    let newWriter = document.getElementById("editwriter").value;
    let newContent = document.getElementById("editcontent").value;
    document.getElementById("w_" + cnt).innerHTML = newWriter;
    document.getElementById("c_" + cnt).innerHTML = newContent;
  }
  cancel();
}

function del(cnt) {
  let pwd = prompt("글 비밀번호");
  let delDiv = document.getElementById("d_" + cnt);
  if (pwd == delDiv.pwd) {
    document.getElementById("list").removeChild(delDiv);
  } else {
    alert("비밀번호를 확인하세요.");
  }
}