import React from 'react';
import Widget from '../Overview/components/widget';
import home from '../../assets/images/home-black.svg';

import WidgetItemWithButton from '../Overview/components/widgetItemWithButton';

class Home extends React.Component {

  render() {

    return (
      <div className="overview">
        <div className="overview__widget-stacked">

          <Widget
            title="Test"
            className="widget widget--home"
            link={`/batches`}
            source={home}
            showButton={false}>
            <WidgetItemWithButton
              title="Batches Home"
              link={`/batches`}
              text="View Batches"
              className="home"
              testId='batches'

            />
            <WidgetItemWithButton
              title="Studies Home "
              link={`/dashboard`}
              text="View Studies"
              className="home"
              testId='studies'

            />
          </Widget>

        </div>
      </div>

    )
  }
}



export default Home;
