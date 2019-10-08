import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)