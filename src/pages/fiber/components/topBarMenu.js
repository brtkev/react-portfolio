
import React from 'react';
import styles from '../styles/topBarMenu.module.css';



const buttonNames = [ 'Fiber', 'Community', 'Pricing', 'Features', 'Sign in', 'Sign up' ]

class Button extends React.Component {

    render(){

        return (
            <button className={this.props.className} onClick={this.props.onClick} >{this.props.text}</button>
        );
    };
}

class TopBarMenu extends React.Component {

    state = {
        responsiveMenuState : false,

    }

    menuToggle = (e) => {

        if(e.target.className === styles['button-hamburger'] || e.target === e.currentTarget ){
            this.setState( (state) => {
                return {responsiveMenuState : !state.responsiveMenuState};
            });
        }

    }

    responsiveMenu = () => {

        const mainContainerClass = () => {
            if(this.state.responsiveMenuState){
                return [styles["reponsive-menu"], styles["show-menu"]].join(' ');
            }else{
                return styles["reponsive-menu"];
            }
            
        };

        return(
            <div className={ mainContainerClass() } onClick={this.menuToggle} >
                <div id={styles['menu-container']} >
                    <Button text={buttonNames[1]} className={[styles["button"], styles['side-menu-button']].join(' ')} /> 
                    <Button text={buttonNames[2]} className={[styles["button"], styles['side-menu-button']].join(' ')} /> 
                    <Button text={buttonNames[3]} className={[styles["button"], styles['side-menu-button']].join(' ')} /> 
                    <Button text={buttonNames[4]} className={[[styles["button"], styles['side-menu-button']].join(' ')].join(' ')} /> 
                    <Button onClick={this.props.showSignup}
                    text={buttonNames[5]} className={[[styles["button"], styles['side-menu-button']].join(' '), styles["button-purple-style"]].join(' ')} /> 
                </div>
            </div>
        );
    }

    render(){


        return(
            <div className={styles["main-container"]}>
                <div className={styles["button-container"]}>
                    <Button text={buttonNames[0]} className={[styles["button"], styles["button-bold-text"]].join(' ')} /> 
                </div>
                
                <div className={[styles["button-container"], styles['hide-onMobile']].join(' ')} >
                    <Button text={buttonNames[1]} className={styles["button"]} /> 
                    <Button text={buttonNames[2]} className={styles["button"]} /> 
                    <Button text={buttonNames[3]} className={styles["button"]} /> 
                </div> 

                <div className={[styles["button-container"], styles['hide-onMobile']].join(' ')}>
                    <Button text={buttonNames[4]} className={[styles["button"], styles["button-bold-text"]].join(' ')} /> 
                    <Button onClick={this.props.showSignup}
                    text={buttonNames[5]} className={[styles["button"], styles["button-bold-text"], styles["button-purple-style"]].join(' ')} /> 
                </div>
                
                <div className={[styles["button-container"], styles['show-onMobile']].join(' ')} id={styles['hamburger-container']} >
                    <img onClick={this.menuToggle} 
                    className={styles["button-hamburger"]} src={require("../Assets/Hamburger Menu.svg").default} alt="hamburguer button" />
                </div>

                {this.responsiveMenu()}
            </div>
        );
    };
}

export default TopBarMenu;