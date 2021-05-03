import GoogleFormComponent from './GoogleFormComponent';
import { collect, getPostParam } from '../utils/Utils.js';
import * as Utils from '../utils/Utils';

class DatePickerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
    
    this.choices = {
      year: 1970,
      month: 1,
      day: 1,
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

export default DatePickerComponent;
