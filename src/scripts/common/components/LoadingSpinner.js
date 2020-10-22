
import React from 'react';
import {ClimbingBoxLoader} from "react-spinners";

class LoadingSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='spinner'>
                <ClimbingBoxLoader
                    color={'#00BADB'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}
export default LoadingSpinner;
