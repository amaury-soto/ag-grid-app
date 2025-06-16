"use client";

import React, {
  useMemo,
  useState,
} from "react";

import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
import { RowGroupingModule, RowGroupingPanelModule } from "ag-grid-enterprise";
import { useFetchJson } from "./useFetchJson";
import { GridContainer } from "./RowGrouping.styles";
import { PageContent, PageTitle } from "../../styles/common.styles";
import { IOlympicData } from "./interfaces";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule,
  RowGroupingPanelModule,
  ...(process.env.NODE_ENV !== "production" ? [ValidationModule] : []),
]);


const RowGrouping = () => {

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "country", rowGroup: true, hide: true },
    { field: "year", rowGroup: true, hide: true },
    { field: "athlete", rowGroup: true, hide: true},
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      minWidth: 200,
    };
  }, []);

  const { data, loading } = useFetchJson<IOlympicData>(
    "https://www.ag-grid.com/example-assets/olympic-winners.json"
  );

  console.log('data-->', data)

  return (
    <GridContainer data-testid="page-container">
      <PageTitle>AG Grid Example</PageTitle>
      <PageContent data-testid="page-content">
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "600px" }}
          data-testid="grid-container"
        >
          <AgGridReact<IOlympicData>
            rowData={data}
            loading={loading}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            rowGroupPanelShow={"always"}
            groupDefaultExpanded={1}
           // groupDisplayType={"multipleColumns"}
          />
        </div>
      </PageContent>
    </GridContainer>
  );
};

export default RowGrouping;
