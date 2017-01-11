import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/user_actions";

class UserList extends Component {

    renderList() {
        return this.props.users.map(
            (user) => {
                return (
                    <li
                        key={user.id.toString()}  
                        onClick={() => this.props.selectUser(user)}
                        >{user.name} {user.age}
                    </li>
                )
            }
        )
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)

