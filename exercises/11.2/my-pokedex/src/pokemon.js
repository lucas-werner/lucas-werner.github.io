import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon
    return <div>
      <p>{name}</p><br/>
      <p>{type}</p><br/>
      <p>{averageWeight.value}{averageWeight.measurementUnit}</p><br/>
      <img src={image}/>
    </div>
  }
}

export default pokemon