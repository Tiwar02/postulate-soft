import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Axios from "axios";

const columns = [
  {
    field: 'doctype',
    headerName: 'Tipo de documento',
    width: 80,
    valueGetter: params => {
      switch (params.row.doctype) {
        case 0:
          return "CC"
        case 1:
          return "TI"
        case 2:
          return "CE"
        case 3:
          return "PAS"
      }
    }
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
    type: 'number',
    width: 100
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 150
  },
  {
    field: 'hv',
    headerName: 'HV',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Estado',
    type: 'boolean',
    width: 80
  }
];

export default function Students() {
  const [students, setStudents] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    Axios
      .get("http://localhost:8000/students")
      .then(response => {
        setStudents(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className='container mt-4' style={{ height: 620, width: '100%' }}>
      <h2>Estudiantes</h2>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={students}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30]}
        checkboxSelection
      />
    </div>
  );
}
