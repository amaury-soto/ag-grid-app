import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { 
  ColDef, 
  ModuleRegistry, 
  AllCommunityModule 
} from 'ag-grid-community';
import { GridContainer } from './GridExample.styles';
import { PageTitle, PageContent } from '../styles/common.styles';
import { getUsers, IUser } from '../../services/api/userService';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Module register
ModuleRegistry.registerModules([AllCommunityModule]);

const GridExample = () => {
  const [columnDefs] = useState<ColDef[]>([
    { field: 'id', sortable: true, filter: true },
    { field: 'name', sortable: true, filter: true },
    { field: 'username', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { 
      field: 'address.city', 
      headerName: 'City',
      sortable: true, 
      filter: true 
    }
  ]);

  const [rowData, setRowData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const users = await getUsers();
        setRowData(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <GridContainer>
      <PageTitle>AG Grid Example</PageTitle>
      <PageContent>
        <div className="ag-theme-alpine">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            defaultColDef={{
              flex: 1,
              minWidth: 100,
              sortable: true,
              filter: true
            }}
          />
        </div>
      </PageContent>
    </GridContainer>
  );
};

export default GridExample;