import ShortAnswerComponent from '../components/ShortAnswerComponent';
import ParagraphComponent from '../components/ParagraphComponent';
import RadioBoxComponent from '../components/RadioBoxComponent';
import MultipleChoiceComponent from '../components/MultipleChoiceComponent';
import CheckBoxComponent from '../components/CheckBoxComponent';
import DropDownComponent from '../components/DropDownComponent';
import LinearScaleComponent from '../components/LinearScaleComponent';
import MultipleChoiceGridComponent from '../components/MultipleChoiceGridComponent';
import TickBoxGridComponent from '../components/TickBoxGridComponent';
import DatePickerComponent from '../components/DatePickerComponent';
import TimeComponent from '../components/TimeComponent';

export default function FormComponentFactory(data) {
  const type = data.type;
  switch (type) {
    case 0:
      return new ShortAnswerComponent(data);
    case 1:
      return new ParagraphComponent(data);
    case 2:
      return new MultipleChoiceComponent(data);
    case 3:
      return new DropDownComponent(data);
    case 4:
      return new CheckBoxComponent(data);
    case 5:
      return new LinearScaleComponent(data);
    case 7: {
      const inner = data.componentData[0];
      const isTickBoxGrid = inner[inner.length - 1][0];

      if(isTickBoxGrid) {
        return new TickBoxGridComponent(data);
      } else {
        return new MultipleChoiceGridComponent(data);
      }
    }
    case 9:
      return new DatePickerComponent(data);
    case 10:
      return new TimeComponent(data);
  }
  return null;
}
