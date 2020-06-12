import React, { Component } from 'react';
import "./Contact.css";
import Amplify, { API } from 'aws-amplify';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    

    apiName = 'restapi';
    path = '/backend';
    // myInit = {
    //     headers: {
    //         'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    // }

    submitContact = (event) => {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            // API.get(this.apiName, this.path).then(response => {
            //     console.log("in first THEN statement");
            //     return response.json();
            // })
            // .then(items => {
            //     console.log("in second THEN statement");
            //     alert(items.success);
            // })
            // .catch(err => {
            //     console.log(err);
            //     console.error(err);
            // });

            const data = API.get('restapi', '/simple');
            console.log(data);


        }
        else {
            alert("BLOCKED")
        }
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