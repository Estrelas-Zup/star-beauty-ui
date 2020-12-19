import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import 'moment/locale/pt-br';

function DateTimePicker(props) {
  return (
    <Datetime 
      onChange={props.onChange}
      className="date-time-picker dateTimePickerStyle"
      inputProps={{
        placeholder: 'Selecione a data e hora do agendamento'
      }}
      timeFormat
    />
  )
}

export default DateTimePicker;