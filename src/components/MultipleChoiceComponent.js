import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils';

class MultipleChoiceComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = componentData[0][1].map(option => option[0]);
  }
  getPostData() {
    return getPostParam(this.postSubmitIds[0], this.value);
  }
}

export default MultipleChoiceComponent;
