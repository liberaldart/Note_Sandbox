import React, {Component} from "react";
require('../../scss/style.scss');
import UserList from "../containers/user_list";
import UserDetails from "../containers/user_details";
import { Note } from "../containers/note";

export class App extends Component {
    render() {
        return (
            <div>
                <h2>User List</h2>
                <UserList />
                <hr />
                <h2>User Details</h2>
                <UserDetails />
                <Note />
            </div>
        ); 
    }
}
