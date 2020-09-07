import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func,
  }

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()

    createFish = (event) => {
        //1. stop form from submitting
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        
        //2. pull values out of each input
        this.props.addFish(fish);
        //refresh form:
        event.currentTarget.reset();
    };

  render() {
    return( 
    <form className="fish-edit" onSubmit={this.createFish}>  
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}> 
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Description"/>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
    </form>
    );
  }
}

export default AddFishForm;