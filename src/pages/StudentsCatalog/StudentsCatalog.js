import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./StudentsCatalog.css";
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

const r = [{"doctype":1,"document":6,"name":"Kacey","first_lastname":"Krajcik","second_lastname":"Stark","program":"Internal Paradigm Director","average":91,"age":75,"semester":59,"phone":"300-364-0052","email":"Leatha_Gislason36@hotmail.com","id":"1"},{"doctype":0,"document":37,"name":"Melyna","first_lastname":"Gerlach","second_lastname":"Kuphal","program":"Customer Communications Orchestrator","average":21,"age":2,"semester":87,"phone":"710-713-0350","email":"Kristian77@gmail.com","id":"2"},{"doctype":1,"document":80,"name":"Keagan","first_lastname":"Smith","second_lastname":"Schroeder","program":"Dynamic Group Producer","average":1,"age":6,"semester":41,"phone":"752-703-8274","email":"Vena_Hoeger13@yahoo.com","id":"3"},{"doctype":0,"document":34,"name":"Josephine","first_lastname":"Gutmann","second_lastname":"Bahringer","program":"Chief Communications Technician","average":1,"age":2,"semester":49,"phone":"309-362-2275","email":"Angelo_Kub@hotmail.com","id":"4"},{"doctype":2,"document":16,"name":"Karolann","first_lastname":"Emard","second_lastname":"Larkin","program":"Central Intranet Associate","average":80,"age":64,"semester":21,"phone":"436-496-4839","email":"Nya.Leffler47@hotmail.com","id":"5"},{"doctype":1,"document":45,"name":"Nash","first_lastname":"Medhurst","second_lastname":"Nicolas","program":"Internal Quality Engineer","average":57,"age":1,"semester":64,"phone":"818-224-8361","email":"Izabella.Kuvalis@hotmail.com","id":"6"},{"doctype":0,"document":86,"name":"Catalina","first_lastname":"Schimmel","second_lastname":"Wisoky","program":"Investor Infrastructure Assistant","average":53,"age":14,"semester":37,"phone":"473-214-9315","email":"Benjamin.Murray72@hotmail.com","id":"7"},{"doctype":0,"document":87,"name":"Damion","first_lastname":"Treutel","second_lastname":"Johnston","program":"Investor Configuration Specialist","average":7,"age":74,"semester":90,"phone":"931-826-6984","email":"Benedict.Schaefer@hotmail.com","id":"8"},{"doctype":0,"document":30,"name":"Neal","first_lastname":"Considine","second_lastname":"Davis","program":"Global Accountability Executive","average":22,"age":97,"semester":82,"phone":"205-416-4430","email":"Lavern_Reynolds29@hotmail.com","id":"9"},{"doctype":1,"document":81,"name":"Jerrell","first_lastname":"Osinski","second_lastname":"Mosciski","program":"Regional Program Facilitator","average":58,"age":75,"semester":8,"phone":"894-689-6198","email":"Abe_Rowe49@yahoo.com","id":"10"},{"doctype":1,"document":59,"name":"Sonya","first_lastname":"Hammes","second_lastname":"Wilkinson","program":"Investor Identity Director","average":98,"age":54,"semester":63,"phone":"966-853-0837","email":"Malvina_Harber81@yahoo.com","id":"11"},{"doctype":0,"document":90,"name":"Daphne","first_lastname":"Marquardt","second_lastname":"Herzog","program":"Central Factors Facilitator","average":42,"age":74,"semester":91,"phone":"434-425-0903","email":"Dolly26@hotmail.com","id":"12"},{"doctype":1,"document":64,"name":"Moises","first_lastname":"Kemmer","second_lastname":"Luettgen","program":"Forward Applications Liaison","average":15,"age":28,"semester":31,"phone":"979-611-4782","email":"Eudora.Lowe34@hotmail.com","id":"13"},{"doctype":0,"document":27,"name":"Lizeth","first_lastname":"Beer","second_lastname":"Reynolds","program":"Internal Applications Developer","average":91,"age":0,"semester":53,"phone":"657-987-5066","email":"Chanel_Gaylord39@gmail.com","id":"14"},{"doctype":1,"document":53,"name":"Dovie","first_lastname":"Hegmann","second_lastname":"Schoen","program":"Future Identity Engineer","average":64,"age":13,"semester":98,"phone":"325-630-3640","email":"Edmund.Stokes@hotmail.com","id":"15"},{"doctype":2,"document":37,"name":"Weldon","first_lastname":"Gleason","second_lastname":"Veum","program":"Dynamic Paradigm Developer","average":62,"age":84,"semester":40,"phone":"933-259-1365","email":"Suzanne.Mayert77@yahoo.com","id":"16"},{"doctype":1,"document":79,"name":"Elisa","first_lastname":"Treutel","second_lastname":"Rogahn","program":"International Integration Associate","average":59,"age":54,"semester":84,"phone":"309-325-7475","email":"Fae23@hotmail.com","id":"17"},{"doctype":0,"document":42,"name":"Benton","first_lastname":"Dickinson","second_lastname":"Veum","program":"Corporate Division Associate","average":89,"age":88,"semester":4,"phone":"595-735-4514","email":"Shania_Stiedemann@hotmail.com","id":"18"},{"doctype":0,"document":7,"name":"Dakota","first_lastname":"Hettinger","second_lastname":"Schroeder","program":"Chief Infrastructure Representative","average":57,"age":4,"semester":61,"phone":"457-886-7365","email":"Casper_Hickle47@yahoo.com","id":"19"},{"doctype":0,"document":92,"name":"Wilford","first_lastname":"Harvey","second_lastname":"Cummerata","program":"Corporate Brand Assistant","average":38,"age":100,"semester":38,"phone":"934-434-6458","email":"Manley_Toy39@yahoo.com","id":"20"},{"doctype":0,"document":47,"name":"Savion","first_lastname":"Mante","second_lastname":"Quigley","program":"Direct Implementation Architect","average":11,"age":96,"semester":30,"phone":"284-323-0091","email":"Garrison8@hotmail.com","id":"21"},{"doctype":1,"document":91,"name":"Julia","first_lastname":"Wehner","second_lastname":"Goldner","program":"Principal Quality Engineer","average":97,"age":75,"semester":82,"phone":"245-341-3505","email":"Francesca_Rice57@yahoo.com","id":"22"},{"doctype":3,"document":15,"name":"Estrella","first_lastname":"Davis","second_lastname":"Bailey","program":"Chief Metrics Producer","average":76,"age":79,"semester":37,"phone":"463-231-0654","email":"Astrid_Balistreri@yahoo.com","id":"23"},{"doctype":0,"document":78,"name":"Augustine","first_lastname":"Schaden","second_lastname":"Raynor","program":"Investor Accounts Director","average":49,"age":33,"semester":34,"phone":"279-943-9615","email":"Colt82@gmail.com","id":"24"},{"doctype":0,"document":12,"name":"Daphnee","first_lastname":"Wintheiser","second_lastname":"Hills","program":"National Metrics Architect","average":14,"age":86,"semester":66,"phone":"976-437-4917","email":"Katelin19@hotmail.com","id":"25"},{"doctype":1,"document":92,"name":"Wilford","first_lastname":"Hammes","second_lastname":"Kautzer","program":"Global Integration Analyst","average":65,"age":64,"semester":81,"phone":"825-728-1024","email":"Deborah_Wintheiser51@gmail.com","id":"26"},{"doctype":0,"document":17,"name":"Pink","first_lastname":"Cartwright","second_lastname":"Collins","program":"Chief Security Representative","average":20,"age":92,"semester":36,"phone":"921-990-4906","email":"Joe12@hotmail.com","id":"27"},{"doctype":0,"document":73,"name":"Xzavier","first_lastname":"Huel","second_lastname":"Wisozk","program":"Legacy Security Facilitator","average":10,"age":91,"semester":7,"phone":"675-788-7046","email":"Aida69@yahoo.com","id":"28"}]

export default function StudentCatalog() {
  const [students, setStudents] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    fetch('https://622243ef666291106a22301b.mockapi.io/api/v1/students')
      .then(response => response.json())
      .then(data => setStudents(data));
      console.log()
  });

  return (
    <div className='container mt-4' style={{ height: 700, width: '100%' }}>
      <DataGrid
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
