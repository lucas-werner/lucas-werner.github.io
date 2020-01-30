import React from 'react';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon
    return <div className='pokemon'>
      <p>{name}</p>
      <p>{type}</p>
      <p>{averageWeight.value}{averageWeight.measurementUnit}</p><br/>
      <img src={image}/>
    </div>
  }
}

export default Pokemon