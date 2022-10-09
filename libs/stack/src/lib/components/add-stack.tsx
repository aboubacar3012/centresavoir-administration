import React from 'react';
import AddStackModal from './add-stack-modal';

export const AddStack = () => {
  return (
    <div className="card" style={{ width: '90%', margin: 'auto' }}>
      <div className="card-body">
        <h2>Stacks</h2>
        <div className="d-flex align-items-center">
          <AddStackModal />
          <select className="form-select m-3" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select m-3" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select m-3" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddStack;
