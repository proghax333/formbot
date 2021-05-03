import GoogleFormComponent from './GoogleFormComponent';
import { collect, getPostParam } from '../utils/Utils.js';

class DatePickerComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
    this.date = {
      year: 1970,
      month: 1,
      day: 1,
    };
  }

  getPostData() {
    let result = collect(
      this.date,
      (key, value) => {
        return getPostParam(`${this.postSubmitIds[0]}_${key}`, value);
      }, '&'
    );
    return result;
  }
}

export default DatePickerComponent;
