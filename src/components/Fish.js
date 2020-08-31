import React from "react";

class Fish extends React.Component {
  render() {
    return <li className="menu-fish">
    <img src={this.props.details.image} alt={this.props.details.name}>
    </img>
    <h3 className='fish-name'>
        {this.props.details.name}
    </h3>
    <p className='fish-desc'>
        {this.props.details.desc}
    </p>
    </li>;
  }
}

export default Fish;