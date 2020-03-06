import { AppContainer } from 'react-hot-loader';
import React from 'react'
import { render } from 'react-dom'
import App from 'components/App'

render(<App />, document.getElementById('app'))

if(module.hot){
  module.hot.accept('./components/App', ()=> {

    const NextApp = require('./components/App').default; 
    
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );

  })
}