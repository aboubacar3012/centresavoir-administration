import React from 'react';

export const addStackModal = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        ➕
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajouter un Stack
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nom de la stack" />
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Duree en semaines
                  </option>
                  <option value="1">1 Semaine</option>
                  <option value="2">2 Semaines</option>
                  <option value="3">3 Semaines</option>
                  <option value="4">4 Semaine</option>
                  <option value="5">5 Semaines</option>
                  <option value="6">6 Semaines</option>
                  <option value="7">7 Semaine</option>
                  <option value="8">8 Semaines</option>
                  <option value="9">9 Semaines</option>
                  <option value="10">10 Semaines</option>
                  <option value="11">11 Semaines</option>
                  <option value="12">12 Semaines</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Mode
                  </option>
                  <option value="1">Temps Plein</option>
                  <option value="2">Temps Partiel</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Annuler
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                💾 Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addStackModal;
