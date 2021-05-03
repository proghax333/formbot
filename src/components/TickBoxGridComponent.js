import GoogleFormComponent from './GoogleFormComponent.js';
import { collect, getPostParam } from '../utils/Utils';
import * as Utils from '../utils/Utils';

class TickBoxGridComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = Utils.getGridChoiceList(componentData);
  }
  getPostData() {
    let result = this.choices.map((row) => {
      return row.choices.map((choice) => {
        return choice.isTicked ? getPostParam(row.postId, choice.value) : null;
      }).filter(str => str != null).join('&');
    }).filter(str => str.length > 0).join('&');

    //console.log(result);

    return result;
  }
}

export default TickBoxGridComponent;
