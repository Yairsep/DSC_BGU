import React from 'react'
import './ClubMemberCard.scss'
import {
  Avatar, CardContent, CardMedia,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {
  Facebook, Instagram, LinkedIn, Mail,
} from '@material-ui/icons'

const ClubMemberCard = (props) => {
  const { member } = props
  const {
    name, role, pic, facebook, instagram, linkedin, email,
  } = member
  return (
    <div className="ClubMemberCard">
      <CardMedia className="AvatarContainer">
        <Avatar alt={name} src={pic || '/dscLogo.png'} className="avatar" />
      </CardMedia>
      <CardContent className="content">
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="textSecondary" variant="h6" component="h3" className="role">
          {role}
        </Typography>
        <div className="socialRow">
          {facebook && (
          <a href={facebook} className="socialIcon">
            <Facebook />
          </a>
          )}
          {instagram && (
          <a href={instagram}>
            <Instagram className="socialIcon" />
          </a>
          )}
          {linkedin && (
          <a href={linkedin}>
            <LinkedIn className="socialIcon" />
          </a>
          )}
          {email && (
          <a href={`mailto:${email}`}>
            <Mail className="socialIcon" />
          </a>
          )}
        </div>
      </CardContent>
    </div>
  )
}

export default ClubMemberCard
