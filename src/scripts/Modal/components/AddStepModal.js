import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames'
import Button from '../../common/components/Button';
import URL_REGEX from '../../CellStepManagement/duck/constants';
import External from '../../CellStepManagement/components/External';
import CachePage from '../../CellStepManagement/components/CachePage';
import CachePageModal from '../../CellStepManagement/components/CachePageModal';

import StimTable from '../../CellStepManagement/components/StimTable';
import QuestionTable from '../../CellStepManagement/components/QuestionTable';
import InstructionTable from '../../CellStepManagement/components/InstructionTable';
import ExternalTable from '../../CellStepManagement/components/ExternalTable';
import EmbeddedTable from '../../CellStepManagement/components/EmbeddedTable';
import { CellStepManagementOperations } from '../../CellStepManagement/duck/index';
import SearchBar from '../../Dashboard/components/Search'
import PrettyDropDown from "../../common/components/PrettyDropdown";

class Form extends React.Component {

  state = {
    value: 'Please Select',
    stepType: '',
    error: false,
    step: 0,
    param: '',
    secondaryValue: 'Please Select',
    url: '',
    name: '',
    submitted: false,
    newItem: false,
    studyId: undefined
  }

  componentDidMount() {
    this.setState({ submitted: false })
  }

  onChange = (e) => {
    const url = e.target.value
    this.setState({ url })
  }

  onParamChange = (e) => {
    const param = e.target.value
    this.setState({ param })
  }

  onNameChange = (e) => {
    const name = e.target.value
    this.setState({ name })
  }

  handleClick = (id, value, studyId, cacheId) => {

    const { stepType, param, url, name } = this.state;

    switch (stepType) {
      case ('Validation'):
        this.onHandleClickComplete(id, value, studyId, stepType, null)
        break;
      case ('Calibration'):
        this.onHandleClickComplete(id, value, studyId, stepType, null)
        break;
      case ('Question'):
        value = `question:${id}`
        this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
        break;
      case ('Embedded'):
        if (this.state.newItem === true) {
          if (!this.validateUrl(url)) {
            this.setState({ error: true })
          } else {
            value = url;
            this.onHandleClickComplete(id, value, studyId, stepType, param, name, this.state.newItem);
          }
          break;
        } else {
          value = `embedded:${id}`
          this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
          break;
        }
      case ('External'):
        if (this.state.newItem === true) {
          if (!this.validateUrl(url)) {
            this.setState({ error: true })
          } else {
            value = url;
            this.onHandleClickComplete(id, value, studyId, stepType, param, name, this.state.newItem);
          }
          break;
        } else {
          value = `external:${id}`
          this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
          break;
        }
      case 'Instruction':
        value = `instruction:${id}`
        this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
        break;
      case 'Cache Page':
        value = `cache:${id}`
        this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
        break;
      case "Stim":
        value = `stim:${id}`
        this.onHandleClickComplete(id, value, studyId, stepType, cacheId)
        break
      default:
        this.setState({ error: true })
    }
  }

  onHandleClickComplete(id, value, studyId, stepType, cacheId, name, newItem=false) {
    this.props.addTask(id, value, studyId, stepType, cacheId, name, newItem)
    this.resetForm()
  }


  onSelectItem = (stepType) => {
    this.setState({ submitted: false})
    var elems = document.getElementsByTagName("input");
    var l = elems.length;
    for (var i = 0; i < l; ++i){
      elems[i].value="";
    }
    this.props.onSearch("");
    this.props.resetStateToLoading();
    const studyId = localStorage.getItem('studyId');
    this.setState({ stepType: stepType, value: stepType, studyId: studyId })
    this.props.onSelectItem(stepType, studyId)
    if (stepType === 'External' || 'Instuction') {
      this.setState({ error: false })
    }

  }

  validateUrl(url) {
    return URL_REGEX.test(url);
  }

  resetForm() {
    this.props.closeModal()
    this.setState({ stepType: '', value: 'Please Select', url: '', error: false, submitted: true, newItem: false, secondaryValue: 'Please Select'})
  }

  toggleItem(){
    this.setState({
      newItem: !this.state.newItem
    })
  }



  onCachePageSumbit = (cacheUrl, cacheName) => {

    this.props.onCachePageSumbit(cacheUrl, cacheName, this.state.studyId)
  }

