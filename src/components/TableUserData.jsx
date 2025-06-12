import { TableContainer,TableBody, Table, TableHead, TableRow, TableCell } from "@mui/material";
import { useTheme } from "../context/ThemeContext";


const TableUserData=({data})=>{
    const {theme}=useTheme();
    const cellStyle={color:theme.title,textAlign:"center"};
    return(
         <div className="table">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle}>
                                Wpm
                            </TableCell>
                            <TableCell style={cellStyle}>
                                Acuuracy
                            </TableCell>
                            <TableCell style={cellStyle}> 
                                Charachters
                            </TableCell>
                            <TableCell style={cellStyle}>
                                TimeStamp
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((i) => (
                            <TableRow >
                                <TableCell style={cellStyle}>{i.wpm}</TableCell>
                                <TableCell style={cellStyle}>{i.accuracy}</TableCell>
                                <TableCell style={cellStyle}>{i.charcters}</TableCell>
                                <TableCell style={cellStyle}>{i.timeStamp.toDate().toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>  
                </Table>
            </TableContainer>
         </div>
    )
}

export default TableUserData;