# [ThisCable](https://this-cable.herokuapp.com)

ThisCable is a fullstack clone of [Discord](https://discordapp.com), a live message and voice chat organived by user-created servers with channels as well as by one-on-one user direct messages. ThisCable focuses on the live messaging feature, allowing user creation and joining of servers to chat with other users.

## Technologies
* React-redux - Javascript frontend
* Ruby on Rails - MVC backend
* PostgreSQL - relational database for storing app data

## Features
![Features](https://i.imgur.com/HWVUGAo.png)

* Servers for users to join and communicate in
* Channels for organizing messages
* Roles to customize user access to channels
* Admin users (creators of servers) who can create/delete channels

## Upcoming Features
* One-on-one direct messaging between users
* Admin ability to manage users' messages

## Setup
* Clone the repository to your local machine and run `npm install` to install all dependencies.
* Run `bundle install`, then `bundle exec rails db:setup` to setup the database.
* After running `rails s`, you can then access the app through `localhost:3000` on your browser.
* To test the app out with a pre-seeded sample state, you can use the Demo Login account.
