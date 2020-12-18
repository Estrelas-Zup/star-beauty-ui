import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Navbar from '../../../core/components/Navbar'

function Scheduling() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <b>{eventInfo.event.title}</b>
      </>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>MEUS AGENDAMENTOS</h3>

        {/*
  // const names = [
  //   {
  //     id: 1,
  //     name: 'name 1'
  //   },
  //   {
  //     id: 2,
  //     name: 'name 2'
  //   },
  //   {
  //     id: 3,
  //     name: 'name 3'
  //   }
  // ];

  // https://pt-br.reactjs.org/docs/lists-and-keys.html
  {names.map(item =>
    <h1 key={item.id}>{item.name}</h1>
  )} */}

      </div>
    </div>
  );
}

export default Scheduling;