import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataGridMUI() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://622243ef666291106a22301b.mockapi.io/api/v1/students')
      .then(response => response.json())
      .then(data => setTableData(data));
  });

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={tableData}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
    </div>
  );
}