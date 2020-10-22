

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import NewCellWrapper from '../../components/NewCellWrapper';
import AddNewCellInputs from '../../components/AddNewCellInputs';
import Button from '../../../components/Button';

configure({ adapter: new Adapter() });
it('renders all parts', () => {
  const props = { onNewCellClick: jest.fn(), active: false };

  const wrapper = shallow(<NewCellWrapper {...props} />);

  expect(wrapper.find('div').exists()).toBe(true);
  expect(wrapper.find('h2').exists()).toBe(true);
  expect(wrapper.find('h2').text()).toBe('New Cell');
});

it('Check if has the active class', () => {
  const props = {
    active: true
  },
    wrapper = mount(<NewCellWrapper {...props} />).find('.csm__create-cell-container');
  expect(wrapper.hasClass('active')).toEqual(true);
});

it('check the onChange callback', () => {
  const onNewCellClick = jest.fn(),
    props = {
      active: false,
      onNewCellClick
    },
    wrapper = mount(<NewCellWrapper {...props} />).find('button');
  wrapper.simulate('click');
  expect(onNewCellClick).toHaveBeenCalled();

});

it('check prop type', () => {
  const props = {
    active: true
  },
    ModalWrapperComponent = shallow(<NewCellWrapper {...props} />).find('.csm__create-cell-container');
  expect(ModalWrapperComponent.hasClass('active')).toEqual(true);
});


it('renders without crashing', () => {
  shallow(<AddNewCellInputs />);
});

// it('renders Call the addCellubmitMethod on lick of hte add-cell button', () => {
//   const onAddCellSubmit = jest.fn();

//   const props = {
//     active: true,
//     onAddCellSubmit: () => onAddCellSubmit()
//   };
//   let wrapper = mount(<AddNewCellInputs {...props} />);
//   wrapper.find('button').first().simulate('click');
//   expect(onAddCellSubmit).toHaveBeenCalled();


// });

// it('renders Call the addCellubmitMethod on lick of hte add-cell buttonwitht the orrect values', () => {
//   const onAddCellSubmit = jest.fn();

//   const props = {
//     active: true,
//     onAddCellSubmit: () => onAddCellSubmit('marcussssss', 'm')
//   };
//   let wrapper = mount(<AddNewCellInputs {...props} />);
//   wrapper.find('button').first().simulate('click');
//   expect(onAddCellSubmit).toHaveBeenCalledWith('marcussssss', 'm');


// });


// it('On cancel click calls the cancel function', () => {
//   const onCancelClick = jest.fn();

//   const props = {
//     active: true,
//     onCancelClick: () => onCancelClick()
//   };
//   let wrapper = mount(<AddNewCellInputs {...props} />);
//   wrapper.find('.button-primary.cancel').simulate('click');
//   expect(onCancelClick).toHaveBeenCalled();
//   expect(onCancelClick).toHaveBeenCalledTimes(1);


// });

// it('renders Call the addCellubmitMethod on lick of hte add-cell button', () => {
//   const onAddCellSubmit = jest.fn();

//   const props = {
//     active: true,
//     onAddCellSubmit: () => onAddCellSubmit()
//   };
//   let wrapper = mount(<AddNewCellInputs {...props} />);
//   const onAddCellSubmitSpy = jest.spyOn(wrapper.instance(), 'onAddCellSubmit');
//   wrapper.find('button').at(0).simulate('click');
//   expect(onAddCellSubmitSpy).toHaveBeenCalled();
// });

// it('Input should call handleChange on change event', () => {

//   const event = { target: { value: 'usertest' } };
//   const wrapper = mount(<AddNewCellInputs />);
//   const handleChangeSpy = jest.spyOn(wrapper.instance(), 'onChange');

//   wrapper.find('input').first().simulate('change', event);

//   expect(handleChangeSpy).toHaveBeenCalled();

// });

// it('Short NameInput should call handleChange on change event', () => {

//   const event = { target: { value: 'usertest' } };
//   const wrapper = mount(<AddNewCellInputs />);
//   const handleChangeSpy = jest.spyOn(wrapper.instance(), 'onShortNameChange');

//   wrapper.find('input').at(1).simulate('change', event);

//   expect(handleChangeSpy).toHaveBeenCalled();

// });




