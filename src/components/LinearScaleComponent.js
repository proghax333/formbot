import GoogleFormComponent from './GoogleFormComponent.js';
import { getPostParam, getMultipleChoiceList } from '../utils/Utils';
import InputModel from '../InputModel';

class LinearScaleComponent extends GoogleFormComponent {
  constructor(data, model) {
    let list;
    if (data) {
      super(data);
      list = getMultipleChoiceList(this);
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
      postSubmitId: this.postSubmitIds[0],
      title: this.title,
      value: {
        current: -1,
      },
      children: list.map((item) => {
        return InputModel({
          type: 'RadioOption',
          postSubmitId: null,
          title: item.title,
          value: item.title,
          children: null,
        });
      }),
    });
  }
  getPostData() {
    const index = this.model.value.current;
    if (index == -1) return '';

    return getPostParam(
      this.model.postSubmitId,
      this.model.children[index].value
    );
  }
}

export default LinearScaleComponent;
