import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import Button from '../../common/components/Button';

function StimTable({ stims, onKpiClick, onFeatureClick, internalBatchId, vendorId, downloadParticipantData, downloadFeatureData, downloadStimData }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <React.Fragment>
      {isLoading ? (<LoadingSpinner />) : (
        <table className="table study">
          <tbody>
            <tr>
              <th>Batch </th>
            </tr>
            {stims.map((item, index) => {
              const hasNoFeatures = item.feature_data.length === 0;
              return (
                <tr key={index}>
                  <td >
                    <div className="study__image-wrapper">
                      <h4>{item.identifier} {item.name ? `: ${item.name}` : null}</h4>
                    </div>
                    <div className="study__link-container">
                      <span><Link onClick={() => onKpiClick(internalBatchId, vendorId, item.internal_stim_id, 'KPI', index)} to={`/my_batches/batch_overview/${internalBatchId}&${vendorId}/batch_report/kpi?id=${internalBatchId}&vendorId=${vendorId}`} > Kpi Report</Link></span>
                      {
                        !hasNoFeatures ? <span><Link onClick={() => onFeatureClick(internalBatchId, vendorId, item.internal_stim_id, 'FEATURE', index)} to={`/my_batches/batch_overview/${internalBatchId}&${vendorId}/batch_report/feature`}>Feature Report</Link></span> : null
                      }
                    </div>

                    <Button
                      buttonClass="button-primary with-margin"
                      text="Download Participant Data"
                      handleClick={() => downloadParticipantData(vendorId, internalBatchId, item.internal_step_id, item.internal_stim_id, 'DOWNLOAD')}
                      title="Download questionnaire data."

                    />

                    <Button
                      buttonClass="button-primary with-margin"
                      text="Download Stim Data"
                      handleClick={() => downloadStimData(vendorId, internalBatchId, item.internal_step_id, item.internal_stim_id, 'DOWNLOAD')}
                      title="Download eye-tracking data for each stimulus."

                    />
                    <Button
                      buttonClass="button-primary with-margin"
                      text="Download Feature Data"
                      handleClick={() => downloadFeatureData(vendorId, internalBatchId, item.internal_step_id, item.internal_stim_id, 'DOWNLOAD')}
                      title="Download eye tracking data for each AOI."


                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )
      }
    </React.Fragment>
  );
};

StimTable.propTypes = {
  headings: propTypes.object,
  kpiData: propTypes.object
};


export default StimTable;


