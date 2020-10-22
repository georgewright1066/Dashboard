

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import Batches from '../../components/Table';
import BatchStims from '../../../BatchData/components/Table';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BatchReportStimTable from '../../../BatchReport/components/StimTable';
import StimTable from '../../../BatchReport/components/StimTable';
import BatchKpi from '../../../BatchKpi/BatchKpiContainer';

configure({ adapter: new Adapter() });


it('Batch data table renders all parts', () => {

  const props = {
    batchData: [{
      completed: false,
      batch_id: "No Brand",
      data_collection_end: 'asd',
      data_collection_start: "2018-03-01T22:25:43.156794Z",
      estimated_batch_size: 720,
      live: false,
      report_generated_date: "https://s3.eu-west-2.amazonaws.com/ctt-media/resized/397-resized.mp4",
      vendor_id: "Digital",
      name: 'Test'

    }],
    tableHeadings: [
      { name: "Id" },
      { name: "Completed" },
      { name: "Data Collection End" },
      { name: "Data Collection Start" },
      { name: "Estimated Batch Size" },
      { name: "Live" },
      { name: "Report Denerated" },
      { name: "Vendor Id" },
      { name: "AOI" }
    ],
    loading: false

  };

  const wrapper = mount(<Router><Batches {...props} /></Router>);
  expect(wrapper.exists()).toBe(true);

});


// describe('Renders the table given the correct table - batch  ', () => {
//   it('Calls onKpiClick when the kpi button is pressex', () => {
//     const onKpiClick = jest.fn();
//     const onFeatureClick = jest.fn();

//     const props = {
//       stims: [{
//         description: null,
//         discovered_date: "26 March 2019",
//         external_source: null,
//         feature_data: [],
//         height: 2289,
//         identifier: "36c73a00-2fd0-11e9-ae6b-830a8ddcdd5e",
//         internal_id: 99,
//         name: "Website Image",
//         type: "image",
//         url: "https://stg.cloudarmy.net/assets/03/03dba4a0-2fd0-11e9-a1e4-d5db6e0bf4b2",
//         width: 1807,
//         onKpiClick: () => onKpiClick(),
//         onFeatureClick: () => onFeatureClick(),
//         loading: false,
//         id: 1,
//         vendorId: 2

//       }]
//     }
//     const isLoading = false;

//     let wrapper = mount(<StimTable {...props} />)
//     // wrapper.find('.batch-kpi').simulate('click');
//     // expect(onKpiClick).toHaveBeenCalled();


//   });
// })






// import React from 'react';
// import { shallow, mount, render, enzyme, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
// import sinon from 'sinon';
// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);
// import thunk from 'redux-thunk';
// import NewCellWrapper from '../../components/NewCellWrapper';
// import AddNewCellInputs from '../../components/AddNewCellInputs';
// import Button from '../../../components/Button';
// configure({ adapter: new Adapter() });
// it('renders all parts', () => {
//   const props = { onNewCellClick: jest.fn(), active: false };

//   const wrapper = shallow(<NewCellWrapper {...props} />);

//   expect(wrapper.find('div').exists()).toBe(true);
//   expect(wrapper.find('h2').exists()).toBe(true);
//   expect(wrapper.find('h2').text()).toBe('New Cell');
// });

// it('Check if has the active class', () => {
//   const props = {
//     active: true
//   },
//     wrapper = mount(<NewCellWrapper {...props} />).find('.csm__create-cell-container');
//   expect(wrapper.hasClass('active')).toEqual(true);
// });

// it('check the onChange callback', () => {
//   const onNewCellClick = jest.fn(),
//     props = {
//       active: false,
//       onNewCellClick
//     },
//     wrapper = mount(<NewCellWrapper {...props} />).find('button');
//   wrapper.simulate('click');
//   expect(onNewCellClick).toHaveBeenCalled();

// });

// it('check prop type', () => {
//   const props = {
//     active: true
//   },
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





