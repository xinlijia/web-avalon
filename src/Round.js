import React, { Component } from 'react';
//import './round.css';



class Round extends Component {
	NumberOfPlayers = {5: {1:2, 2:3, 3:4, 4:4, 5:4},
					   6: {1:6, 2:6, 3:6, 4:6, 5:6},
					   7: {1:2, 2:3, 3:4, 4:4, 5:4},
					   8: {1:2, 2:3, 3:4, 4:4, 5:4},					   
					   9: {1:2, 2:3, 3:4, 4:4, 5:4},
					   10: {1:2, 2:3, 3:4, 4:4, 5:4}
					}	
	constructor(props){
		super(props);
		this.state={
			RoundNumber: props.number,
			PlayerNumber: this.NumberOfPlayers[props.playerN][props.number]
		}
	}
  	render() {
    	return (
      		<div>
				{this.state.RoundNumber}
				{this.state.PlayerNumber}
      		</div>
    	);
	}
}

export default Round;