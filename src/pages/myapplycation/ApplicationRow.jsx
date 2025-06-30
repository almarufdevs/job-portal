



import React from 'react';

const ApplicationRow = ({ application, index }) => {
  const { name, country, company, position, location, image } = application;

  return (
    <tr className="hover:bg-amber-100">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={image || "/Team1.jpg"}
                alt={name || "User Avatar"}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name || "Anonymous"}</div>
            <div className="text-sm opacity-50">{country || "Bangladesh"}</div>
          </div>
        </div>
      </td>
      <td>
        {company || "Unknown Company"}
        <br />
        <span className="badge badge-ghost badge-sm">
          {position || "Unknown Position"}
        </span>
      </td>
      <td>{location || "N/A"}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Details</button>
      </th>
    </tr>
  );
};

export default ApplicationRow;
