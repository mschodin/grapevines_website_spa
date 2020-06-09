import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    submitContact = (event) => {
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



            fetch('/backend', {
                method: 'GET',
                credentials: 'include',
            })
                .then(res => {
                    return res.json();
                })
                .then(items => {
                    alert(items.success)
                })
                .catch(err => {
                    alert("Error submitting donation requests");
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