import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Round from './Round.js'
import logo from './logo.svg';
import './App.css';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            player_num: 5,
            is_started: false,
            identity_dic: {1:'Merlin', 2:'Percival', 3:'Loyal Servant', 4:'Morgana', 5:'Assassin'},
            check_num: 1,
            showing_identity: null,
            is_started_message: 'Player number not set!'
        }
    }
    setPlayerNumber(player_num){
        if (this.state.is_started == false){
            this.setState({player_num: player_num});

        }
    }
    numberSetDone(){
        if(this.state.is_started == false){
            this.setState({is_started: true});
        }
        this.generateIdentities(this.state.player_num);
        this.setState({is_started_message: 'Player number set!'})
    }
    generateIdentities(player_num){      
        if(player_num == 5){
            var random_list = shuffleArray([1, 2, 3, 4, 5]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Morgana', 'Assassin'];
            var new_dic = {}
            for (var i = 0; i < 5; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num == 6){
            var random_list = shuffleArray([1, 2, 3, 4, 5, 6]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin'];
            var new_dic = {}
            for (var i = 0; i < 6; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num == 7){
            var random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Oberon'];
            var new_dic = {}
            for (var i = 0; i < 7; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num == 8){
            var random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Minion of Mordred'];
            var new_dic = {}
            for (var i = 0; i < 8; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num == 9){
            var random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Mordred'];
            var new_dic = {}
            for (var i = 0; i < 9; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num == 10){
            var random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            var identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant',
             'Loyal Servant', 'Morgana', 'Assassin', 'Mordred', 'Oberon'];
            var new_dic = {}
            for (var i = 0; i < 10; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else{
            console.log('Player number error!')
        }
    }

    checkToggle(){
        var identity_funcs = {'Merlin': 'knows the Evils, must remain hidden', 'Percival': 'knows Merlin', 'Loyal Servant': 'are the Goods',
         'Morgana': 'appears as Merlin', 'Mordred': 'are unknown to Merlin', 'Assassin': 'need to kill Merlin', 'Oberon': 'are unknown to Evil',
        'Minion of Mordred': 'are the Evils'}
        if(this.state.showing_identity == null && this.state.check_num <= this.state.player_num){
            var id = this.state.identity_dic[this.state.check_num]
            this.setState({showing_identity: 'You are ' + id + '. You ' + identity_funcs[id] + '.'})
        }
        else{
            this.setState({showing_identity: null})
        }
        
    }

    checkNext(){
        if(this.state.showing_identity != null){
        
            this.setState({showing_identity: null})        
            if(this.state.check_num  <= this.state.player_num){
                this.setState({check_num: this.state.check_num + 1})            
            }
    }
    }

  	render() {

    	return (

      	<div className="App">
        	<Tabs>
        	<TabList>
          	<Tab>Set player number</Tab>
            <Tab>See your identities</Tab>
          	<Tab>Misson starts</Tab>
        	</TabList>

        	<TabPanel>
          	<h2>Choose the number of players and click ok</h2>
              <h3> {this.state.player_num} Players</h3>
              <div>
              <button onClick={() => {this.setPlayerNumber(5)}}>5</button>
              <button onClick={() => {this.setPlayerNumber(6)}}>6</button>
              <button onClick={() => {this.setPlayerNumber(7)}}>7</button>
              <button onClick={() => {this.setPlayerNumber(8)}}>8</button>
              <button onClick={() => {this.setPlayerNumber(9)}}>9</button>
              <button onClick={() => {this.setPlayerNumber(10)}}>10</button>
              </div>
              <button onClick={() => {this.numberSetDone()}}>ok</button>
              <h3> {this.state.is_started_message} </h3>
              </TabPanel>

            <TabPanel>
          	<h2>Pass through players to see their identities</h2>
              <h3> {this.state.is_started_message} </h3>
              <div>
                    <button onClick={() => {this.checkToggle()}}>reveal/hide</button>
                    <button onClick={() => {this.checkNext()}}>next</button>
                    <div> {this.state.showing_identity}</div>

              </div>

              </TabPanel>
        	<TabPanel>    
          	<h2>Pass through team and vote for the mission</h2>
          	<Tabs>
            	<TabList>
              	<Tab>R1</Tab>
              	<Tab>R2</Tab>
              	<Tab>R3</Tab>
              	<Tab>R4</Tab>
             	<Tab>R5</Tab>
            	</TabList>
            	<TabPanel>
              	<h2> R1 </h2>
              	<Round number='1' playerN={this.state.player_num} />

            	</TabPanel>
            	<TabPanel>
              	<h2> R1 </h2>
              	<Round number='2' playerN={this.state.player_num}/>

            	</TabPanel>
            	<TabPanel>
              	<h2> R1 </h2>
              	<Round number='3' playerN={this.state.player_num}/>

            	</TabPanel>
            	<TabPanel>
              	<h2> R1 </h2>
              	<Round number='4' playerN={this.state.player_num}/>

            	</TabPanel>
            	<TabPanel>
              	<h2> R1 </h2>
			  	<Round number='5' playerN={this.state.player_num}/>

            	</TabPanel>
            	</Tabs>





        	</TabPanel>
        		</Tabs>
      	</div>
    	);
	}
}

export default App;
