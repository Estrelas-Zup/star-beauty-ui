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
    <div>
    </div>,

    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img className="navBarStarLogo" src="/images/Beauty.png" alt="" width="30" height="24" />
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/Home">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="/agendamentos">Meus Agendamentos </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/fazer-agendamento">Agendar</a>
              </li>
              <li class="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <FullCalendar
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
      />
    </div>
  );
}

export default Scheduling;