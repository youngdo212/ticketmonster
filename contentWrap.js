class ContentWrap{
  constructor(){
    this.contentTop = document.querySelector('.content_top');
    this.sender = this.contentTop.children[0];
    this.date = this.contentTop.children[1];
    this.title = this.contentTop.children[2];
    this.content = document.querySelector('.content_bottom');
  }
  showContent(data){
    this.sender.textContent = data.sender;
    this.date.textContent = data.date;
    this.title.textContent = data.title;
    this.content.textContent = data.content;
  }
}