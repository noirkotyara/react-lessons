import React from 'react';
import cl from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    state = {
            editMode: false,
            status: this.props.status
        }
    editStatus = () => {
        console.log(this.state.status)
        this.setState({ editMode: true });
    }
    onChange = (event) => {
        this.setState({status: event.target.value})
    }
    
    componentDidUpdate(prevProps, prevState) {
        debugger;
        if(this.props.status !== prevProps.status){
            this.setState({status: this.props.status})
        }
    }
    readyStatus = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }
    render() {
        return (
            <div className={cl.content}>
                <span className={cl.status}>Status:</span>
                {this.state.editMode
                    ? <div className={cl.editionVersion}>
                        <input onBlur={this.readyStatus} autoFocus={true} type="text" value={this.state.status} onChange={this.onChange} ></input>
                    </div>
                    : <div >
                        <span className={cl.readyStatus} onDoubleClick={this.editStatus}>{this.props.status || '---------'}</span> 
                        {/* значення беруться з пропсів потім вони відображаються в local state, --> рендеряться в інпуті */}
                    </div>}

            </div>
        );
    }
}

export default ProfileStatus;
