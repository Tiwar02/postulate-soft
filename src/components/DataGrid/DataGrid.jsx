import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  {
    field: 'doctype',
    headerName: 'Tipo de documento',
    width: 80,
  },
  {
    field: 'document',
    headerName: 'N° documento',
    width: 150,
  },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
  },
  {
    field: 'first_lastname',
    headerName: 'Primer apellido',
    width: 150,
  },
  {
    field: 'second_lastname',
    headerName: 'Segundo apellido',
    width: 150,
  },
  {
    field: 'program',
    headerName: 'Programa',
    type: 'number',
    width: 200
  },
  {
    field: 'average',
    headerName: 'Promedio',
    type: 'number',
    width: 100,
  },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 100,
  },
  {
    field: 'semester',
    headerName: 'Semestre',
    width: 80
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 150
  },
  {
    field: 'hv',
    headerName: 'HV',
    width: 80
  },
  {
    field: 'status',
    headerName: 'Estado',
    width: 80
  }
];

const rows = [
  {
    id: 1,
    doctype: 1,
    document: 85,
    name: "Clint",
    first_lastname: "Homenick",
    second_lastname: "Homenick",
    program: "Direct Accounts Developer",
    average: 48,
    age: 80,
    semester: 5,
    phone: "672-913-7422",
    email: "Tiara_Steuber60@gmail.com",
  }
];

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