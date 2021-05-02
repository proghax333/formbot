import GoogleFormComponent from './GoogleFormComponent.js';
import * as Utils from '../utils/Utils.js';

class TimeComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    this.time = {
      hour: 0,
      min: 0,
    };
  }
  getPostData() {
    let result = Utils.collect(
      this.time,
      (key, value) => {
        return `entry.${this.postSubmitIds[0]}_${key}=${value}`;
      },
      '&'
    );

    return result;
  }
}

export default TimeComponent;
