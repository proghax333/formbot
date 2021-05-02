import GoogleFormComponent from './GoogleFormComponent.js';
import * as Utils from '../utils/Utils.js';

class LinearScaleComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
  }
  getPostData() {
    return `entry.${this.postSubmitIds[0]}=${this.value}`;
  }
}

export default LinearScaleComponent;
