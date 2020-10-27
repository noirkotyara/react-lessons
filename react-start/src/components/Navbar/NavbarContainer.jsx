import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) =>{
    return{
        friendsListComp:state.sideBar.friendsList
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        
    }
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);


export default NavbarContainer;