  render() {
    const { modalOpen, id, dataFromPrimarySelection, studyId, loading, options, onSearch, openCacheModal, closeCacheModal, cachePageModalOpen } = this.props;
    const { value, stepType, error, url } = this.state;
    const showSubmitButton = (stepType === 'Calibration') || (stepType === 'Validation') ? true : false;
    return (
      <form className={classNames('csm-modal-form large cell-type', { 'active': modalOpen })}>
        <h2>Choose step type</h2>
        <Button handleClick={() => this.resetForm()} buttonClass="filter__exit-button" />
        <div className="csm-modal-form__content-container">
          <PrettyDropDown submitted={this.state.submitted} title={this.state.value} onSelectItem={(item) => this.onSelectItem(item, studyId)} options={options} />
          {
            (() => {
              switch (stepType) {
                case ('External'):
                  if (this.state.newItem === true) {
                    return (<React.Fragment><Button text="Select Existing Item" buttonClass="button-primary show-study__button" handleClick={() => this.toggleItem()} /><External showParamInput={true} value={url} onChange={this.onChange} onParamChange={this.onParamChange} onNameChange={this.onNameChange} /><Button handleClick={() => this.handleClick(id, value, studyId)} text="Submit" buttonClass="button-primary show-study__button" /></React.Fragment>);
                  } else {
                    return (<React.Fragment><Button text="Add New Item" buttonClass="button-primary show-study__button" handleClick={() => this.toggleItem()} /><SearchBar className="csm__input-step" id="searchBar" onChange={(e) => onSearch(e.target.value)} /> <ExternalTable onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} data={dataFromPrimarySelection} /></React.Fragment>);
                  }
                case ('Embedded'):
                  if (this.state.newItem === true) {
                    return (<React.Fragment><Button text="Select Existing Item" buttonClass="button-primary show-study__button" handleClick={() => this.toggleItem()} /><External showParamInput={true} value={url} onChange={this.onChange} onParamChange={this.onParamChange} onNameChange={this.onNameChange} /><Button handleClick={() => this.handleClick(id, value, studyId)} text="Submit" buttonClass="button-primary show-study__button" /></React.Fragment>);
                  } else {
                    return (<React.Fragment><Button text="Add New Item" buttonClass="button-primary show-study__button" handleClick={() => this.toggleItem()} /><SearchBar className="csm__input-step" onChange={(e) => onSearch(e.target.value)} /> <EmbeddedTable onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} data={dataFromPrimarySelection} /></React.Fragment>);
                  }
                case "Instruction":
                  return (<React.Fragment><SearchBar className="csm__input-step" onChange={(e) => onSearch(e.target.value)} /> <InstructionTable onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} data={dataFromPrimarySelection} /></React.Fragment>)
                case 'Cache Page':
                  return (<React.Fragment>
                    <Button text="Order a Cache Page" buttonClass="button-primary show-study__button" handleClick={() => openCacheModal()} />
                    <CachePageModal onCachePageSumbit={this.onCachePageSumbit} closeCacheModal={closeCacheModal} active={cachePageModalOpen} />
                    <SearchBar className="csm__input-step" onChange={(e) => onSearch(e.target.value)} />
                    <CachePage onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} cachePage={dataFromPrimarySelection} />
                  </React.Fragment>)
                case "Stim":
                  return (<React.Fragment><SearchBar className="csm__input-step" onChange={(e) => onSearch(e.target.value)} /> <StimTable onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} data={dataFromPrimarySelection} /></React.Fragment>)
                case "Question":
                  return (<React.Fragment><SearchBar className="csm__input-step" onChange={(e) => onSearch(e.target.value)} /> <QuestionTable onClick={(cacheId) => this.handleClick(id, stepType, studyId, cacheId)} loading={loading} data={dataFromPrimarySelection} /></React.Fragment>)
                default:
                  return null
              }
            }
            )()
          }
          <div className={classNames('csm__error-message', { 'active': error })}>Please enter a valid URL</div>
          {showSubmitButton ?
            <Button handleClick={() => this.handleClick(id, value, studyId)} text="Submit" buttonClass="button-primary show-study__button" /> :
            null
          }

        </div>
      </form>
    );
  }
}



const sortFuncs = {
  instruction: (data, term, loading) => {
    return sortFuncs.filter(data, term, 'instruction_name', loading)
  },
  default: (data) => {
    return data
  },
  stim: (data, term) => {
    return sortFuncs.cache(data, term)
  },
  cache: (data, term, loading) => {
    return sortFuncs.filter(data, term, 'name', loading)
  },
  validation: (data) => {
    return data
  },
  calibration: (data) => {
    return data
  },
  question: (data, term, loading) => {
    return sortFuncs.cache(data, term)
  },
  external: (data, term, loading) => {
    return sortFuncs.cache(data, term)
  },
  embedded: (data, term) => {
    return sortFuncs.cache(data, term)
  },

  filter: (data, term, obj) => {
    try {
      return data.filter((val) => val[obj].toUpperCase().includes(term.toUpperCase()));
    } catch (e) {
      return data
    }
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => (dispatch(CellStepManagementOperations.closeModal())),
    resetStateToLoading: () => dispatch(CellStepManagementOperations.resetStateToLoading()),
    onSelectItem: (item, id, studyId) => (dispatch(CellStepManagementOperations.onSelectItem(item, id, studyId))),
    addTask: (id, value, studyId, item, cacheId, name, newItem) => (dispatch(CellStepManagementOperations.addTask(id, value, studyId, item, cacheId, name, newItem))),
    onSearch: (value) => (dispatch(CellStepManagementOperations.onSearch(value))),
    closeCacheModal: () => (dispatch(CellStepManagementOperations.closeCacheModal())),
    openCacheModal: () => (dispatch(CellStepManagementOperations.openCacheModal())),
    onCachePageSumbit: (url, name, studyId) => (dispatch(CellStepManagementOperations.onCachePageSumbit(url, name, studyId))),

  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    modalOpen: state.cellStepManagement.modalOpen,
    id: state.cellStepManagement.id,
    loading: state.cellStepManagement.dropdownLoading,
    options: state.cellStepManagement.initialDropDown,
    dataFromPrimarySelection: sortFuncs[state.cellStepManagement.stepType](state.cellStepManagement.dataFromPrimarySelection, state.cellStepManagement.searchTerm),
    cachePageModalOpen: state.cellStepManagement.cachePageModalOpen
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);


