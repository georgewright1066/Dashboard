import React , {Component} from 'react';

class Video extends Component {

  onClick = (e) =>{
    const node = this.node;
    node.play();
  }

  render(){
    const {videoSource, className, onLoadStart} = this.props;
    return(
      <video onLoadStart={onLoadStart} className={className} onClick={this.onClick} ref={(node) => { this.node = node; }} width="100%" height="100%" id="bgvID" controls >
        <source src={videoSource} type="video/mp4" />
      </video>
    );
  }
}


export default Video;
