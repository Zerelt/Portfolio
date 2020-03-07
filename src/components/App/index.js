import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-cbx';
import smoothscroll from 'smoothscroll-polyfill';
import SideElements from 'components/SideElements';
import Home from 'components/Home';
import About from 'components/About';
import Designs from 'components/Designs';
import Work from 'components/Work';
import Contact from 'components/Contact';
import LightOrDark from 'components/LightOrDark'

import COLORS from 'assets/theme/colors';
import {
  GlobalStyles,
  Main
} from './styles'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultTheme: false, // true = black
      currentPage: '',

      height: window.innerHeight,
      width: window.innerWidth,

      infoOneTop: null,
      projectOneTop: null,
      projectTwoTop: null,
      projectThreeTop: null,

      designTextTop: null,
      designCarouselTop: null,

      contactHeadlineTop: null,
      nameFieldTop: null,
      emailFieldTop: null,
      messageFieldTop: null
    }


    // this way of using refs exists too
    this.setInfoRef = this.setInfoOneRef
  }

  
  componentDidMount() {
    smoothscroll.polyfill();

    const { defaultTheme } = this.state
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    
    const color = defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE;
    document.body.style.backgroundColor=color
    
    this.handleSidebar()
  }
    
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  setInfoOneRef=(el) => {
    this.infoOne = el;
  }

  handleTheme = (status) => {
    const { defaultTheme } = this.state
    if (status!==defaultTheme) {
      this.setState({ defaultTheme: status },()=>{
        const bgColor = defaultTheme ? COLORS.WHITE : COLORS.DARKBLACK;
        document.body.style.backgroundColor=bgColor
      })
    }
  }
  
  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  
  handleScroll = () => {
    const infoOneTopValue = this.infoOne.getBoundingClientRect().top

    const projectOneTop = this.workSection.children[0].getBoundingClientRect().top
    const projectTwoTop = this.workSection.children[1].getBoundingClientRect().top
    const projectThreeTop = this.workSection.children[2].getBoundingClientRect().top

    const designTextTop = this.designsSection.children[0].getBoundingClientRect().top
    const designCarouselTop = this.designsSection.children[1].getBoundingClientRect().top

    const contactHeadlineTop = this.contactSection.children[0].getBoundingClientRect().top
    const nameFieldTop = this.contactSection.children[1].children[1].children[0].children[0].getBoundingClientRect().top
    const emailFieldTop = this.contactSection.children[1].children[1].children[0].children[1].getBoundingClientRect().top
    const messageFieldTop = this.contactSection.children[1].children[1].children[1].getBoundingClientRect().top
    
    this.setState({
      infoOneTop: infoOneTopValue,
      projectOneTop,
      projectTwoTop,
      projectThreeTop,
      designTextTop,
      designCarouselTop,
      contactHeadlineTop,
      nameFieldTop,
      emailFieldTop,
      messageFieldTop
    })

    this.handleSidebar()
  }

  handleSidebar = () =>{
    const { height } = this.state
    const home = this.homeSection.getBoundingClientRect().top
    const about = this.aboutSection.getBoundingClientRect().top
    const work = this.workSection.getBoundingClientRect().top
    const designs = this.designsSection.getBoundingClientRect().top
    const contact = this.contactSection.getBoundingClientRect().top

    if(home<=height/3 && about>height/3) {
      this.setState({
        currentPage: 'home'
      })
    }
    if(about<=(height/3) && work>height/3 ) {
      this.setState({
        currentPage: 'about'
      })
    } 
    if (work<=(height/3) && designs>height/3) {
      this.setState({
        currentPage: 'work'
      })
    } 
    if (designs<=(height/3) && contact>height/3) {
      this.setState({
        currentPage: 'designs'
      })
    } 
    if(contact<=(height/3)) {
      this.setState({
        currentPage: 'contact'
      })
    } 

  }

  handleNavClick=(x) => {
    const home = this.homeSection
    const about = this.aboutSection
    const work = this.workSection
    const designs = this.designsSection
    const contact = this.contactSection
    if (x==='home') {home.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='about') {about.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='work') {work.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='designs') {designs.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='contact') {contact.scrollIntoView({ block: 'start', behavior: 'smooth' });}
  }

  render() {
    
    const {
      infoOneTop, height, width,
      defaultTheme, currentPage, 
      projectOneTop, projectTwoTop, projectThreeTop,
      designTextTop,designCarouselTop,
      contactHeadlineTop, nameFieldTop, emailFieldTop, messageFieldTop
    } = this.state
      return (
        <Scrollbars
          style={{ marginBottom: '-30px' }}
          onScroll={this.handleScroll}
          renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
          renderTrackVertical={props => <div {...props} className="track-vertical" />}>
          <Main defaultTheme={defaultTheme}>
            <SideElements 
              defaultTheme={defaultTheme}
              currentPage={currentPage} 
              width={width}
              handleTheme={this.handleTheme}
              handleNavClick={this.handleNavClick} 
            />
            <LightOrDark 
              defaultTheme={defaultTheme}
              handleTheme={this.handleTheme}
            />
            <Home 
              homeRef={el => {this.homeSection = el}}
              handleNavClick={this.handleNavClick}
              defaultTheme={defaultTheme} 
            />
            <About 
              defaultTheme={defaultTheme}
              infoOneTop={infoOneTop}
              height={height}
              aboutRef={el => {this.aboutSection = el}}
              setInfoOneRef={this.setInfoRef} 
            />
            <Work 
              workRef={el => {this.workSection = el}}
              height={height}
              projectOneTop={projectOneTop}
              projectTwoTop={projectTwoTop}
              projectThreeTop={projectThreeTop}
              defaultTheme={defaultTheme} 
            />
            <Designs 
              designsRef={el => {this.designsSection = el}}
              height={height}
              defaultTheme={defaultTheme} 
              designTextTop={designTextTop}
              designCarouselTop={designCarouselTop}
            />
            <Contact 
              defaultTheme={defaultTheme}
              contactRef={el => {this.contactSection = el}}
              height={height}
              contactHeadlineTop={contactHeadlineTop}
              nameFieldTop={nameFieldTop}
              emailFieldTop={emailFieldTop}
              messageFieldTop={messageFieldTop} 
            />
          </Main>
          <GlobalStyles defaultTheme={defaultTheme} />
        </Scrollbars>
        )
      }
}

export default App