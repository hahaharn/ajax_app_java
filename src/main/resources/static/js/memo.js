const buildHTML = (XHR) => {
  const item = XHR.response;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.createdAt}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      return html;
};

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
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.response.error}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content")
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);