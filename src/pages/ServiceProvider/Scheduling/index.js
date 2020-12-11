import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

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
    <div className="container">
      <FullCalendar
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={[
          { title: 'event 1', date: '2020-12-01' },
          { title: 'event 2', date: '2020-12-12' }
        ]}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default Scheduling;