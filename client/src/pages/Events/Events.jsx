import React from 'react'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import Typography from '@material-ui/core/Typography'
import EventCard from './EventsCard/EventCard'
import './Events.scss'

function Events() {
  const collection = useFirestore().collection('Events')
  const events = useFirestoreCollectionData(collection, { idField: 'id' }) // TODO: Change Const Name

  return (
    <div>
      <div className="EventsPage" style={{marginTop: "30px"}}>
        <Typography variant="h2" gutterBottom className="header">
          Events
        </Typography>
        <p style={{ fontSize: 20, marginLeft: 50 , marginTop: 14, textAlign: 'justify' }}>
          Check out our upcoming events
        </p>
        <div className="EventsCards">
          {events.map((event, i) => (
                  <EventCard
                      style={{ animationDelay: `${200 * i}ms` }}
                      event={event}
                      key={event.id}
                  />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Events
