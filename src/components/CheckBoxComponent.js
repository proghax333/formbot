import GoogleFormComponent from './GoogleFormComponent.js';
import { getPostParam } from '../utils/Utils.js';

class CheckBoxComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = componentData[0][1].map(option => option[0]);
  }
  getPostData() {
    let result = getPostParam(this.postSubmitIds[0], this.value);
    return result;
  }
}

export default CheckBoxComponent;
