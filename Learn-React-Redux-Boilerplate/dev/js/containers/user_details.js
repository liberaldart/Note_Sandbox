import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render() {
        return (
            <div>
                <p>Selected: { this.props.selectedUser ? this.props.selectedUser.name: "" }    </p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: state.selected
    }
}

export default connect(mapStateToProps)(UserDetails);