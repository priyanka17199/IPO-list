import React from "react";
import "../styles/ipoList.css";
import { CiSquareChevLeft } from "react-icons/ci";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { usePDF } from "react-to-pdf";
import { useLocation, useNavigate } from "react-router-dom";
import companiesDetail from "../dataset/ipoDetailDataset";
import BreadCrumb from "./BreadCrumb";
import CompanyDetails from "./CompanyDetails";

const IpoDetail = () => {
  const { toPDF, targetRef } = usePDF({ filename: "ipoDetail.pdf" });
  const navigate = useNavigate();
  const location = useLocation();
  const getCompanyName = location.pathname.split("/").pop();
  const getDecodedCompanyName = decodeURIComponent(getCompanyName);
  const company = companiesDetail.find(
    (item) => item.name === getDecodedCompanyName
  );

  return (
    <>
      <div className="container mt-3">
        <BreadCrumb />
        <div className="logoContainer">
          <div className="companylogo">
            <CiSquareChevLeft
              size={45}
              color="#14143c"
              onClick={() => navigate("/")}
              className="cursor-pointer"
            />
            {company && (
              <img
                src={company.logo}
                alt={"oyoroom"}
                height={35}
                width={90}
                className="img-thumbnail"
                style={{ marginLeft: "15px" }}
              />
            )}
          </div>
          <div className="apply_btnContainer">
            <BsFileEarmarkArrowDown
              size={30}
              color="#14143c"
              onClick={() => toPDF()}
              className="cursor-pointer"
            />
            <CompanyDetails
              targetRef={targetRef}
              companiesDetail={companiesDetail}
              getDecodedCompanyName={getDecodedCompanyName}
            />
            <button className="btn apply_btn">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpoDetail;
