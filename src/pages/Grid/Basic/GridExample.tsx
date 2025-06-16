import { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ModuleRegistry,
  AllCommunityModule,
  ClientSideRowModelModule,
  ILoadingOverlayParams
} from "ag-grid-community";
import { GridContainer } from "./GridExample.styles";
import { PageTitle, PageContent } from "../../styles/common.styles";
import { getUsers, IUser } from "../../../services/api/userService";

ModuleRegistry.registerModules([AllCommunityModule]);
ModuleRegistry.registerModules([ClientSideRowModelModule]);


const LoadingOverlay = (props: ILoadingOverlayParams) => {
  return (
    <div className="ag-overlay-loading-center">
      <div
        style={{
          padding: "10px",
          border: "1px solid #999",
          backgroundColor: "white",
        }}
      >
        Loading Data...
      </div>
    </div>
  );
};

const GridExample = () => {
  const [rowData, setRowData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "id", sortable: true, filter: true },
      { field: "name", sortable: true, filter: true },
      { field: "username", sortable: true, filter: true },
      { field: "email", sortable: true, filter: true },
      {
        field: "address.city",
        headerName: "City",
        sortable: true,
        filter: true,
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      minWidth: 100,
      sortable: true,
      filter: true,
    }),
    []
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const users = await getUsers();
        setRowData(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
      <GridContainer data-testid="page-container">
      <PageTitle>AG Grid Example</PageTitle>
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
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            loadingOverlayComponent={LoadingOverlay}
            loading={loading}
          />
        </div>
      </PageContent>
    </GridContainer>
  );
};

export default GridExample;
