import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { homeOperations } from './duck/index';
import {Link} from "react-router-dom";
import {dashboardOperations} from "../Dashboard/duck";

class NewHome extends React.Component {

    componentDidMount() {
        this.props.getInfo();
    }

    render() {
        const userType = parseInt(localStorage.getItem('userType'));
        const { onAddNewStudy, completedStudies, liveStudies } = this.props;
        return (
            <div className="home__main-box">
                <div className="home__sub-box">
                    <div className="home__text-container">
                        <h2>Welcome {this.props.homeReducer.first_name} to the Lumen Study Platform</h2>
                    </div>
                    <img className="home__img" src={this.props.homeReducer.company_url} alt=""/>
                    <p>{this.props.homeReducer.company}</p>
                    <div className="home__stats-container">
                        <div className="home__stats-font">Live Studies:</div>
                        <div className="home__stats-font">{ userType === 1 ? this.props.homeReducer.totalLive : liveStudies}</div>
                    </div>
                    <div className="home__stats-container">
                        <div className="home__stats-font">Total Completed:</div>
                        <div className="home__stats-font">{ userType === 1 ? this.props.homeReducer.totalCompleted : completedStudies}</div>
                    </div>
                    <Link onClick={onAddNewStudy} to="/my_studies" className="button-primary home__button">Create Study</Link>
                    </div>
            </div>
        );
    }
}

function countNumberOfX(data, type) {
    const amount = data.filter(item => item[type] === true)
    return amount.length
}

NewHome.propTypes = {
    getInfo: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        homeReducer: state.homeReducer,
        completedStudies: countNumberOfX(state.batchStimsReducer.batchData, 'completed'),
        liveStudies: countNumberOfX(state.batchStimsReducer.batchData, 'live')
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getInfo: () => dispatch(homeOperations.getTotalInfo()),
        onAddNewStudy: () => dispatch(dashboardOperations.onAddNewStudy()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHome);
