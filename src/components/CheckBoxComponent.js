import GoogleFormComponent from './GoogleFormComponent.js';

class CheckBoxComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = componentData[0][1].map(option => option[0]);
  }
  getPostData() {
    let result = `entry.${this.postSubmitIds[0]}=${this.value}`;
    return result;
  }
}

export default CheckBoxComponent;
