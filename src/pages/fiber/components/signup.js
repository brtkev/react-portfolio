import React from 'react';
import styles from'../styles/signup.module.css';

const formInputsTemplate = [
    {
        text: 'Your Name',
        placeholder: 'John Doe',
        type: 'text'
    }, 
    {
        text: 'E-mail',
        placeholder: 'john@example.com',
        type: 'email'
    },
    {
        text: 'Password',
        placeholder: 'At least 8 characteres',
        type: 'password'
    }
]


class FormInput extends React.Component{

    render(){
        return(
            <label className={styles['form__input']} >
                <p className={styles['input-text']}>{this.props.inputText}</p>
                <input className={styles['input']} type={this.props.type} placeholder={this.props.placeholder} />
            </label>
        );
    }
}

class SignupForm extends React.Component{

    render(){

        const inputs = formInputsTemplate.map( (input, index) => {
                
            return(
                <FormInput key={'Input'+index} inputText={input.text} placeholder={input.placeholder} type={input.type} />
            )
        });

        return(
            <form id={styles['form__container']}>
                {inputs}
                <p id={styles['form__terms-text']}>By creating an account on Fiber, you agree to the <a href='#0' >Terms & Conditions</a>.</p>
                <input id={styles['form__button']} type='submit' value='Create Fiber Account' />
                
            </form>
        );
    }
}

class Signup extends React.Component{

    componentDidMount(){
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount(){
        document.body.style.overflow = "auto";
    }

    closeComponent = (e) => {
        if(e.target === e.currentTarget){
            this.props.close();
        }
    }

    render(){

        return(
            <div id={styles['page-container']} onClick={this.closeComponent} >
                <div id={styles['main-container']}>
                    <div className={styles['main-container__sec-container']} id={styles['form']} >
                        <h3 id={styles['form__page-name']}>Fiber</h3>
                        <h2 id={styles['form__title']}>Create your Fiber account</h2>
                        <SignupForm />
                        <p id={styles['signin-text']} >Already have an account? <a id={styles['signin-a']} href='#0'>Sign in</a></p>
                    </div>


                    <div className={styles['main-container__sec-container']} id={styles['display']} >
                        <img id={styles['display-image']} src={require("../Assets/Sign Up Image.png").default} alt="sign up" />
                        <h3>Unparalleled Templates</h3>
                        <p>Crafted by a team of professional designers, our templates are eunparalleled in the market.</p>
                        <div id={styles['display-list']}>
                            <div className={styles['display-list-item']}></div>
                            <div className={[styles['display-list-item'], styles['display-list-item-dimmed']].join(' ')}></div>
                            <div className={[styles['display-list-item'], styles['display-list-item-dimmed']].join(' ')}></div>
                            <div className={[styles['display-list-item'], styles['display-list-item-dimmed']].join(' ')}></div>
                        </div>
                    </div>
                </div>

                <button onClick={this.closeComponent} id={styles['button-exit'] }>X</button>
            </div>
                
        );
    }
}


export default Signup;