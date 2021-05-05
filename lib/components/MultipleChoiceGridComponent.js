import GoogleFormComponent from './GoogleFormComponent.js';
import { join, getGridChoiceList } from '../utils/Utils';
import InputModel from '../InputModel';
import MultipleChoiceComponent from './MultipleChoiceComponent.js';

class MultipleChoiceGridComponent extends GoogleFormComponent {
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
        return new MultipleChoiceComponent(null, {
          choices: item.choices,
          postSubmitIds: [this.postSubmitIds[index]],
          title: item.title,
        }).model;
      }),
    });
  }
  getPostData() {
    let temp = new MultipleChoiceComponent();
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

export default MultipleChoiceGridComponent;
