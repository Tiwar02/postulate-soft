import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
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
    width: 130,
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
    field: 'company',
    headerName: 'Empresa',
    width: 200
  },
  {
    field: 'area',
    headerName: 'Área',
    width: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 150,
  }
];

export default function ContactsDatagrid() {
  const [contacts, setContacts] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    Axios
      .get("http://localhost:8000/contacts")
      .then(response => {
        setContacts(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className='container mt-4' style={{ height: 620, width: '100%' }}>
      <Row>
        <Col>
          <h2>Contactos</h2>
        </Col>
        <Col sm="3">
          <Link to="/contacts" className='urlLink' style={{ textDecoration: "none", color: "#fff", width: "100%" }}>
            <div className='box' style={{ width: 200, height: 40, background: "#C20C19", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
              Ver en Cards
            </div>
          </Link>
        </Col>
      </Row>

      <DataGrid
        getRowId={(contacts) => contacts._id}
        components={{ Toolbar: GridToolbar }}
        rows={contacts}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[10,20,30]}
        checkboxSelection
      />
    </div>
  );
}
