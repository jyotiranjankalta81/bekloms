import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { toast } from 'react-toastify';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import axiosInstance from '../../helper/axiosInstance';

// function createData(USER_ID, F_NAME, M_NAME, L_NAME, PHONENO) {
//     return {
//         USER_ID,
//         F_NAME,
//         M_NAME,
//         L_NAME,
//         PHONENO,
//     };
// }

// const rows = [
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Donut', 452, 25.0, 51, 4.9),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Honeycomb', 408, 3.2, 87, 6.5),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Jelly Bean', 375, 0.0, 94, 0.0),
//     createData('KitKat', 518, 26.0, 65, 7.0),
//     createData('Lollipop', 392, 0.2, 98, 0.0),
//     createData('Marshmallow', 318, 0, 81, 2.0),
//     createData('Nougat', 360, 19.0, 9, 37.0),
//     createData('Oreo', 437, 18.0, 63, 4.0),
// ];

const headCells = [
    {
        id: 'USER_ID',
        numeric: false,
        disablePadding: true,
        label: 'USER_ID',
    },
    {
        id: 'NAME',
        numeric: false,
        disablePadding: false,
        label: 'NAME',
    },
    {
        id: 'EMAIL',
        numeric: false,
        disablePadding: false,
        label: 'EMAIL',
    },
    {
        id: 'PHONENO',
        numeric: false,
        disablePadding: false,
        label: 'PHONENO',
    },
    {
        id: 'ABOUT',
        numeric: false,
        disablePadding: false,
        label: 'ABOUT',
    },
];

function EnhancedTableHead(props) {
    const [deletesign, setDeleteSign] = React.useState(false);
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    

    return (
        <TableHead>
            <TableRow
                sx={{ background: "FFFFFF" }}
            >
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sx={{ pl: 2, border: "3px black",fontFamily:"Kanit,sans-serif",fontWeight:"600", borderStyle: "none solid solid none" }}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
                <TableCell padding="checkbox"
                    sx={{ border: "3px black", borderStyle: "none none solid solid" }}
                >
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        // onClick={handleCheckboxClick}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


export default function OnBoardTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('FIELD_NAME');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [deletesign, setDeleteSign] = React.useState(false);
    const [userdata, setUserdata] = React.useState("");

    var result = " ";
    const getUserDetails = () => {
        axiosInstance.get('user/onboard').then((res) => {
            try {
                if (res.data.status === 1) {
                    result = res.data.data;
                    // console.log(result);
                    setUserdata(res.data.data);
                }

            } catch (error) {
                toast.error("something went wrong");
                // alert(error.toString());

            }
        })
    }
    React.useEffect(() => {
        getUserDetails();
    }, [])

    const rows = userdata;

    console.log(userdata);



    var numSelected = selected.length;

    const handleCheckboxClick = () => {
        setDeleteSign(true)
    }

    const deleteBlogs = () => {
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.USER_ID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, USER_ID) => {
        const selectedIndex = selected.indexOf(USER_ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, USER_ID);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (USER_ID) => selected.indexOf(USER_ID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;




    return (
        <>
            {rows &&
                <Box sx={{ width: "90%" }}>
                    <Paper sx={{ width: '100%', overflow: "hidden", mb: 2, boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
                        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                        {numSelected > 0 ? (
                            <>
                                <Toolbar
                                    sx={{
                                        pl: { sm: 2 },
                                        pr: { xs: 1, sm: 1 },
                                        ...(numSelected > 0 && {
                                            bgcolor: (theme) =>
                                                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                                        }),
                                    }}
                                >
                                    {numSelected > 0 ? (
                                        <Typography
                                            sx={{ flex: '1 1 100%' }}
                                            color="inherit"
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {numSelected} selected
                                        </Typography>
                                    ) : (
                                        <Typography
                                            sx={{ flex: '1 1 100%' }}
                                            variant="h6"
                                            id="tableTitle"
                                            component="div"
                                        >
                                            Nutrition
                                        </Typography>
                                    )}

                                    {numSelected > 0 ? (
                                        <Tooltip title="Delete">
                                            <IconButton
                                                onClick={deleteBlogs}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Filter list">
                                            <IconButton>
                                                <FilterListIcon />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </Toolbar>

                            </>
                        ) : (
                            <div style={{ display: "none" }}>

                            </div>
                        )}
                        {/* <TableContainer sx={{ overflowX: "scroll", maxWidth: 900 }}> */}
                        <TableContainer >
                            <Table
                                // sx={{ minWidth: 300, maxWidth: 900 }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.USER_ID);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.USER_ID)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    sx={{ background: "#EEEEEE" }}
                                                    key={row.USER_ID}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell
                                                        component="th"
                                                        sx={{
                                                            pl: 2,
                                                            border: "3px black",
                                                            borderStyle: "solid solid solid none"
                                                        }}
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.USER_ID}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ pl: 2, border: "3px solid black" }}
                                                        align="left">{row.NAME}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ pl: 2, border: "3px solid black" }}
                                                        align="left">{row.EMAIL}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ pl: 2, border: "3px solid black" }}
                                                        align="left">{row.PHONENO}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ pl: 2, border: "3px solid black" }}
                                                        align="left">{row.ABOUT}
                                                    </TableCell>
                                                    <TableCell padding="checkbox"
                                                        sx={{ border: "3px solid black", borderStyle: "solid none solid solid" }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            onClick={handleCheckboxClick}
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[2, 5, 10, 25]}
                            sx={{ background: "#EEEEEE", border: "3px black", borderStyle: "none none solid none" }}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            }
        </>

    );
}