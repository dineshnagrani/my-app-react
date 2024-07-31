// Theme
import { AgGridReact } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState } from "react";


// Create new GridExample component
const GridTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950,year: 1992 },
    { make: "Ford", model: "F-Series", price: 33850,year: 1994 },
    { make: "Toyota", model: "Corolla", price: 29600,year: 1998 },
    { make: "Mercedes", model: "EQA", price: 48890,year: 1998 },
    { make: "Fiat", model: "500", price: 15774,year: 1998 },
    { make: "Nissan", model: "Juke", price: 20675,year: 2007 },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "year" },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={
        "ag-theme-quartz"
      }
      style={{ width: "100%", height: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default GridTable
