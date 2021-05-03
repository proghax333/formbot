
class GoogleFormComponent
{
  constructor(data)
  {
    this.title = data.title;
    this.postSubmitIds = data.postSubmitIds;
    this.jsonData = data.jsonData;
    this.componentData = data.componentData;
    this.value = "";
  }

  getPostData()
  {
    return '';
  }
}

export default GoogleFormComponent;