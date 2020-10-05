import React from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import ClubSocialIcons from '../../components/ClubSocialIcons'
import Bubbles from '../../components/Bubbles/Bubbles'

function Home() {
  return (
    <div className="container">
      <h1 className="header">
        <b>
          BGU Developers Student Club
        </b>
      </h1>
      <div className="row">
        <div className="col-6">
          <div className="leftSide-col">
            <p style={{ fontSize: 20, marginTop: 14, textAlign: 'justify' }}>
              Developer Student Clubs are university based community
              groups for students interested in Google developer
              technologies. Students from all undergraduate or
              graduate programs with an interest in growing as a
              developer are welcome.
            </p>
            <br />
            <Link to="/Apply" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large" color="primary">
                Join DSC BGU
              </Button>
            </Link>
            <ClubSocialIcons />
          </div>
        </div>
        <div className="col-6">
          <div className="rightSide-col">
            <img alt="home_why" className="image" src="/pictures/content/home-why.png" />
          </div>
        </div>
      </div>
      <Bubbles />
    </div>
  )
}

export default Home
