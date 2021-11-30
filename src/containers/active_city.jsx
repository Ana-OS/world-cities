import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {

    render() {
        let classes = "";
        let imageUrl = "";
        let title = "";
        let address = "";
        if(this.props.selectedCity){
            classes += "active-city"
            imageUrl +=`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
            title += `${this.props.selectedCity.name}`;
            address += `${this.props.selectedCity.address}`;
        }
        return(
            <div >
                <h2>{title}</h2>
                <p>{address}</p>
                <img className={ classes }  src={imageUrl} alt="" />
            </div>
        )
    }
}


function mapReduxStateToProps(reduxState){
    return{ selectedCity: reduxState.selectedCity}
}

export default connect(mapReduxStateToProps)(ActiveCity);