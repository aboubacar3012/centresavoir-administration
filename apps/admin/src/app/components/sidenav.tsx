import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SideNav: React.FC<Props> = () => {
  return (
    <>
      <h3>Administration</h3>

      <hr />
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action active">
          Stacks
        </a>
        <a href="#" className="list-group-item list-group-item-action " aria-current="true">
          Etudiants
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Campus
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Batch
        </a>
      </div>
    </>
  );
};

export default SideNav;
