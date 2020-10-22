

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import StimsTable from '../../components/Table';
import renderer from 'react-test-renderer';
import Hover from '../../components/Hover';
import { BrowserRouter as Router } from 'react-router-dom';
import TableHeader from '../../components/TableHeader';
import StimsContainer from '../../StimsContainer';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });


it('renders all parts', () => {
  const props = {
    data: [

      { name: "AOI" },]
  };

  const wrapper = shallow(<TableHeader data={props.data} />);
  expect(wrapper.exists()).toBe(true);

});

it('Checks All the headings render', () => {
  const props = {
    data: [
      { name: "AOI" }]
  };
  const tree = renderer.create(<TableHeader  {...props} />).toJSON();
  const tableHeadings = tree.children.length
  expect(tableHeadings).toEqual(1);


})

describe('Hover Component', () => {
  it('It renders without ctashing', () => {
    const props = {
      item: { low_quality_source: 'http://facehoff.herokuapp.com/50/50' },
      tall: true

    }
    const wrapper = shallow(<Hover {...props} />)
    expect(wrapper.exists()).toBe(true);
  });
})

//   it('It Adds the class on Mouse over', () => {
//     const props = {
//       item: { low_quality_source: 'http://facehoff.herokuapp.com/50/50' },
//       isTall: true

//     }
//     const wrapper = mount(<Hover {...props} />)
//     wrapper.simulate('mouseEnter');
//     const image = wrapper.find('.stims__image')
//     expect(image.hasClass('active')).toBe(true)

//   });

//   it('It Adds the class on Mouse over and removes on mouseleave', () => {
//     const props = {
//       item: { low_quality_source: 'http://facehoff.herokuapp.com/50/50' },
//       isTall: true

//     }
//     const wrapper = mount(<Hover {...props} />)
//     wrapper.simulate('mouseEnter');
//     wrapper.simulate('mouseLeave');
//     const image = wrapper.find('.stims__image')
//     expect(image.hasClass('active')).toBe(false)
//   });

//   it('It Adds the class on Mouse over', () => {
//     const props = {
//       item: { low_quality_source: 'http://facehoff.herokuapp.com/50/50' },
//       isTall: true

//     }
//     const wrapper = mount(<Hover {...props} />)
//     const image = wrapper.find('.stims__image')
//     expect(image.hasClass('tall')).toBe(true)

//   });
// })


// describe('Stims Componend', () => {
//   it('Filters the ', () => {

//     const stims = [{ name: 'marcusj' }, { name: 'marcsusj' }]

//     const setStimsFilter = {
//       search: jest.fn(() => stims)
//     }



//     const state = {
//       stimsReducer: {
//         environmentTypes: [1, 2],
//         mediaTypes: [1, 3],
//         studyTypes: [3, 4],
//         loading: false,
//         stims: setStimsFilter,
//         currentSort: 'search'
//       }
//     }
//     const initialState = { ...state }
//     const store = otherMockStore(initialState);
//     const wrapper = mount(<Provider store={store}><StimsContainer /></Provider>)
//     expect(wrapper.exists()).toBe(true);
//   });
// })