import {Router, Route as withRouter} from 'react-router-dom';
import React from 'react';
import { Icon } from "semantic-ui-react";

class Icons extends React.Component {
 

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
      <Icon onClick={() => this.nextPath('/register') } id="smallIcon" className="circle user icon" size="huge"></Icon>
      </div>
    );
  }
}

export default withRouter(Icons);