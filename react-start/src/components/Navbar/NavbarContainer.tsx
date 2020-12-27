import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { initialStateType } from '../../redux/sideBar-reducer';
import Navbar from './Navbar';


let mapStateToProps = (state: AppStateType): initialStateType=>({friendsList: state.sideBar.friendsList})


const NavbarContainer = connect(mapStateToProps,{})(Navbar);


export default NavbarContainer;