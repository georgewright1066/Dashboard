import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import classNames from 'classnames';


const TaskList = styled.div`
`;

const Container = styled.div`
`;

class Column extends React.Component {
  state = {
    title: this.props.column.cellName,
    titleFormFocus: false,
    shortNameFocus: false,
    shortName: this.props.column.shortName || ''

  }

  onTitleType = (e) => {
    const title = e.target.value;
    this.setState({ title })
  }

  onShortNameType = (e) => {
    const shortName = e.target.value;
    this.setState({ shortName })
  }

  onTitleClickToggle = () => {
    this.setState(prevState => ({ titleFormFocus: !prevState.titleFormFocus, shortNameFocus: !prevState.shortNameFocus }))
  }

  onTitleChange = (e, TYPE) => {
    const { column, onTitleChange } = this.props;

    const { title, shortName } = this.state;
    if (TYPE === 'TITLE') {
      onTitleChange(column.id, title, TYPE)
    } else {
      onTitleChange(column.id, shortName, TYPE)
    }
    this.onTitleClickToggle()

  }


  render() {
    const { column, handleClick, tasks, onDeleteClick, onHamburburgerClick, allowEditing } = this.props;
    const { titleFormFocus, shortNameFocus } = this.state;
    return (
      <Container>
        <Droppable droppableId={JSON.stringify(column.id)}>
          {provided => (
            <TaskList className="csm__task-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div>
                <div>
                  <h2 className={classNames('csm__title', { 'hidden': titleFormFocus })} onClick={this.onTitleClickToggle} >{column.cellName}</h2>
                  <Input className={classNames('csm__title-input', { 'hidden': !titleFormFocus })} value={this.state.title} onBlur={(e) => this.onTitleChange(e, 'TITLE')} onChange={this.onTitleType} />
                </div>
                <div>
                  <h4 className={classNames('csm__sub-title', { 'hidden': shortNameFocus })} onClick={this.onTitleClickToggle}>{column.shortName}</h4>
                  <Input className={classNames('csm__title-input subtitle', { 'hidden': !shortNameFocus })} value={this.state.shortName} onBlur={(e) => this.onTitleChange(e, 'SUBTITLE')} onChange={this.onShortNameType} />
                </div>
              </div>

              {tasks.map((task, index) => (
                <Task
                  onDeleteClick={(id) => onDeleteClick(id, column.id)}
                  onHamburburgerClick={(id) => onHamburburgerClick(id, column.id)}
                  key={task.step_order_id}
                  task={task}
                  index={index}
                  allowEditing={allowEditing}
                />
              ))}
              {provided.placeholder}

            </TaskList>
          )}
        </Droppable>
        {
          allowEditing ?
            <div className="csm__add-step-container">
              <Button handleClick={() => handleClick(column.id)} buttonClass="csm__button-add" />
            </div> :
            null
        }

      </Container >);
  }
}

export default Column;
