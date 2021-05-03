
class GoogleFormComponent
{
  constructor(data)
  {
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
    this.value = "";
  }

  getPostData()
  {
    return '';
  }
}

export default GoogleFormComponent;