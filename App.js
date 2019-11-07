//App.js
import React from 'react';
/***Autres imports ***/
import io from 'socket.io-client';
import Screen from './app/Screen';
import {SocketProvider} from './SocketProvider';

class App extends React.Component {
  state = {
    socket: null,
  };

  componentDidMount() {
    this.connectSocket();
  }

  connectSocket = () => {
    try {
      console.log('connexion au serveur socket');
      this.setState({
        socket: io.connect('http://localhost:3000', {
          transports: ['websocket'],
          reconnectionAttempts: 15,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <SocketProvider socket={this.state.socket}>
        <Screen />
      </SocketProvider>
    );
  }
}

export default App;
