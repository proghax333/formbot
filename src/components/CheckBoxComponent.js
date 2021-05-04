import GoogleFormComponent from './GoogleFormComponent.js';
import { join, getPostParam, getMultipleChoiceList } from '../utils/Utils.js';
import InputModel from '../InputModel';

class CheckBoxComponent extends GoogleFormComponent {
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
      title: this.title,
      postSubmitId: null,
      value: null,

      children: list.map((item) => {
        return InputModel({
          type: 'CheckBox',
          title: item.title,
          postSubmitId: this.postSubmitIds[0],
          value: {
            isTicked: item.isTicked,
          },
        });
      }),
    });

    console.log('---------- Check Box ----------');
    console.log(this.getPostData());
    console.log('---------------------------------');
  }

  getPostData() {
    let result = join(
      this.model.children
        .filter((item) => {
          return item.value.isTicked;
        })
        .map((item) => {
          return getPostParam(item.postSubmitId, item.title);
        }),
      '&'
    );
    return result;
  }
}

export default CheckBoxComponent;
