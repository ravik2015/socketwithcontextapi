/*** Suite ***/
import React from 'react';
import {SocketContext} from './SocketProvider';

export function withSocketContext(Component) {
  class ComponentWithSocket extends React.Component {
    static displayName = `${Component.displayName || Component.name}`;

    render() {
      return (
        <SocketContext.Consumer>
          {socket => (
            <Component {...this.props} socket={socket} ref={this.props.onRef} />
          )}
        </SocketContext.Consumer>
      );
    }
  }

  return ComponentWithSocket;
}
