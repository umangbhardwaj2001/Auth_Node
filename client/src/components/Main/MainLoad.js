import "jquery";

import "popper.js/dist/umd/popper";

import "bootstrap/dist/js/bootstrap";

import "bootstrap/dist/css/bootstrap.css";

const MainLoad = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default MainLoad;
