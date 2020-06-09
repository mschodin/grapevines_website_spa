import React, { Component } from 'react';
import "./Contact.css";
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';

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
    myInit = {
        headers: {},
        response: true
    }

    submitContact = (event) => {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            // fetch('/backend', {
            //     method: 'POST',
            //     credentials: 'include',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         item: this.state.requestItem,
            //         amount: this.state.requestAmount,
            //         location: this.state.requestLocation
            //     })
            // })
            //     .then(res => {
            //         if (res.status === 200) {
            //             alert("Request submitted!");
            //             this.updateDonationsAndRequests();
            //             this.setState({
            //                 requestAmount: '',
            //                 requestItem: '',
            //                 requestLocation: ''
            //             });
            //         } else {
            //             const error = new Error(res.error);
            //             throw error;
            //         }
            //     })
            //     .catch(err => {
            //         console.error(err);
            //         alert("Error submitting request, please try again");
            //         this.updateDonationsAndRequests();
            //     });



            // fetch('/backend', {
            //     method: 'GET',
            // })
            //     .then(res => {
            //         return res.json();
            //     })
            //     .then(items => {
            //         alert(items.success)
            //     })
            //     .catch(err => {
            //         console.log("/backend didnt work")
            //     });

            // fetch('https://0rmo0zh746.execute-api.us-east-2.amazonaws.com/dev/backend', {
            //     method: 'GET',
            // })
            //     .then(res => {
            //         return res.json();
            //     })
            //     .then(items => {
            //         alert(items.success)
            //     })
            //     .catch(err => {
            //         console.log("https://0rmo0zh746.execute-api.us-east-2.amazonaws.com/dev/backend didnt work")
            //     });

            API.get(this.apiName, this.path, this.myInit).then(response => {
                console.log("in first THEN statement");
                return response.json();
            })
            .then(items => {
                console.log("in second THEN statement");
                alert(items.success);
            })
            .catch(err => {
                console.log(err);
            });


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