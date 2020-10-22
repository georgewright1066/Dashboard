import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Button from '../../common/components/Button';
import PropTypes from 'prop-types';
import Utils from '../../common/utils/Utils';
import ToolTip from './Tooltip';
import classNames from 'classnames';

const Container = styled.div`
position:relative;
`
  ;

class Task extends React.Component {

  state = { active: false }

  getColor(color) {
    let colorClass;
    switch (color.step_type) {
      case 'Validation Step':
        colorClass = "color1"
        break;
      case 'Cache Page Step':
        colorClass = "color2"
        break;
      case 'Instruction Step':
        colorClass = "color3"
        break;
      case 'Stim Step':
        colorClass = "color4"
        break;
      case 'External Step':
        colorClass = "color5"
        break;
      case 'Embedded Step':
        colorClass = "color6"
        break;
      case 'Question Group Step':
        colorClass = "color7"
        break;
      case 'Calibration Step':
        colorClass = "color8"
        break;
      default:
        colorClass = "color7"
    }
    return colorClass
  }

  onMouseOver(e) {
    e.preventDefault()
    this.setState({ active: true })
  }

  onMouseLeave(e) {
    this.setState({ active: false })
  }

  render() {
    const { task, index, onHamburburgerClick, allowEditing } = this.props;
    const { active } = this.state;
    const color = this.getColor(task)
    return (
      <Draggable draggableId={task.step_order_id} index={index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={classNames('csm__task-container', color)}
          >
            {allowEditing ?
                <Button title="settings" buttonClass="csm__button-edit" handleClick={() => onHamburburgerClick(task.step_order_id)}></Button> :
              null
            }
            <h3>{index + 1} | {task.step_type}</h3>
            <div className="csm__name-container">
              <ToolTip name={task.step_name} active={active} />
            </div>
            <p className="csm__name" onMouseLeave={(e) => this.onMouseLeave(e)} onMouseOver={(e) => this.onMouseOver(e)}>{task.step_name ? Utils.AddThreeDotsIfOver30Characters(task.step_name) : null}</p>
            <p>{task.step_details}</p>

          </Container>
        )
        }

      </Draggable>
    );
  }
}

export default Task;

Task.propTypes = {
  onDeleteClick: PropTypes.func,
  onHamburburgerClick: PropTypes.func,
  index: PropTypes.number,
  task: PropTypes.object,
  allowEditing: PropTypes.bool

};
