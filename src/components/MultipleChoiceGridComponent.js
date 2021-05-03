import GoogleFormComponent from './GoogleFormComponent.js';

class MultipleChoiceGridComponent extends GoogleFormComponent {
  constructor(data) {
    super(data);

    const componentData = this.componentData;
    this.options = [];

    componentData.forEach((option) => {
      const row = option[3][0];
      const postId = option[0];
      const columns = option[1];

      this.options.push({
        postId,
        row: row,
        columns: columns.map((column) => {
          return {
            isTicked: false,
            value: column[0]
          };
        })
      });
    })
  }
  getPostData() {
    let result = this.options.map((row) => {
      return row.columns.map((column) => {
        return !column.isTicked ? `entry.${row.postId}=${column.value}` : null;
      }).filter(str => str != null).join('&');
    }).filter(str => str.length > 0).join('&');

    //console.log(result);

    return result;
  }
}

export default MultipleChoiceGridComponent;
