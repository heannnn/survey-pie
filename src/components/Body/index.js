import SelectionInput from '../SelectionInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;
  if (type === 'select') {
    InputComponent = SelectionInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }

  return (
    <div>
      <InputComponent answer={answer} setAnswer={setAnswer}></InputComponent>
    </div>
  );
}

export default Body;
