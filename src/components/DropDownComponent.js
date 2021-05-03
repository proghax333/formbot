import GoogleFormComponent from './GoogleFormComponent.js';

class DropDownComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.choices = componentData[0][1].map(option => option[0]);
  }
  getPostData() {
    return `entry.${this.postSubmitIds[0]}=${this.value}`;
  }
}

export default DropDownComponent;
