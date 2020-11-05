import React from 'react';
import cl from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    constructor(props){
        super(props);
        this.state = {editMode: false}
    }
    // state = {
    //     editMode: false
    // }
    editStatus = () => {
        this.setState({ editMode: true });
    }
    readyStatus = () => {
        this.setState({ editMode: false });
    }
    render() {
        return (
            <div className={cl.content}>
                {this.state.editMode
                    ? <div>
                        <input onBlur={this.readyStatus} autoFocus={true} type="text" value={this.props.status} />
                    </div>
                    : <div>
                        <span onDoubleClick={this.editStatus}>{this.props.status}</span>
                    </div>}

            </div>
        );
    }
}

export default ProfileStatus;
