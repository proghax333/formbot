
class GoogleFormComponent
{
  constructor(data)
  {
    this.title = data.title;
    this.postSubmitIds = data.postSubmitIds;
    this.componentData = data.componentData;
    this.value = "";
  }

  getPostData()
  {
    return '';
  }
}

export default GoogleFormComponent;