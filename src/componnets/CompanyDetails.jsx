import React from "react";
import TimelineContainer from "./TimelineContainer";
import CompanyIntroduction from "./CompanyIntroduction";

const CompanyDetails = ({
  targetRef,
  companiesDetail,
  getDecodedCompanyName,
}) => {
  return (
    <div ref={targetRef}>
      {companiesDetail
        .filter((item) => item.name === getDecodedCompanyName)
        .map((company, index) => (
          <div key={index}>
            <div className="container border pt-4 pb-4 ps-4 pe-4 border-radius mt-4">
              <h6 className="mb-4 text-start font-size">Ipo Details</h6>
              <div className="container">
                <div className="row border border-radius">
                  <div className="col-xs-6 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Issue size</p>
                          {company.issueSize}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">price range</p>
                          {company.priceRange}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-12 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Minimum amount</p>
                          {company.minInvestment}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-12 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Lot size</p>
                          {company.lotSize}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-12 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Issue date</p>
                          {company.issueDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-12 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Listed On</p>{" "}
                          {company.listedOn}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-12 col-sm-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Listing Price</p>
                          {company.listingPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-md-3 p-2">
                    <div className="ipoDetailsContainer">
                      <div className="detailflex-container">
                        <div className="font-size">
                          <p className="sub-detail">Listing Gain</p>
                          {company.listingGain}(
                          <span style={{ color: "#eb5f50" }}>10.0%</span>)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container border pt-4 pb-4 ps-4 pe-4 border-radius mt-4">
              <h6 className="mb-4 text-start font-size">Ipo TimeLine</h6>
              <TimelineContainer />
            </div>
            <div className="container border pt-4 pb-4 ps-4 pe-4 border-radius mt-4 mb-5">
              <CompanyIntroduction />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CompanyDetails;
