import GoogleFormComponent from './GoogleFormComponent.js';
import { getPostParam } from '../utils/Utils.js';
import InputModel from '../InputModel'

class ShortAnswerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
    this.model = InputModel({
      type: 'Input',
      postSubmitId: this.postSubmitIds[0],
      title: this.title,
      value: {
        textValue: '',
      },
      children: null
    });
  }

  getPostData() {
    return getPostParam(this.model.postSubmitId, this.model.value.textValue);
  }
}

export default ShortAnswerComponent;
