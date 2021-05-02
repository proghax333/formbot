import GoogleFormComponent from './GoogleFormComponent.js';
import * as Utils from '../utils/Utils.js';

class ShortAnswerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
  }
  getPostData() {
    return `entry.${this.postSubmitIds[0]}=${this.value}`;
  }
}

export default ShortAnswerComponent;
