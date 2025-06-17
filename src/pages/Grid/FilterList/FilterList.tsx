"use client";

import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  GridReadyEvent,
  ISetFilterParams,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
import {
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  FiltersToolPanelModule,
  SetFilterModule,
} from "ag-grid-enterprise";
import { GridContainer } from "./FilterList.styles";
import { PageContent, PageTitle } from "../../styles/common.styles";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  ColumnMenuModule,
  ContextMenuModule,
  SetFilterModule,
  ...(process.env.NODE_ENV !== "production" ? [ValidationModule] : []),
]);

const filterParams: ISetFilterParams = {
  comparator: (a: string | null, b: string | null) => {
    const valA = a == null ? 0 : parseInt(a);
    const valB = b == null ? 0 : parseInt(b);
    if (valA === valB) return 0;
    return valA > valB ? 1 : -1;
  },
};

function getRowData() {
  const rows = [];
  for (let i = 1; i < 117; i++) {
    rows.push({ age: i });
  }
  return rows;
}

const FilterList = () => {
  const [rowData, setRowData] = useState<any[]>(getRowData());
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      headerName: "Age (No Comparator)",
      field: "age",
      filter: "agSetColumnFilter",
    },
    {
      headerName: "Age (With Comparator)",
      field: "age",
      filter: "agSetColumnFilter",
      filterParams: filterParams,
    },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      filter: true,
      cellDataType: false,
    };
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.getToolPanelInstance("filters")!.expandFilters();
  }, []);

  return (
    <GridContainer data-testid="page-container">
      <PageTitle>Sorting Filter Lists</PageTitle>
      <PageContent data-testid="page-content">
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "600px" }}
          data-testid="grid-container"
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            sideBar={"filters"}
            onGridReady={onGridReady}
          />
        </div>
      </PageContent>
    </GridContainer>
  );
};

export default FilterList;
