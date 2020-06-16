import React, { Component } from 'react';
import "./Contact.css";
import { API } from 'aws-amplify';
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            recaptcha: ''
        };
    }


    submitContact = async(event) => {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            
            var message = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }

            const myInit = {
                body: {
                    object: message
                }
            };

            var data = await API.post('simple', '/simple', myInit);
            console.log(data);
            if(data.message === "Success"){
                alert("Message sent successfully: Thank you!");
                this.setState({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert("Error sending message, please try again or contact thegrapevineguys@gmail.com directly!");
            }
        }
        else {
            alert("Please fill the text boxes below!");
        }
    }

    onChange = (value) => {
        this.setState({
            recaptcha: value
        });
        console.log("CAPTCHA VALUE: ", value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitContact} className="contact">

                    <div className="container">

                        <div className="csection">
                            <label><b>Name:</b></label>
                            <input name="name" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                        </div>

                        <div className="csection">
                            <label><b>Email:</b></label>
                            <input name="email" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                        </div>

                        <div className="csection">
                            <label><b>Message:</b></label>
                            <textarea name="message" type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                        </div>

                        <div className="csection">
                            <ReCAPTCHA sitekey="6Lftj6UZAAAAAN5XGsh0xouL1AVIR0RVR4bFYh8i" onChange={this.onChange} />
                        </div>

                        <div className="csection">
                            <label> </label>
                            <button type="submit" className="contact">Submit</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    };
}

export default Contact;