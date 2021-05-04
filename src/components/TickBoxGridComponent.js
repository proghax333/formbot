import GoogleFormComponent from './GoogleFormComponent.js';
import { join, getGridChoiceList } from '../utils/Utils';
import CheckBoxComponent from './CheckBoxComponent.js';
import InputModel from '../InputModel';

class TickBoxGridComponent extends GoogleFormComponent {
  constructor(data, model) {
    let list;
    if (data) {
      super(data);
      list = getGridChoiceList(this);
    } else if (model) {
      super();
      this.postSubmitIds = model.postSubmitIds;
      this.title = model.title;
      list = model.choices;
    } else {
      super();
      return;
    }

    this.model = InputModel({
      type: this.constructor.name,
      postSubmitId: null,
      title: this.title,
      value: null,
      children: list.map((item, index) => {
        return new CheckBoxComponent(null, {
          choices: item.choices,
          postSubmitIds: [this.postSubmitIds[index]],
          title: item.title,
        }).model;
      }),
    });

    console.log('----------  Tick Box Grid ----------');
    console.log(this.getPostData());
    console.log('------------------------------------------');
  }
  getPostData() {
    let temp = new CheckBoxComponent();
    let result = join(
      this.model.children.map((item) => {
        temp.model = item;
        return temp.getPostData();
      }),
      '&'
    );
    return result;
  }
}

export default TickBoxGridComponent;
