import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const routes = [
  { path: '/my_studies/overview/:id/study', breadcrumb: 'Study' },
  { path: '/my_studies/overview', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id/step_id/:stepId/stim_id/:stimId/kpi', breadcrumb: 'KPI' },
  { path: '/feature_analysis/:studyId/study/cell_id/:cellId/step_id/:stepId', breadcrumb: 'Feature Analysis' },
  { path: '/my_studies/overview/:studyId', breadcrumb: 'Overview' },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id/step_id/:stepId/stim_id/:stimId', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id/step_id/:stepId/stim_id', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id/step_id', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id', breadcrumb: null },
  { path: '/my_studies/overview', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id', breadcrumb: null },
  { path: '/stims/aoi/:id', breadcrumb: null },
  { path: '/batches/aoi/:id', breadcrumb: null },
  { path: '/batch_stim_list/aoi/:id', breadcrumb: null },
  { path: '/batch_stim_list', breadcrumb: 'Batch Stim List'},
  { path: '/cell_id', breadcrumb: null },
  { path: '/step_id', breadcrumb: null },
  { path: '/my_studies/overview/:studyId/study/cell_id/:cell_id/step_id/:stepId', breadcrumb: null },
  { path: '/attention_report', breadcrumb: 'Attention Report' },
  { path: '/my_batches/batch_overview/:id', breadcrumb: 'Batch Overview' },
  { path: '/my_batches/batch_overview/:id/batch_report', breadcrumb: 'Batch Report' },
  { path: '/my_batches/batch_overview', breadcrumb: null },
  { path: '/my_batches', breadcrumb: 'My Batches' },
  { path: '/my_studies/overview/:id', breadcrumb: null },
  { path: '/my_studies', breadcrumb:'My Studies' },
  { path: '/', breadcrumb: 'Home' },



];

const Breadcrumbs = ({ breadcrumbs }) => (

  <div className="breadcrumbs">
    <Link to=""><span></span></Link>
    {breadcrumbs.map((breadcrumb, index) => {
      return (
        <span key={index}>
          {breadcrumbs.length === 1 ? (index === 0) && <span id="pointer-first-home"><Link to={breadcrumb.props.match.url}>{breadcrumb}</Link></span> : (index === 0) && <span id="pointer-first"><Link to={breadcrumb.props.match.url}>{breadcrumb}</Link></span>}
          {(index < breadcrumbs.length - 1 && index > 0) && <span id="pointer-grey"><Link to={breadcrumb.props.match.url}>{breadcrumb}</Link></span>}
          {(index === breadcrumbs.length - 1 && index > 0) && <span id="pointer-blue"><Link to={breadcrumb.props.match.url}>{breadcrumb}</Link></span>}
        </span>
      );
    }

    )}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);


