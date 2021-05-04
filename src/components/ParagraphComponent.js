import GoogleFormComponent from './GoogleFormComponent.js';
import { getPostParam } from '../utils/Utils.js';
import InputModel from '../InputModel'

class ParagraphComponent extends GoogleFormComponent {
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

    console.log('---------- Paragraph ----------');
    console.log(this.getPostData());
    console.log('---------------------------------');
  }

  getPostData() {
    return getPostParam(this.model.postSubmitId, this.model.value.textValue);
  }
}

export default ParagraphComponent;
