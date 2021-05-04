import GoogleFormComponent from './GoogleFormComponent';
import { join, getPostParam } from '../utils/Utils.js';
import InputModel from '../InputModel';

class DatePickerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    this.model = InputModel({
      type: this.constructor.name,
      postSubmitId: null,
      title: this.title,
      value: null,
      
      children: ['Year', 'Month', 'Day'].map((item) => {
        return InputModel({
          type: 'Input',
          postSubmitId: this.postSubmitIds[0] + '_' + item.toLowerCase(),
          title: item,
          value: {
            textValue: '0',
          },
          children: null
        });
      }),
    });
  }

  getPostData() {
    let result = join(
      this.model.children.map((item) => {
        return getPostParam(item.postSubmitId, item.value.textValue);
      }),
      '&'
    );
    return result;
  }
}

export default DatePickerComponent;
