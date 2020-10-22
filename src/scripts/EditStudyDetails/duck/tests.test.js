

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import EditStudyDetails from '../components/EditStudyDetails';
configure({ adapter: new Adapter() });


it('renders all parts', () => {
  const onSubmit = jest.fn()
  const props = {
    environmentOptions: [1, 2],
    mediaOptions: [1, 2],
    environmentLoading: false,
    mediaLoading: false,
    studyDetailsLoading: false,
    studyDetails: [1, 2, 3],
    onSubmit: onSubmit(),
    id: 111,
    languageOptions: [1, 2, 3]


  };

  const wrapper = mount(
    <MemoryRouter>
      <EditStudyDetails {...props} />
    </MemoryRouter>);
  expect(wrapper.exists()).toBe(true);

});



it('check the onSubmit is called on buttton click', () => {
  const onSubmit = jest.fn()
  const props = {
    environmentOptions: [1, 2],
    mediaOptions: [1, 2],
    environmentLoading: false,
    mediaLoading: false,
    studyDetailsLoading: false,
    studyDetails: [1, 2, 3],
    onSubmit: onSubmit(),
    id: 111,
    languageOptions: [1, 2, 3]

  };

  const wrapper = mount(
    <MemoryRouter>
      <EditStudyDetails {...props} />
    </MemoryRouter>
  );
  wrapper.find('.my-details__button.submit').simulate('click');
  expect(onSubmit).toHaveBeenCalled()

});

// it('check prop type', () => {
//   const props = {
//       active: true
//     },
//     ModalWrapperComponent = shallow(<NewCellWrapper {...props} />).find('.csm__create-cell-container');
//   expect(ModalWrapperComponent.hasClass('active')).toEqual(true);
// });


// it('renders without crashing', () => {
//   shallow(<AddNewCellInputs />);
// });

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





