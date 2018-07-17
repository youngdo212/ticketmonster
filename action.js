class Action{
  constructor({listWrap, contentWrap}){
    this.listWrap = listWrap;
    this.contentWrap = contentWrap;
    this.init();
  }
  init(){ // 조금 더 추상화, 조금 더 작은 단위에 이벤트를 달아보자, 하나로 합칠 수도
    document.addEventListener('click', this.removeChild.bind(this)); // 순서의 문제
    document.addEventListener('click', this.showContent.bind(this));
    const initialData = this.listWrap.getData(this.listWrap.list.firstElementChild);  // 어색하다. content 초기화를 시키기 위해 인위적으로 showContent 메소드를 호출했다.
    this.contentWrap.showContent(initialData); //10-11과 29,30의 중복, this.showContent(evt.target)만 이용해도 될듯
  }
  removeChild(evt){
    const target = evt.target;
    
    if(target.className !== 'btn_mail_delete') return;

    this.listWrap.remove(target.closest('li'));
  }
  showContent(evt){ // 이름 비슷함
    const li = evt.target.closest('li');

    if(!li) return;

    if(!this.listWrap.contains(li)) return; // 인터페이스를 이용하도록

    if(this.listWrap.isCurrentChild(li)) return; // 23, 25,27 를 합쳐서 isValidElement로

    const data = this.listWrap.getData(li); // data는 {sender, date, title, content}의 형태
    this.contentWrap.showContent(data);
  }
}
// 캡슐화나 외존성, 인터페이스에 대해서 좀 더 고민하자
// view 관련된 질문