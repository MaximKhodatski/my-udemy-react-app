import './App.css';
import React, {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
 const [showModal, setShowModal] = useState(false)
 const [showEvents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([
  {title: "Max's birthday bash", id: 1},
  {title: "bowser's live stream", id: 2},
  {title: "race on moo moo farm", id: 3}
 ])

 console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
   console.log(id)
    
  }

  const handleClose = () => {
    setShowModal(false)
  }

const subtitle = "All the latest events in Maxiland"

  return (
    <div className="App">
      <Title title ="Events in Your Area" subtitle={subtitle} />
      {showEvents && (
      <div>
        <button onClick ={() => setShowEvents(false)}>Hide events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick ={() => setShowEvents(true)}>Show events</button>
      </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key = {event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete event</button>
        </React.Fragment>
      ) )}
      {showModal && <Modal handleCLose={handleClose}>
      <h2>Terms and Conditions</h2>
       <p>When reading information from my Telegram channel,
         you undertake to respect the opinion of the author 
         and the opinion of your interlocutors.</p>
         <a href='https://t.me/analyse_ua'>Find out more...</a>
      </Modal>}

<div>
  <button onClick={() => setShowModal(true)}>Show Modal</button>
  </div>

    </div>
  );
}

export default App;