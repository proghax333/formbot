import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils.js';

class TimeComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    this.time = {
      hour: 0,
      min: 0,
    };
  }
  getPostData() {
    let result = collect(
      this.time,
      (key, value) => {
        return getPostParam(`${this.postSubmitIds[0]}_${key}`, value);
      }, '&'
    );

    return result;
  }
}

export default TimeComponent;
