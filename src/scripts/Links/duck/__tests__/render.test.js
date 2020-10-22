

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import LinksTable from '../../components/LinksTable';
import renderer from 'react-test-renderer';


configure({ adapter: new Adapter() });


describe('Links Table  ', () => {
  it('Links table renders correctly', () => {

    const props = {
      data: {
        "study_id": 227,
        "live_links": {
          "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&participant=Insert_Id",
          "cell_links": [
            {
              "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579&participant=Insert_Id",
              "cell_id": 579,
              "auto_start": "https://study.viewpoints.fyi/auto-start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579",
              "short_name": "A",
              "cell_name": "cell_1-GVMRBlueBandStudy2"
            },
            {
              "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580&participant=Insert_Id",
              "cell_id": 580,
              "auto_start": "https://study.viewpoints.fyi/auto-start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580",
              "short_name": "B",
              "cell_name": "cell_2-GVMRBlueBandStudy2"
            }
          ],
          "auto_start": "https://study.viewpoints.fyi/auto-start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227",
          "panel_links": [
            {
              "cell_links": [
                {
                  "panel_id": 161,
                  "panel_code": "code",
                  "panel_name": "Panel Company",
                  "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579&panel=code&participant=Insert_Id"
                },
                {
                  "panel_id": 161,
                  "panel_code": "code",
                  "panel_name": "Panel Company",
                  "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580&panel=code&participant=Insert_Id"
                }
              ],
              "panel_id": 161,
              "panel_code": "code",
              "panel_name": "Panel Company",
              "standard": "https://study.viewpoints.fyi/start?access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&panel=code&participant=Insert_Id"
            }
          ]
        },
        "testing_links": {
          "panel_links": [
            {
              "cell_links": [
                {
                  "panel_id": 161,
                  "panel_code": "code",
                  "panel_name": "Panel Company",
                  "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579&panel=code&participant=Insert_Id"
                },
                {
                  "panel_id": 161,
                  "panel_code": "code",
                  "panel_name": "Panel Company",
                  "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580&panel=code&participant=Insert_Id"
                }
              ],
              "panel_id": 161,
              "panel_code": "code",
              "panel_name": "Panel Company",
              "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&panel=code&participant=Insert_Id"
            }
          ],
          "cell_links": [
            {
              "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579&participant=Insert_Test_Id",
              "cell_id": 579,
              "auto_start": "https://study.viewpoints.fyi/auto-start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=579",
              "short_name": "A",
              "cell_name": "cell_1-GVMRBlueBandStudy2"
            },
            {
              "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580&participant=Insert_Test_Id",
              "cell_id": 580,
              "auto_start": "https://study.viewpoints.fyi/auto-start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&cell_id=580",
              "short_name": "B",
              "cell_name": "cell_2-GVMRBlueBandStudy2"
            }
          ],
          "auto_start": "https://study.viewpoints.fyi/auto-start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&test=1",
          "standard": "https://study.viewpoints.fyi/start?test=1&access_code=a8ebbf1a-e994-4a17-879c-b3b0b6a2c342&study_id=227&participant=Insert_Test_Id"
        }
      }
    }

    let wrapper = shallow(<LinksTable {...props} />)
    expect(wrapper.exists()).toBe(true);

  });
})







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





