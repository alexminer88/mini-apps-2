import React from 'react';
import ReactPaginate from 'react-paginate';

const ResultsTable = ({ historicData, pageCount, pageRangeDisplayed, marginPagesDisplayed }) => {

  return (
    <div>
      {historicData.map((el) => {
        return <div>
          {el.data}
          {el.description}
        </div>
      })}
      <ReactPaginate pageCount={pageCount} pageRangeDisplayed={pageRangeDisplayed} marginPagesDisplayed={marginPagesDisplayed} />
    </div>
  )

}

export default ResultsTable;