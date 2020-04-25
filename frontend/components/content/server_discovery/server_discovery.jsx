import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ServerDiscoveryItem from './server_discovery_item';

export default () => {
  const servers = Object.values(useSelector(state => state.entities.servers));
  const currentUser = useSelector(state => state.entities.users[state.session.id]);

  const [query, setQuery] = useState('');

  const renderServers = () => {
    let serverList = [];
    let search = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    search = new RegExp(search, 'i');

    servers.forEach(server => {
      if (search.test(server.name)) serverList.push(
        <ServerDiscoveryItem
          key={`server-discovery-item-${server.id}`}
          currentUser={currentUser} server={server} />
      );
    })

    return serverList;
  }

  return (<div className='server-discovery-container'>
    <div className='header'>
      Find new communities on thisCable
    </div>
    <div className='search-container'>
      <input className='input'
        type='text'
        value={query}
        placeholder='Try searching for a server name, I dare you'
        onChange={e => setQuery(e.currentTarget.value)} />
    </div>
    <div className='server-list'>
      {renderServers()}
    </div>
  </div>);
}