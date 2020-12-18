import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import 'moment/locale/pt-br';

function DateTimePicker(props) {
  return (
    <Datetime 
      onChange={props.onChange}
      className="date-time-picker"
      inputProps={{
        placeholder: 'Selecione uma data e hora'
      }}
      timeFormat
    />
  )
}

export default DateTimePicker;