import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function UserTable({allData,handleDelete,handleEdit}) {
//     const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 80 },
    { id: 'middleName', label: 'Middle Name', minWidth: 80 },
    { id: 'lastName', label: 'last Name', minWidth: 80 },
    { id: 'phoneNumber', label: 'Phone No.', minWidth: 110 },
    { id: 'dob', label: 'DOB', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'gender', label: 'Gender', minWidth:70 },
    { id: 'linkedin', label: 'LinkedIn Url', minWidth: 70 },
    { id: 'country', label: 'Country', minWidth: 70 },
    { id: 'maritalStatus', label: 'Marital Status', minWidth: 70 },
    

]
  return (
    <div style={{maxWidth:'1600px',margin:'auto'}}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                //   align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Action </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {
            //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            allData?.map((row,rindex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rindex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value} */}
                           { column.id == 'dob'? ( value.$M+1 +' - '+value.$D + ' - '+ value.$y ) :value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                       <IconButton onClick={()=>handleDelete(rindex)} aria-label="delete" size="small">
                         <DeleteIcon  color='error' fontSize="inherit" />
                       </IconButton>
                       <IconButton  aria-label="edit" size="small">
                         <EditIcon onClick={()=>handleEdit(row.id)} fontSize="small" />
                       </IconButton>
                    </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    </div>
  )
}

export default UserTable