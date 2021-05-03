import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils.js';

class ShortAnswerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
  }
  getPostData() {
    return getPostParam(this.postSubmitIds[0], this.value);
  }
}

export default ShortAnswerComponent;
