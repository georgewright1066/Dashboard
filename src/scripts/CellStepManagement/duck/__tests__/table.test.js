
import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import CachePage from '../../components/CachePage';
import Stim from '../../components/StimTable';

configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const props = {
    loading: true,
    cachePage: [{
      cached_source: 'https://www.youtube.com/',
      id: 4,
      name: 'YouTube Live',
      original_source: 'https://www.youtube.com/'
    },
    {
      cached_source: 'https://www.youtube.com/',
      id: 4,
      name: 'YouTube Live',
      original_source: 'https://www.youtube.com/'
    }
    ]
  };

  shallow(<CachePage {...props} />);
});


it('renders The amount of rows - Will always be one more than array as we have the heading row', () => {
  const props = {
    loading: false,
    cachePage: [{
      cached_source: 'https://www.youtube.com/',
      id: 4,
      name: 'YouTube Live',
      original_source: 'https://www.youtube.com/'
    }

    ]
  };
  const tree = renderer.create(<CachePage {...props} />).toJSON();
  expect(tree.children[0].children.length).toEqual(2);
});


it('check the onClick callback for the Add Cache page table', () => {
  const onClick = jest.fn();
  const props = {
    loading: false,
    cachePage: [{
      cached_source: 'https://www.youtube.com/',
      id: 4,
      name: 'YouTube Live',
      original_source: 'https://www.youtube.com/'
    }
    ],
    onClick: () => onClick(4)
  };

  const wrapper = mount(<CachePage {...props} />).find('button');
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledWith(4);


});

it('check the onClick callback for Add Stim tables', () => {
  const onClick = jest.fn();
  const props = {
    loading: false,
    data: [{
      cached_source: 'https://www.youtube.com/',
      id: 4,
      name: 'YouTube Live',
      adtype: 'https://www.youtube.com/',
      media: 'YouTube Live',
      width: 190,
      type: 'a'

    }
    ],
    onClick: () => onClick(4)
  };

  const wrapper = mount(<Stim {...props} />).find('button');
  wrapper.simulate('click');
  expect(onClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledWith(4);


});
