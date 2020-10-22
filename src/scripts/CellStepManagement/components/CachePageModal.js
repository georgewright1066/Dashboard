import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../../common/components/Button';

function CachePage({ active, onCachePageSumbit, closeCacheModal }) {
  const [value, setValue] = useState({ cacheUrl: '', cacheName: '' })

  function onInputChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault();
    onCachePageSumbit(value.cacheUrl, value.cacheName);
    setValue({ ...value, cacheUrl: '', cacheName: '' })
    closeCacheModal()
  }

  return (
    <div className={classNames('cachepage-modal', { 'active': active })}>
      <Button handleClick={() => closeCacheModal()} buttonClass="filter__exit-button" />
      <div className="my-details__form edit-audience">

        <div className="csm-modal-form-edit-delete__label-container">
          <label className="edit-audience__label" htmlFor="url">URL</label>
        </div>
        <input onChange={(e) => onInputChange(e)} name="cacheUrl" type="text" value={value.cacheUrl} className={'form-control'} />

        <div className="csm-modal-form-edit-delete__label-container">
          <label className="edit-audience__label" htmlFor="code">Name</label>
        </div>
        <input onChange={(e) => onInputChange(e)} name="cacheName" type="name" value={value.cacheName} className={'form-control'} />

        <button onClick={(e) => onSubmit(e)} className="button-primary my-details__button" type="submit">
          Submit
        </button>
      </div>
    </div>
  )
}

export default CachePage;
