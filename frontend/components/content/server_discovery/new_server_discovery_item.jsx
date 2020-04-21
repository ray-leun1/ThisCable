import React from 'react';

export default props => {
  const handleJoin = join => {
    if (join === 'join') {
      this.props.createMembership({
        user_id: this.props.currentUser.id,
        server_id: this.props.server.id
      }).then(() => {
        this.props.getCurrentServer(this.props.server.id).then(server => {
          this.props.history.push(`/channels/${this.props.server.id}/${server.server.joinedChannelIds[0]}`);
          this.props.getCurrentChannel(server.server.joinedChannelIds[0]);
        })
      })
    } else {
      this.props.getCurrentServer(this.props.server.id).then(server => {
        this.props.history.push(`/channels/${this.props.server.id}/${server.server.joinedChannelIds[0]}`);
        this.props.getCurrentChannel(server.server.joinedChannelIds[0]);
      })
    }
  }

  const renderJoinBtn = () => {
    if (this.props.currentUser.joinedServerIds.includes(this.props.server.id)) {
      return (<div className='server-discovery-list-item-join-btn joined'
        onClick={() => this.handleJoin('joined')}>
        <div className='join-btn-txt'>
          Joined
        </div>
        <div className='join-btn-check'>
          <i className="fas fa-check"></i>
        </div>
      </div>)
    } else {
      return (<div className='server-discovery-list-item-join-btn join'
        onClick={() => this.handleJoin('join')}>
        <div className='join-btn-txt'>
          Join
        </div>
      </div>)
    }
  }

  return (<div className='server-discovery-list-item-container'
    key={`server-discovery-list-item-container-${this.props.server.id}`}>
    <img className='server-discovery-list-item-icon'
      key={`server-discovery-list-item-icon-${this.props.server.id}`}
      src='https://i.imgur.com/Jvh1OQm.jpg'
      alt={`${this.props.server.name} icon`} />
    <div className='server-discovery-list-item-name noverflow'
      key={`server-discovery-list-item-name-${this.props.server.id}`}>
      {this.props.server.name}
    </div>
    <div className='server-discovery-list-item-join'
      key={`server-discovery-list-item-join-${this.props.server.id}`}>
      {this.renderJoinBtn()}
    </div>
  </div>)
}