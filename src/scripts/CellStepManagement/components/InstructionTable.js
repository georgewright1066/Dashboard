import React from 'react';
import Button from '../../common/components/Button';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../common/components/LoadingSpinner'

class Table extends React.Component {

    render() {
        const { loading, data, onClick } = this.props;

        if (loading) {
            return <LoadingSpinner />
        }
        return (
            <table className="table study">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Add</th>

                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td >{item.step_id}</td>
                            <td >{item.instruction_name}</td>
                            <td ><Button handleClick={() => onClick(item.step_id)} buttonClass="button-primary" text="Add" /></td>
                        </tr>);

                })}
                </tbody>
            </table>
        );
    }
}

export default Table;
Table.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
    onClick: PropTypes.func
};