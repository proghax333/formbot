import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils';
import * as Utils from '../utils/Utils';

class MultipleChoiceComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = Utils.getMultipleChoiceList(componentData);
  }
  getPostData() {
    return getPostParam(this.postSubmitIds[0], this.value);
  }
}

export default MultipleChoiceComponent;
