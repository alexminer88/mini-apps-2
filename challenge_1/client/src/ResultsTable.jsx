import React from 'react';
import ReactPaginate from 'react-paginate';
// import HistoricDataEntry from './HistoricDataEntry.jsx'

const ResultsTable = ({ historicData, pageCount, pageRangeDisplayed, marginPagesDisplayed, handlePageClick, editable, editButton }) => {

  return (
    <>
      <ReactPaginate 
        pageCount={pageCount} 
        pageRangeDisplayed={pageRangeDisplayed} 
        marginPagesDisplayed={marginPagesDisplayed}
        onPageChange={handlePageClick}
      />
      <table>
        <tr>
          <td>Date</td>
          <td>Description</td>
        </tr>
      </table>
      {

        historicData.map((el, index) => {

          return <tr className="historic-data-entry" key={index} >
                  <td contentEditable={editable} >{el.date}</td>
                  <td contentEditable={editable}>{el.description}</td>
                  {/* <EditButton date={el.date} desc={el.description} /> */}
                </tr>
         
        })
      }
    </>
  );
};

export default ResultsTable;
