import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils.js';
import * as Utils from '../utils/Utils';

class TimeComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    this.choices = {
      hour: 0,
      min: 0,
    };
  }
  getPostData() {
    let result = collect(
      this.choices,
      (key, value) => {
        return getPostParam(`${this.postSubmitIds[0]}_${key}`, value);
      }, '&'
    );

    return result;
  }
}

export default TimeComponent;
