import GoogleFormComponent from './GoogleFormComponent.js';
import { getPostParam } from '../utils/Utils.js';
import * as Utils from '../utils/Utils';

class CheckBoxComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = Utils.getMultipleChoiceList(componentData);
  }
  getPostData() {
    let result = getPostParam(this.postSubmitIds[0], this.value);
    return result;
  }
}

export default CheckBoxComponent;
