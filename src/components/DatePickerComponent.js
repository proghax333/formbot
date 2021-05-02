import GoogleFormComponent from './GoogleFormComponent';
import * as Utils from '../utils/Utils';

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
    let result = Utils.collect(
      this.date,
      (key, value) => {
        return `entry.${this.postSubmitIds[0]}_${key}=${value}`;
      },
      '&'
    );

    return result;
  }
}

export default DatePickerComponent;
