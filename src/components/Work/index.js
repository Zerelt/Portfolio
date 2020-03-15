import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import AppTpe from 'assets/images/Red-TPE-App 128S 700H.png'
import WebTpe from 'assets/images/Red-TPE-Web 128S 700H.png'

import {
  WorkContainer,
  Project,
  ProjectImageContainer,
  ProjectImage,
  ProjectInfoContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectDescriptionSecondary,
  ProjectLiveWrapper,
  ProjectLive
} from './styles'

const projects = [
  {
    "title": "The Prospect Exchange",
    "description": "Professional hockey game analysis app that allows players to gain exposure and coaches to find new talent",
    "image": AppTpe,
    "live": "https://app.theprospectexchange.com",
    "secondaryDescription": {
      "mainTools": "React, styled components, Redux, React Router, REST API Calls, Git, Auth0",
      "otherTools": "Slack, Clubhouse, Zeplin, Sendgrid, Google cloud platform, Illustrator, Photoshop"
    }
  },
  {
    "title": "The Prospect Exchange",
    "description": "Marketing website for The Prospect Exchange with separate pages for Coaches and Player audiences",
    "image": WebTpe,
    "live": "https://www.theprospectexchange.com",
    "secondaryDescription": {
      "mainTools": "React, styled components, React Router, Git",
      "otherTools": "Slack, Clubhouse, Zeplin, Sendgrid, Drift, Google cloud platform, Illustrator, Photoshop"
    }
  },
  {
    "title": "Brain Armada",
    "description": "Anim eiusmod duis magna anim irure occaecat ex consectetur sit ullamco consequat ad ut ullamco.",
    "image": AppTpe,
    "live": "https://thebrainarmada.com",
    "secondaryDescription": {
      "mainTools": "React, styled components, React Router, REST API Calls, Git",
      "otherTools": "Slack, Google cloud platform, Illustrator"
    }
  }
]

const Work = ({ workRef, defaultTheme, projectOneTop, projectTwoTop, projectThreeTop, height }) => {


  const topDistancesArray = [projectOneTop, projectTwoTop, projectThreeTop]

  return (
    <WorkContainer ref={workRef}>
      {projects.map((project, id)=>{
        const projectVisible=topDistancesArray[id]<=height/2
        return(
          <Project key={id} projectVisible={projectVisible}>
            <ProjectImageContainer className={`imageContainer-${id}`}>
              <ProjectImage src={project.image} alt='Project image' />
            </ProjectImageContainer>
            <ProjectInfoContainer defaultTheme={defaultTheme}>
              <ProjectTitle className={`projectTitle-${id}`}>{project.title}</ProjectTitle>
              <ProjectDescription className={`projectDescription-${id}`}>{project.description}.</ProjectDescription>
              <ProjectDescriptionSecondary>
                <span className={`projectInfoTools-${id}`}>
                  <br />
                  Built with:
                  <br />
                  {project.secondaryDescription.mainTools}.
                </span>
                <span className={`projectInfoOther-${id}`}>
                  <br />
                  Other Tools:
                  <br />
                  {project.secondaryDescription.otherTools}.
                </span>
              </ProjectDescriptionSecondary>
              <ProjectLiveWrapper className={`projectLive-${id}`}>
                <ProjectLive href={project.live} target="_blank" rel="noopener noreferrer">
                  See Live
                </ProjectLive>
              </ProjectLiveWrapper>
            </ProjectInfoContainer>
          </Project>
        )
      })}
    </WorkContainer>
  )
}

Work.propTypes = {
  workRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  projectOneTop: PropTypes.number,
  projectTwoTop: PropTypes.number,
  projectThreeTop: PropTypes.number,
  height: PropTypes.number
}

export default hot(module)(Work)