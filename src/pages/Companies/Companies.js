import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    field: 'nit',
    headerName: 'Nit',
    width: 120
  },
  {
    field: 'company_name',
    headerName: 'Nombre de empresa',
    width: 250,
    /* onclick: params => {
      useNavigate(params.row.email)
    } */
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200
  },
  {
    field: 'employers_number',
    headerName: 'N° de empleados',
    width: 100,
    valueGetter: params => {
      switch (params.row.employers_number) {
        case 0:
          return "1 a 10"
        case 1:
          return "11 a 50"
        case 2:
          return "51 a 250"
        case 3:
          return "Más de 250"
      }
    }
  },
  {
    field: 'webpage',
    headerName: 'Página web',
    width: 200,
  },
  ,
  {
    field: 'sector',
    headerName: 'Sector',
    width: 120,
  },
  {
    field: 'country',
    headerName: 'País',
    width: 150,
  },
  {
    field: 'department',
    headerName: 'Departamento',
    width: 150
  },
  {
    field: 'city',
    headerName: 'Ciudad',
    width: 150,
  }
];

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    Axios
      .get("http://localhost:8000/companies")
      .then(response => {
        setCompanies(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className='container mt-4' style={{ height: 620, width: '100%' }}>
      <h2>Empresas</h2>
      <DataGrid
        getRowId={(companies) => companies._id}
        components={{ Toolbar: GridToolbar }}
        rows={companies}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[10,20,30]}
        checkboxSelection
      />
    </div>
  );
}
