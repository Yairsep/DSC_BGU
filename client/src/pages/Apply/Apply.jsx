import React from 'react'
import Typography from '@material-ui/core/Typography'
import ApplicationStepper from './Appliction/AttemptApplication'

function Apply() {
  return (
    <div style={{marginTop: "30px"}}>
      <Typography variant="h2" gutterBottom className="header">
        Club Member Application
      </Typography>
      <ApplicationStepper />
    </div>
  )
}

export default Apply
