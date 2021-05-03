import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils.js';
import * as Utils from '../utils/Utils';

class ShortAnswerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = Utils.getTextChoiceList(componentData);
  }
  getPostData() {
    return getPostParam(this.postSubmitIds[0], this.value);
  }
}

export default ShortAnswerComponent;
