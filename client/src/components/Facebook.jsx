import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            error: '',
        };
    }
    
    responseFacebook = response => {
        let self = this;
        
        const body = {
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/fbLogin`, options)
            .then(response => {
                if (response.status === 200) {
                    response.json().then(body => {
                        self.props.authenticate(body);
                        self.setState({redirect: true});
                    });
                } else if (response.status === 401 || response.status === 400) {
                    response.text().then(body => {
                        self.setState({error: body})
                    });
                } else {
                    response.text().then(body => {
                        self.setState({error: body})
                    });
                }
            }).catch(error => console.log(error));
    };

    render() {
        let fbContent;

        if (!this.props.authenticated) {
            fbContent = (<FacebookLogin
                appId={"1149148642281663"}
                autoLoad={true}
                fields="name, email, picture"
                callback={this.responseFacebook}/>);
        }

        return (
            <div>
                {fbContent}
                <p className="errorMessage">
                        {this.state.error}
                    </p>
            </div>
        )
    }
}
