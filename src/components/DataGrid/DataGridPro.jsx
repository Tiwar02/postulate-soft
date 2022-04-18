import React, { useState, useEffect } from "react";
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import studentsjson from "../../students.json";

const columns = [
  {
    field: 'doctype',
    headerName: 'Tipo de documento',
    width: 80,
    valueGetter: params =>
      {
        switch(params.row.doctype) {
          case 1:
            return "TI"
          case 2:
            return "CC"
          case 3:
            return "CE"
          case 4: 
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
    width: 80,

  },
  {
    field: 'status',
    headerName: 'Estado',
    type: 'boolean',
    width: 80
  }
];

export default function DataGridProDemo() {
  const [tableData, setTableData] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    fetch('https://622243ef666291106a22301b.mockapi.io/api/v1/students')
      .then(response => response.json())
      .then(data => setTableData(data));
  });

  return (
    <div style={{ height: 520, width: '100%' }}>
      <DataGridPro
        components={{ Toolbar: GridToolbar }}
        rows={studentsjson} //students son los datos de Mockapi, r son datos de prueba locales
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[10,20,30]}
        checkboxSelection
      />
    </div>
  );
}