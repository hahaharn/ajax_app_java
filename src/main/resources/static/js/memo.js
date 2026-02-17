function post() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    /* preventDefault()の対象をeとすることによりデフォルト側の
     「投稿ボタンをクリックした」という現象を無効化*/
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";  //レスポンスのデータフォーマットを指定
    XHR.send(formData); //フォームに入力された内容をサーバー側に送信
  });
};

window.addEventListener('load', post);