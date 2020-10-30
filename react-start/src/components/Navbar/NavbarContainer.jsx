import { connect } from 'react-redux';
import Navbar from './Navbar';


let mapStateToProps = (state) =>{
    return{
        friendsListComp:state.sideBar.friendsList
    }
}


const NavbarContainer = connect(mapStateToProps,{})(Navbar);


export default NavbarContainer;