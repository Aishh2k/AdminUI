import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import '../CSS/AdminUI.css';


class AdminUI extends Component {
    constructor() {
        super();
        this.state={
            users:[],
        }

        this.Capitalize=this.Capitalize.bind(this);

    }

    componentDidMount() {
        axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
            .then(res => {
            const data = res.data;
            this.setState({ users:data });
      })
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    render() {

        return (
            <div className="main">
                <form action="">
                    <input type="search" id="search" placeholder="Search by name, email or role" name="search"/><br/><br/>
                </form>

                <Table responsive hover >
                    <thead >
                        <tr>
                            <th>  Checkbox  </th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody striped="false">
                        {this.state.users.map((user) => ( 
                        <tr key={user.id}>
                            <td data-model="Checkbox">  </td>
                            <td data-label="Name"> {user.name}</td>          
                            <td data-label="Email">{user.email}</td> 
                            <td data-label="Role">{this.Capitalize(user.role)}</td>
                            <td data-label="Actions"> Actions</td>
                        </tr> ))}  
                        
                    </tbody>
                </Table>

            </div>
        );
    }
}



export default AdminUI;