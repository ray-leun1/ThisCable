# [ThisCable](https://this-cable.herokuapp.com)

## Technologies
* Backend: Ruby on Rails MVC and PostgreSQL database
* Frontend: JavaScript and React-Redux

## Background and Overview
ThisCable is a fullstack clone of [Discord](https://discordapp.com), a live-message and voice chat app organized by user-created servers with channels as well as by one-on-one user direct messages. ThisCable focuses on the live messaging feature, allowing user creation and joining of servers to chat with other users.

## Features and Technical Challenges
* Servers for users to join and communicate in
* Channels for organizing messages
![Feature_1](/app/assets/images/thisCableScreenshot_chat.png)
```javascript
// message_index.jsx
return (<div className='message-container'
  key={`message-container-${message.id}`}>
  <div className='message-user-icon'
    style={author.profile_img_url
      ? { backgroundImage: `url(${author.profile_img_url})` }
      : { background: '#7289da' }}>
    {author.profile_img_url ? '' : svgs.logoCat}
  </div>
  <div className='message-info'>
    <div className='message-user-header'>
      <div className='message-username'>
        {author.username}
      </div>
      <div className='message-timestamp'>
        {this.dateParser(message.created_at)}
      </div>
    </div>
    <div className='message-body'>
      {message.body}
    </div>
  </div>
</div>)
```

* User profile picture customization
* Uses aws for image upload
![Feature_2](/app/assets/images/thisCableScreenshot_settings.png)
```javascript
// my_account.jsx
const handleFile = e => {
  const file = e.currentTarget.files[0];
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setProfileImgUrl(fileReader.result);
    setProfileImg(file);
  }
  file ? fileReader.readAsDataURL(file) : '';
}

const handleSubmit = e => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('user[id]', currentUser.id);
  formData.append('user[username]', username);
  formData.append('user[email]', email);

  if (profileImg) formData.append('user[profile_img]', profileImg);

  dispatch(editUser(formData)).then(() => {
    updateCurrentUser().then(() => setUpdateUser(false))
  });
}
```

* Server search and join
* Updates search and user types in query
![Feature_3](/app/assets/images/thisCableScreenshot_serverdiscovery.png)
```javascript
// server_discovery.jsx
renderServers() {
  let servers = [];
  let search = this.state.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  search = new RegExp(search, 'i');

  this.props.servers.forEach(server => {
    if (search.test(server.name)) {
      servers.push(<ServerDiscoveryItem {...this.props} server={server} />);
    }
  })

  return servers
}
```

## Upcoming Features
* One-on-one direct messaging between users
* Admin ability to manage users' messages

## Setup
* Clone the repository to your local machine and run `npm install` to install all dependencies.
* Run `bundle install`, then `bundle exec rails db:setup` to setup the database.
* After running `rails s`, you can then access the app through `localhost:3000` on your browser.
* To test the app out with a pre-seeded sample state, you can use the Demo Login account.
