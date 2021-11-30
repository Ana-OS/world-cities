import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import City from './city';
import { setCities } from '../actions';

class CityList extends Component{

    componentWillMount(){
        this.props.setCitiesFunction();
    }

    render(){
        return(
            <div className="cities">
               {this.props.cities.map(city => <City city={city} key={city.slug} />)}
            </div>
        )
    }
       
};

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {setCitiesFunction: setCities},
        dispatch
    )
};

function mapReduxStateToProps(reduxState){
    return{ cities: reduxState.cities}
}



export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList)