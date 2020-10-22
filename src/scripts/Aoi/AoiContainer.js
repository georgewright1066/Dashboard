import React, { Component } from 'react';
import Iframe from 'react-iframe'
import { URL } from '../common/constants';
import queryString from 'query-string'

class AoiContainer extends Component {
  render() {
    const id = this.props.match.params.id;
    const type = queryString.parse(this.props.location.search)
    const REST_OF_URL = type.type === 'stim' ? `stimuli/stimulus/feature-editor/?stimulus_id=${id}` :
      `stimuli/tpstimulus/tpstimuli-feature-editor/?stimulus_id=${id}`

    return (
      <div className="aoi">
        <Iframe
          url={`${URL}/${REST_OF_URL}`}
          width="100%"
          height="100vh"
          id="myId"
          className="aoi__iframe"
          display="initial"
          position="relative"
          allowFullScreen />


      </div>
    );
  }
}


export default AoiContainer;
