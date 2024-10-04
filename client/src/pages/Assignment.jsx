// import React from "react";
import { useState } from "react";
import UploadSubmission from "../components/UploadSubmission";

const Assignment = ({ assignments }) => {
  return (
    <>
      <div className="container mx-auto p-4">
        <table className="w-full bg-white shadow-md rounded-lg rounded-b-none overflow-hidden">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-4 py-2 text-left">Documents</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Submit</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <>
                <tr
                  key={assignment.id}
                  // className={`${
                  //   index % 2 !== 0 ? "bg-gray-300" : "bg-white"
                  // } hover:border hover:border-gray-500`}

                  className={index % 2 !== 0 ? "bg-gray-300" : "bg-white"}
                >
                  <td className="px-4 py-2 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {assignment.name}
                  </td>
                  <td className="px-4 py-2">{assignment.subject}</td>
                  <td className="px-4 py-2">{assignment.date}</td>
                  <td className="px-4 py-2">{assignment.dueDate}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        assignment.status === "Submitted"
                          ? "bg-green-200 text-green-800"
                          : assignment.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors">
                      Upload
                    </button>
                  </td>
                </tr>
                {index === 0 ? (
                  <td colSpan={6}>
                    <UploadSubmission />
                  </td>
                ) : (
                  <></>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Assignment;
