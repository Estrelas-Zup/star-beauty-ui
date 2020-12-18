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
        {/*  <FullCalendar
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'event 1', date: '2020-12-01' },
            { title: 'event 2', date: '2020-12-12' }
          ]}
          eventContent={renderEventContent}
          dateClick={handleDateClick}
        /> */}
      </div>
    </div>
  );
}

export default Scheduling;