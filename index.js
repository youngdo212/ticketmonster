function template(id, data){
  return `<li data-id='${id}' class="list_article sellect">
  <a href="#"></a>
  <div class="list_article_top">
      <p class="user_name ellipse">${data.sender}</p>
      <p class="send_date">${data.date}</p>
      <button class="btn_mail_delete"><span class="blind">삭제</span></button>
  </div>
  <div class="list_article_botton">
      <p class="mail_title ellipse">${data.title}</p>
  </div>
  <button type="button" class="btn_list_move"><span class="blind">이동버튼</span></button>
</li>`;
}

const listWrap = new ListWrap({
  template: template,
  dataset : aEmailData
})

const contentWrap = new ContentWrap();

const action = new Action({
  listWrap: listWrap,
  contentWrap: contentWrap
})