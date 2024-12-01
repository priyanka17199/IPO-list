import React from "react";
import { Table } from "react-bootstrap";
import companies from "../dataset/ipoListingDataset";
import "../styles/ipoList.css";
import { useNavigate } from "react-router-dom";
const IpoList = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h5 className="mb-4">Open/Upcomming Ipo List</h5>
      <Table bordered hover>
        <thead className="header">
          <tr>
            <th>Company/Issue Date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min Invest/Qty</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(`/ipoDetail/${company.name}`)}
            >
              <td className="font-size">
                <div className="flex-container">
                  <div>
                    <img
                      src={company.logo}
                      alt={company.name}
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    {company.name} <p className="sub-detail">{company.date}</p>
                  </div>
                </div>
              </td>
              <td className="font-size">{company.issueSize}</td>
              <td className="font-size">{company.priceRange}</td>
              <td className="font-size">
                {company.minInvestment}{" "}
                <p className="sub-detail">{company.details}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default IpoList;
