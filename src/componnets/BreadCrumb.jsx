import React from "react";

const BreadCrumb = () => {
  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Market Watch
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
