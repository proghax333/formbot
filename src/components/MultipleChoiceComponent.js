import GoogleFormComponent from './GoogleFormComponent.js';
import * as Utils from '../utils/Utils.js';

class MultipleChoiceComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);
    this.choices = [];
  }
  getPostData() {
    const choices = this.availableChoice.filter((choice) => {
      return choice.isTicked;
    });
    let result = '';
    if (choices.length !== 0) {
      let result = `entry.${this.postSubmitIds[0]}=${this.choices[0].value}`;
      for (let i = 1; i < choice.length; ++i) {
        result += `&entry.${this.postSubmitIds[0]}=${this.choices[i].value}`;
      }
    }
    return result;
  }
}

export default MultipleChoiceComponent;
