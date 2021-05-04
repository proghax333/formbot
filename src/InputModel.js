export class InputModelObject {
  constructor({ type, title, postSubmitId, value, children }) {
    this.type = type;
    this.postSubmitId = postSubmitId;
    this.title = title;
    this.value = value;
    this.children = children;
  }
}

export default function InputModel({ type, postSubmitId, title, value, children }) {
  return new InputModelObject({
    type,
    postSubmitId,
    title,
    value,
    children
  });
}
