import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../actions';



class City extends Component{

    handleClick = () => {
        // console.log(this.props.city.name)
        if(this.props.selectCity){
            return this.props.selectCity(this.props.city)
        }
    }

    render(){
        return(
            <div className="card" onClick={this.handleClick}>
                <h4> 
                    {this.props.city.name}
                </h4>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {selectCity: selectCity},
        dispatch
    )
};

function mapReduxStateToProps(reduxState){
    return{ selectedCity: reduxState.selectedCity}
}
export default connect(mapReduxStateToProps, mapDispatchToProps)(City);