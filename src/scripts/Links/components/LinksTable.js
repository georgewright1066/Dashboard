import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ToolTip from '../../common/components/Tooltip';

function LinksTable({ data }) {
  let headings = data.testing_links.cell_links.map(item => {
    if (item.short_name) {
      return { heading: `"${item.short_name}"`, tooltip: 'Direct assignment links' }
    } else {
      return { heading: `"${item.short_name}"`, tooltip: 'Direct assignment links' }
    }
  }).sort((a, b) => {
    const nameA = a.heading.toUpperCase();
    const nameB = b.heading.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  headings = [{ heading: ' ', tooltip: '' }, { heading: 'Link for Study Assignment', tooltip: 'Low balanced links which assign participants to cell with the lowest completes' }, ...headings];
  return (
    <table className="stims table">
      <tbody>
        <tr>
          {headings.map((item, index) => <th className="links__table-headings" key={index}>{index === 0 || index === 1 ? null : "Direct Cell Assignment for"} {item.heading}</th>)}
        </tr>
        <tr>
          <td className="links__table-headings">Testing Links <ToolTip className="top" content="Testing links for internal users." /></td>
          <td>
            <div className="links__item-container">
              <div className="copy-clipboard__container">
                <a target="_blank" rel="noopener noreferrer" href={data.testing_links.standard}>Custom ID</a>
                <CopyToClipboard text={data.testing_links.standard}>
                  <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                </CopyToClipboard>
              </div>
              <div className="copy-clipboard__container">
                <a rel="noopener noreferrer" href={data.testing_links.auto_start}>Link for Live (No Participant Id):</a>
                <CopyToClipboard text={data.testing_links.auto_start}>
                  <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                </CopyToClipboard>
              </div>
            </div>
          </td>
          {data.testing_links.cell_links.map((item, index) => (
            <td key={index}>
              <div className="links__item-container">
                <div className="copy-clipboard__container">
                  <a rel="noopener noreferrer" target="_blank" href={item.standard}>Custom ID</a>
                  <CopyToClipboard text={item.standard}>
                    <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                  </CopyToClipboard>
                </div>
                <div className="copy-clipboard__container">
                  <a rel="noopener noreferrer" target="_blank" href={item.auto_start}>Link for Live (No Participant Id):</a>
                  <CopyToClipboard text={item.auto_start}>
                    <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                  </CopyToClipboard>
                </div>
              </div>
            </td>
          ))}
        </tr>


        {
          data.testing_links.panel_links.map((item, index) => (
            <tr key={index}>
              <td>{item.panel_name} Testing Links</td>
              <td>
                <div className="copy-clipboard__container">
                  <a target="_blank" rel="noopener noreferrer" href={item.standard}>Custom ID</a>
                  <CopyToClipboard text={item.standard}>
                    <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                  </CopyToClipboard>
                </div>
              </td>
              {item.cell_links.map((item1, idx) => (
                <td key={idx}>
                  <div className="copy-clipboard__container">
                    <a rel="noopener noreferrer" target="_blank" href={item1.standard}>Custom ID</a>
                    <CopyToClipboard text={item1.standard}>
                      <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                    </CopyToClipboard>
                  </div>
                </td>
              ))}
            </tr>
          )
          )
        }

        <tr>
          <td className="links__table-headings"> Links <ToolTip className="top" content="Links for fieldwork with participants." />  </td>
          <td>
            <div className="links__item-container">
              <div className="copy-clipboard__container">
                <a rel="noopener noreferrer" target="_blank" href={data.live_links.standard}>Custom ID</a>
                <CopyToClipboard text={data.live_links.standard}>
                  <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                </CopyToClipboard>
              </div>
              <div className="copy-clipboard__container">
                <a rel="noopener noreferrer" target="_blank" href={data.live_links.auto_start}>Link for Live (No Participant Id):</a>
                <CopyToClipboard text={data.live_links.auto_start}>
                  <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                </CopyToClipboard>
              </div>
            </div>
          </td>

          {
            data.live_links.cell_links.map((item, index) => (
              <td key={index}>
                <div className="links__item-container">
                  <div className="copy-clipboard__container">
                    <a rel="noopener noreferrer" target="_blank" href={item.standard}>Custom ID</a>
                    <CopyToClipboard text={item.standard}>
                      <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                    </CopyToClipboard>
                  </div>

                  <div className="copy-clipboard__container">
                    <a rel="noopener noreferrer" target="_blank" href={item.auto_start}>Link for Live (No Participant Id):</a>
                    <CopyToClipboard text={item.auto_start}>
                      <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                    </CopyToClipboard>
                  </div>
                </div>
              </td>
            ))
          }
        </tr>

        {
          data.live_links.panel_links.map((item, index) => (
            <tr key={index}>
              <td>{item.panel_name} Links</td>
              <td>
                <div className="copy-clipboard__container">
                  <a rel="noopener noreferrer" target="_blank" href={item.standard}>Custom ID</a>
                  <CopyToClipboard text={item.standard}>
                    <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                  </CopyToClipboard>
                </div>
              </td>
              {item.cell_links.map((item1, idx) => (
                <td key={idx}>
                  <div className="copy-clipboard__container">
                    <a rel="noopener noreferrer" target="_blank" href={item1.standard}>Custom ID</a>
                    <CopyToClipboard text={item1.standard}>
                      <button title="Copy to Clipboard" className="csm__button-delete copy"></button>
                    </CopyToClipboard>
                  </div>
                </td>
              ))}
            </tr>
          )
          )
        }

      </tbody>
    </table >
  );
}

export default LinksTable;


LinksTable.propTypes = {
  loading: PropTypes.bool,
  batchData: PropTypes.array

};
