import React from 'react';

const Header = props => ( //uses implicit return because there is an arrow function
        <header className='top'>
        <h1>Catch 
            <span className='ofThe'>
            <span className='of'> of </span>  
            <span className='the'> the </span> 
            </span>
            Day</h1>
        <h3 className='tagline'>
            <span>{props.tagline}</span>
        </h3>
    </header>
    )
//(THIS IS A STATELESS FUNCTIONAL COMPONENT^^)
// IT IS ABLE TO BE STATELESS FUNCTIONAL BC IT JUST GETS 
//PASSED IN DATA VIA PROPS AND RETURNS JSX


//IT IS EQUIVALENT TO THE BELOW REGULAR REACT COMPONENT
//(They work the same, but the above (stateless functional comp) is cleaner
//and improves code performance):

//class Header extends React.Component {
//    render(){
//        return (
//            <header className='top'>
//                <h1>Catch 
//                    <span className='ofThe'>
//                    <span className='of'> of </span>  
//                    <span className='the'> the </span> 
//                    </span>
//                    Day</h1>
//                <h3 className='tagline'>
//                    <span>{this.props.tagline}</span>
//                </h3>
//            </header>
//        )
//    }
//}

export default Header;