import React from 'react';

import styles from './styles/fiber.module.css';

import TopBarMenu from './components/topBarMenu';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Footer from './components/footer';
import Signup from './components/signup';

class Fiber extends React.Component {

  constructor(){
    super()
    this.state = {
      signup : false
    }
  }

  showSignup = () => {

    this.setState( (state) => {
      return {signup : !state.signup};
    });
  }

  componentDidMount = () => {
    document.body.classList.add(styles['scrollbar']);
  }
  
  componentWillUnmount = () => {
    document.body.classList.remove(styles['scrollbar']);
  }
  
  render(){
    return (
      <div  >
          { this.state.signup ? <Signup close={this.showSignup} /> : undefined}
          <TopBarMenu  showSignup={this.showSignup} />
          <Section1 />
          <Section2 />
          <Footer />
      </div>
    );
  }
}

export default Fiber;
