import React, { Component } from "react";
import { Row, Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './login.css';
import LoginContent from './LoginContent';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './validator';
import{Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.username)) {
            errors.username = "User name can't be blank";
        } 

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if(errors === true){
          //alert("You are successfully signed in...");
          window.location.href = '/landingpage';

            //
            //window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
		<div className="outer">
		<LoginContent/>
            <div className="login">
				<div className="Commant-text">Command Center Login</div>
                <Row>
                    <form onSubmit={this.login}>
                        <FormGroup controlId="username" validationState={ formSubmitted ? (errors.username ? 'error' : 'success') : null }>
                            <div className="lefttext">USERNAME</div>
                            <FormControl type="text" name="username" className="inputclass" placeholder="USERNAME" onChange={this.handleInputChange} />
                        { errors.username &&
                            <HelpBlock>{errors.username}</HelpBlock>
                        }
                        </FormGroup >
                        <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                            <div className="lefttext">PASSWORD</div>
                            <FormControl type="password" name="password" className="inputclass" placeholder="PASSWORD" onChange={this.handleInputChange} />
                        { errors.password &&
                            <HelpBlock>{errors.password}</HelpBlock>
                        }
                        </FormGroup>
						<div className="checkbox leftalign"><input type="checkbox" className="ckeckboxclass" name="remember"/><span className="remmember"> Remember me</span></div>
                        <Button type="submit" className="loginbutton">Login</Button>
                    </form>
                </Row>
            </div>
			</div>
        )
    }
}

export default Login;
