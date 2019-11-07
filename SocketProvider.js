import React from 'react';

// SocketContext = {Provider, Consumer}
export const SocketContext = React.createContext(null);

export class SocketProvider extends React.Component {
  render() {
    return (
      <SocketContext.Provider value={this.props.socket}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}
