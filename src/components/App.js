import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    }

    componentDidMount(){

        //first re-instate our local storage so it doesnt overwrite
        const localStorageRef = localStorage.getItem(this.props.match.params.StoreId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)});
        }
        console.log(localStorageRef);

        //then sets state when component mounts
        this.ref = base.syncState(`${this.props.match.params.StoreId}/fishes`,{
            context: this,
            state: 'fishes',
        });
        
    };

    componentDidUpdate(){
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.StoreId, JSON.stringify(this.state.order));
        
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        //1. take a copy of existing state
        const fishes = {...this.state.fishes}
        //2. Add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish
        //3. set the new fishes object to state
        this.setState({
            fishes: fishes, //overwrites old fishes state with new fishes variable
        });
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes})
    }

    addToOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2. add to order or update number
        order[key] = order[key] + 1 || 1;
        //3. call setState to update state object
        this.setState({order: order});

    }

    render(){
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder = {this.addToOrder}/>)}
                    </ul>
                    </div>

                    <Order fishes = {this.state.fishes} order={this.state.order}/> 
                    <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
                
            </div>
        )
    }
}

export default App;