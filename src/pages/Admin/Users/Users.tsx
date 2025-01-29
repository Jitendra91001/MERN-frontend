import { GridColDef } from '@mui/x-data-grid';
import './users.scss'
import { useState } from 'react';
import DataTable from '../../../component/dataTable/DataTable';
import Add from '../../../component/Add/Add';
import { userRows } from '../../../data';
const Users = () => {

    const [open , setOpen]= useState<any>(false)
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "img",
          headerName: "Avatar",
          width: 100,
          renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
          },
        },
        {
          field: "firstName",
          type: "string",
          headerName: "First name",
          width: 150,
        },
        {
          field: "lastName",
          type: "string",
          headerName: "Last name",
          width: 150,
        },
        {
          field: "email",
          type: "string",
          headerName: "Email",
          width: 150,
        },
        {
          field: "phone",
          type: "string",
          headerName: "Phone",
          width: 150,
        },
        {
          field: "createdAt",
          headerName: "Created At",
          width: 150,
          type: "string",
        },
        {
          field: "verified",
          headerName: "Verified",
          width: 150,
          type: "boolean",
        },
      ];
    return(
       <>
       <div className="users" >
        <div className="info">
            <h1>Users</h1>
            <button onClick={()=>setOpen(true)}>Add new User</button>
        </div>
        <DataTable slug='user' columns = {columns}  rows={userRows}/>
        {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
       </div>
       </>
    )
}

export default Users;