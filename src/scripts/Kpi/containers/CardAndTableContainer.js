import React from 'react';
import Table from '../../BatchKpi/components/KpiTable';
import Table1 from '../../BatchKpi/components/KpiTable.1';
import propTypes from 'prop-types';

const CardAndTableContainer = ({ kpiData }) => {
  return (
    <div className="kpi__table-container">
      <h3>Attention Metrics</h3>
      <Table
        headings={['Metric', 'Actual', 'Norms']}
        reportData={kpiData}
        className="kpi-table"
      />
      <Table1
        headings={['Metric', 'Actual']}
        reportData={kpiData}
        className="kpi-table"
      />
    </div>
  );
};


CardAndTableContainer.propTypes = {
  stimName: propTypes.string,
  kpiData: propTypes.object,
  stimType: propTypes.string,
  headings: propTypes.object
};


export default CardAndTableContainer;
