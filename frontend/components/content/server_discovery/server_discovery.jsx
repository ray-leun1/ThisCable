import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerDiscoveryItem from './server_discovery_item';

class ServerDiscovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      servers: this.props.getServers()
    }

    this.renderServers = this.renderServers.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderServers() {
    let servers = [];
    let search = new RegExp(this.state.search, 'i');

    this.props.servers.forEach(server => {
      if (search.test(server.name)) {
        servers.push(<ServerDiscoveryItem {...this.props} server={server} />);
      }
    })

    return servers
    }

  handleChange() {
    return e => this.setState({search: e.currentTarget.value})
  }

  render() {
    return (<div className='server-discovery-container'>
      <div className='server-discovery-header'>
        Find new communities on thisCable
      </div>
      <div className='server-discovery-search-container'>
        <input className='server-discovery-search-input'
          type='text'
          value={this.state.search}
          placeholder='Try searching for a server name, I dare you'
          onChange={this.handleChange()} />
        {/* <button className='server-discovery-search-submit'
          onClick={() => this.handleSubmit()}>
          <i className="fas fa-search"></i>
        </button> */}
      </div>
      <div className='server-discovery-server-list'>
        {this.renderServers()}
      </div>
    </div>);
  }
}

export default withRouter(ServerDiscovery);
