import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import NumericCellEditor from "./numeric-cell-editor.component.js";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const GridComponent = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  const cellEditorSelector = (params) => {
    // if (params.data.type === 'age') {
      return {
        component: NumericCellEditor,
      };
    // }
    // if (params.data.type === 'gender') {
    //   return {
    //     component: 'agRichSelectCellEditor',
    //     params: {
    //       values: ['Male', 'Female'],
    //     },
    //     popup: true,
    //   };
    // }
    // if (params.data.type === 'mood') {
    //   return {
    //     component: MoodEditor,
    //     popup: true,
    //     popupPosition: 'under',
    //   };
    // }
    // return undefined;
  };

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "make",
      filter: true,      
      editable: true,
      //   width: "100%",
    },
    {
      field: "model",
      filter: true,
      //   width: "100%",
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Test", "Test 2", "Test 3"],
      },
    },
    {
      field: "price",
      //   width: "100%",
      cellRenderer: (param) => {
        const value = param.value;
        return <label>{value}</label>;
      },
      editable: true,
      cellEditorSelector: cellEditorSelector,
    //   cellEditor: NumericCellEditor,
      //   cellEditor: "agTextCellEditor",
      //   cellEditorParams: {
      //     values: ["Test", "Test 2", "Test 3"],
      //   },
    },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example of consuming Grid Event
  //   const cellClickedListener = useCallback((event) => {
  //     console.log("cellClicked", event);
  //   }, []);

  //   const onCellKeyDown = useCallback((event) => {
  //     const { colDef } = event;
  //     const { key } = event.event;
  //     if (key === "Enter" && colDef.onEnterEvent)
  //       console.log("on enter", event, colDef);
  //   }, []);

  // Example load data from server
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  const onGridReady = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit({
      // defaultMinWidth: 100,
      // columnLimits: [{ key: 'country', minWidth: 900 }],
    });
  }, []);

  return (
    <div>
      {/* Example using Grid's API */}
      <button onClick={buttonListener}>Push Me</button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: "100vw", height: 500 }}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onGridReady={onGridReady}
        />
        {/* onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          onCellKeyDown={onCellKeyDown} */}
      </div>
    </div>
  );
};
export default GridComponent;
