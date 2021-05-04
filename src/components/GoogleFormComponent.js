class GoogleFormComponent {
  constructor(data) {
    if (data) {
      const component = data.jsonData;
      const title = component[1];
      const type = component[3];
      const componentData = component[4];
      const postSubmitIds = componentData.map((x) => x[0]);

      this.title = title;
      this.type = type;
      this.postSubmitIds = postSubmitIds;
      this.componentData = componentData;
    }
    this.value = '';
    this.model = null;
  }

  getPostData() {
    return '';
  }
  getModel() {
    return this.model;
  }
  getComponentObject() {
    return {
      type: this.constructor.name,
      title: this.title,
      postSubmitIds: this.postSubmitIds,
      model: this.model
    };
  }
}

export default GoogleFormComponent;
