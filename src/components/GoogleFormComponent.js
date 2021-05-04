class GoogleFormComponent {
  constructor(data) {
    if (data) {
      const component = data.jsonData;
      const title = component[1];
      const type = component[3];
      const componentData = component[4];
      const jsonData = component;
      const postSubmitIds = componentData.map((x) => x[0]);

      this.title = title;
      this.type = type;
      this.postSubmitIds = postSubmitIds;
      this.jsonData = jsonData;
      this.componentData = componentData;
    }
    this.data = data;
    this.value = '';
  }

  getPostData() {
    return '';
  }
  getComponentObject() {
    return {
      type: this.constructor.name,
      title: this.title,
      postSubmitIds: this.postSubmitIds,
      choices: this.choices,
    };
  }
}

export default GoogleFormComponent;
