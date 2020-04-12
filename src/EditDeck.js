import React from 'react';
import Card from './Card'

class EditDeck extends React.Component{

  state = {
    selectedCard: {}
  }

  setSelectedCard = (card) => {
    this.setState({selectedCard:card})
  }

  render(){
    return(
      <div className='edit-container'>
        <button onClick={this.props.startGame}>Start Game</button>
        <div className='cards-container'>
          {this.props.cards.map(card => 
            <>
              <Card card={card} setSelectedCard={this.setSelectedCard} />
            </>
          )}
        </div>
        <div className='deck-editor'>
          {this.props.playerFullDeck.length == 0 ?
            null
            :
            this.props.playerFullDeck.map(card => {
              return <Card card={card} />
            })
          }
        </div>
      </div>
    )
  }
}

export default EditDeck