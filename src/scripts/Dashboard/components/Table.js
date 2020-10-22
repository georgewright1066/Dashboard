import React, { Component } from 'react';
import TableCell from './TableCell';
import PropTypes from 'prop-types';
import Button from '../../common/components/Button';
import classNames from 'classnames';

class DashboardTable extends Component {

  render() {
    const { onDecendingClick, onAscendingClick, currentSort, type } = this.props;
    const activeTabElement = type ? `${currentSort}-${type.toLowerCase()}` : null

    return (
      <table className="table">
        <tbody>
          <tr>
            <th>
              <div className="table__top_container" id="name">
                <h4>Name</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'name-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'name-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="table__top_container" id="environment">
                <h4>Environment</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'environment-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'environment-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="table__top_container" id="media">
                <h4>Media</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'media-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'media-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th><h4>Live</h4>
            </th>
            <th><h4>Completed</h4>
            </th>
            <th>
              <div className="table__top_container" id="cell_count">
                <h4>No of Cells</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'cell_count-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'cell_count-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="table__top_container" id="participants_requested">
                <h4>Participants Requested</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'participants_requested-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'participants_requested-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="table__top_container"  id="participants_returned">
                <h4>Participants Returned</h4>
                <div className="sorting__container">
                  <Button
                    buttonClass={classNames('sorting__container-button--decending sorting__container-button', { 'active': activeTabElement === 'participants_returned-decending' ? true : false })}
                    handleClick={onDecendingClick}
                    text="Decending"
                  />
                  <Button
                    buttonClass={classNames('sorting__container-button--ascending sorting__container-button', { 'active': activeTabElement === 'participants_returned-ascending' ? true : false })}
                    handleClick={onAscendingClick}
                    text="Ascending"
                  />
                </div>
              </div>
            </th>
            <th><h4>Fieldwork Start</h4>
            </th>
            <th><h4>Fieldwork End</h4>
            </th>
          </tr>

          {this.props.studies.map((item, key) =>
            <TableCell
              onClick={this.onClick}
              id={item.study_id}
              title={item.name}
              environment={item.environment}
              media={item.media}
              live={item.live}
              completed={item.completed}
              cells={item.cell_count}
              participants_requested={item.participants_requested}
              participants_returned={item.participants_returned}
              data_collection_start={item.data_collection_start}
              data_collection_end={item.data_collection_end}
              key={key}
            />
          )}
        </tbody>
      </table>
    );
  }
}

DashboardTable.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  environment: PropTypes.string,
  media: PropTypes.string,
  live: PropTypes.bool,
  completed: PropTypes.bool,
  cells: PropTypes.number,
  participants_requested: PropTypes.number,
  participants_returned: PropTypes.number,
  data_collection_start: PropTypes.string,
  data_collection_end: PropTypes.string,
  studies: PropTypes.array,
  onDecendingClick: PropTypes.func,
  onAscendingClick: PropTypes.func
};

export default DashboardTable;
