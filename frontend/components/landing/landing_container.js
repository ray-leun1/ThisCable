import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Landing from './landing';

let demoLogin = {email: 'testEmail@cord.com', password: 'password'};

const mapStateToProps = state => ({
  currentUserId: state.session.id !== null,
  currentUser: (state.session.id !== null) ? 
    state.entities.users[state.session.id] : null
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemo: () => dispatch(login(demoLogin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)