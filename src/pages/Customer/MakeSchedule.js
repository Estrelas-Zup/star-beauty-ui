function MakeSchedule() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img className="navBarStarLogo" src="/images/Beauty.png" alt="" width="30" height="24" />
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/agendamentos">Meus Agendamentos </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="/fazer-agendamento">Agendar</a>
              </li>
              <li class="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>fazer agendamento</h1>
    </div>
  )
}

export default MakeSchedule;