import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users : [] };
    }

    onClick = () =>  {
    fetch("https://jsonplaceholder.typicode.com/users").then(function(response) {
        return response.json();
    }).then(usersFromFetch => {
        this.setState({
            users: usersFromFetch, 
        });
    });  
    }

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={this.onClick}>Click me</button>
                <div>
                    {
                        this.state.users.length < 1 ? null : this.state.users.map((e) => {
                            return (<div key={e.id} className="card-body">
                                <h3 className="card-title"> User: {e.name} </h3>
                                <h4 className="card-subtitle mb-2 text-muted"> User name: {e.username} </h4>
                                <p className="card-text"> email: {e.email} </p>

                                <p className="card-text"> address: 
                                    <ul>
                                        <li> {e.address.street} </li>
                                        <li> {e.address.suite} </li>
                                        <li> {e.address.city} </li>
                                        <li> {e.address.zipcode} </li>
                                        <li> {e.address.geo.lat} / {e.address.geo.lng} </li>
                                    </ul>
                                </p>
                                <p className="card-text">
                                    phone: {e.phone}
                                </p>
                                <p className="card-text">
                                    website: {e.website}
                                </p>
                                <p className="card-text"> company:
                                    <ul>
                                        <li> {e.company.name} </li>
                                        <li> {e.company.catchPhrase} </li>
                                        <li> {e.company.bs} </li>
                                    </ul>
                                </p>    
                                </div>);
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default UserList; 

