import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import AppTpe from 'assets/images/Red-TPE-App 128S 700H.png'
import WebTpe from 'assets/images/Hockey player - 800H.png'
import BrainArmada from 'assets/images/Red-Brain Armada 128s 700H preview.png'
import { DecorationRotated } from 'assets/theme/decoration'

import {
  WorkContainer,
  Project,
  ProjectImageContainer,
  ProjectImage,
  DecorationContainer,
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
    "description": "Professional hockey game analysis web app that allows players to gain exposure and coaches to find talent",
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
      "mainTools": "Javascript, React, styled components, React Router, Git",
      "otherTools": "Slack, Clubhouse, Zeplin, Sendgrid, Drift, Google cloud platform, Illustrator, Photoshop"
    }
  },
  {
    "title": "Brain Armada",
    "description": "MVP for an app that facilitates the usage of Amazon's Mechanical Turk to organize almost any type of text, audio and video data and more",
    "image": BrainArmada,
    "live": "",
    "secondaryDescription": {
      "mainTools": "React, styled components, React Router, REST API Calls, Git",
      "otherTools": "Slack, Firebase, Illustrator"
    }
  }
]

const Work = ({ workRef, defaultTheme, projectOneTop, projectTwoTop, projectThreeTop, height }) => {


  const topDistancesArray = [projectOneTop, projectTwoTop, projectThreeTop]

  return (
    <WorkContainer ref={workRef}>
      {projects.map((project, id)=>{
        const projectVisible=topDistancesArray[id]<=height/2
        const linkProps = project.live === "" ? { as: "span" } : { href: project.live, target: "_blank", rel: "noopener noreferrer" }
        return(
          <Project key={id} projectVisible={projectVisible}>
            <ProjectImageContainer defaultTheme={defaultTheme} className={`imageContainer-${id}`}>
              <ProjectImage src={project.image} alt='Project image' />
              <DecorationContainer>
                <DecorationRotated className={`decoration-${id}`} />
                <DecorationRotated className={`decoration-${id}`} />
              </DecorationContainer>
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
                <ProjectLive {...linkProps}>
                  {id===2 ? 'Coming Soon' : 'See live'}
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