import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import OceanStars from 'assets/images/OceanStars.jpg'
import SonyRedesign from 'assets/images/SonyRedesign.jpg'
import AmurLeopard from 'assets/images/AmurLeopard.jpg'

import {
  DesignsContainer,
  HeadlineContainer,
  HeadlineSm,
  HeadlineLgContainer,
  HeadlineLg,
  HeadlineHighlight,
  DesignProjects,
  DesignProjectItem,
  PreviewContainer,
  Preview,
  Quote,
  QuoteText,
  QuoteAuthor
} from './styles'


const designProjects = [
  {
    "image": OceanStars,
    "alt": "Luxury yacht membership concept"
  },
  {
    "image": SonyRedesign,
    "alt": "Sony Redesign design concept"
  },
  {
    "image": AmurLeopard,
    "alt": "Amur Leopard charity website concept"
  }
]

const Designs = ({ designsRef, defaultTheme, height, designTextTop, designProjectOneTop, designProjectTwoTop, designProjectThreeTop, quoteDesign }) => {

  const designProjectTopArray = [designProjectOneTop, designProjectTwoTop, designProjectThreeTop]

  return(
    <DesignsContainer ref={designsRef} defaultTheme={defaultTheme} height={height}>
      <HeadlineContainer>
        <div>
          <HeadlineSm
            height={height}
            designTextTop={designTextTop}>
            <span />
            Not just a coder
          </HeadlineSm>
          <HeadlineLgContainer
            height={height}
            designTextTop={designTextTop}>
            <span />
            <HeadlineLg>
              but also a <br />
              <HeadlineHighlight>
                certified <br className='lineBreak' /> UX designer
              </HeadlineHighlight>
            </HeadlineLg>
          </HeadlineLgContainer>
        </div>
      </HeadlineContainer>

      <DesignProjects defaultTheme={defaultTheme}>
        {
          designProjects.map((designProject,id)=>{
            const designProjectVisible = designProjectTopArray[id]<=height*.75
            return(
              <DesignProjectItem 
                designProjectVisible={designProjectVisible}
                key={`design-${id}`} defaultTheme={defaultTheme}>
                <PreviewContainer designProjectVisible={designProjectVisible}>
                  <Preview src={designProject.image} alt={designProject.alt} />
                </PreviewContainer>
              </DesignProjectItem>
            )
          })
        }
      </DesignProjects>

      <Quote defaultTheme={defaultTheme}>
        <QuoteText height={height} quote={quoteDesign}>
          <span>&#8220;</span>I think his dedication, diligence, good eye for design, and solid code 
          will be a great addition to any project, and I'm interested in seeing 
          where he will go next!<span>&#8222;</span>
        </QuoteText>
        <QuoteAuthor height={height} quote={quoteDesign}>
          Fabio Santos, Sr Software Engineer
        </QuoteAuthor>
      </Quote>

    </DesignsContainer>
  )
}

Designs.propTypes = {
  designsRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  height: PropTypes.number,
  designTextTop: PropTypes.number,
  designProjectOneTop: PropTypes.number,
  designProjectTwoTop: PropTypes.number,
  designProjectThreeTop: PropTypes.number,
  quoteDesign: PropTypes.number
}

export default hot(module)(Designs)