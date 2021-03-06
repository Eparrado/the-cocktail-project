import React, { Component } from 'react';
import Bus from './Icons/Bus';


class Card extends Component {
  render() {
    const stopsBusLines = this.props.stop.line;
    let numberLine = "";
    if(stopsBusLines.length === undefined) {
      numberLine = <span className="number-bus">{stopsBusLines.line}</span>
    } else {
      numberLine = stopsBusLines.map(function(line, index) {
      return <span key={index} className="number-bus">{line.line}</span> //poner la key
        })
    }

    const futureColumnClass = stopsBusLines.length >= 4 ? 'flex classColumn' : 'flex';

    return(
      <div className="card flex m-right-tablet-desktop m-bottom-tablet-desktop ">
        <div className={futureColumnClass} id="columnMobile">
          <div className="flex box-numbers">
            {numberLine}
          </div>
          <div className="box-data-card">
            <h6 className="m-none data-title">{this.props.stop.name}</h6>
            <p className="data-medium">{this.props.stop.postalAddress}</p>
          </div>
        </div>
        <div className="flex box-icon-card">
          <Bus className="bus-card" />
          <p className="m-none">Parada: {this.props.stop.stopId} </p>
        </div>
      </div>
    )
  }
}

export default Card
