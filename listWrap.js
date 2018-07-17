class ListWrap{
  constructor({template, dataset}){
    this.template = template;
    this.list = document.querySelector('.list_wrap');
    this.dataset = dataset.reduce((acc, data, idx) => (acc[idx+1] = data, acc), {}); // this.dataset은 dictionary 구조
    this.currentChild;
    this.render(this.dataset);    
  }
  render(dataset){
    for(let id in dataset){
      const data = dataset[id];
      this.list.insertAdjacentHTML('beforeend', this.template(id, data));
    }
  }
  contain(ele){
    return this.list.contains(ele)
  }
  remove(child){
    this.list.removeChild(child);
  }
  isCurrentChild(child){
    return this.currentChild === child;
  }
  highlight(child){
    this.currentChild ? this.currentChild.classList.remove('highlight') : null;
    child.classList.add('highlight');
  }
  getData(child){
    this.highlight(child);
    this.currentChild = child;

    const id = this.currentChild.dataset.id;
    
    return Object.assign({}, this.dataset[id]); // 자료의 수정이 일어나지 않도록 immutable하도록 변환
  }
}