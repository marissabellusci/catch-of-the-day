import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from "prop-types";

class StorePicker extends React.Component{
    static propTypes = {
        history: PropTypes.object,
    }

    constructor(){
        super()
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();
    goToStore(event){
        //1.Stop form from submitting
        event.preventDefault();
        //2.Get text from input
        const storeName = this.myInput.current.value;
        //3.change page to /store/whatever-selection
        this.props.history.push(`/store/${storeName}`)
    };

    render(){
        return (
        <form className='store-selector' onSubmit={this.goToStore}> 
        
        <h2>Please enter a store</h2>

        <input 
        type="text" 
        ref={this.myInput}
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()}>
        </input>

        <button type="submit">Visit Store!</button>

        </form>
        );
    }
}

export default StorePicker;