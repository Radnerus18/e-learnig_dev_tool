import { Box, Paper,Badge, Typography,Grid, Button } from '@mui/material'
import React from 'react';
import { Toc } from '../../types';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import FolderStruc from './folderStruc'
import {useAppSelector,UseAppDispatch} from '../../store/hooks';
import { increamented } from '../../features/counter/counterSlice';
const TocPanel:React.FC<Toc>= ({panel,profileBadge,avatar,fileAction,folderStyle,dropDownShow}) => {
  const count = useAppSelector(state=>state.counter.value);
  const dispatchCount = UseAppDispatch();
  const addFolderCount = ()=>{
    dispatchCount(increamented());
  }
  return (
    <React.Fragment>
        <Box component="section" style={panel}>
          {/* profileArea starts*/}
          <Paper elevation={1} style={profileBadge}>
            <Typography variant='h3'>CLE</Typography>
            <Badge badgeContent=" " sx={{display:'flex',alignItems:'center',gap:'5px'}}>
              <Typography variant='h6'>User</Typography>
              <Box component="span" style={avatar}>Img</Box>
            </Badge>
          </Paper>{/* profileArea ends*/}
          {/* toc area starts */ }
          <Paper elevation={2} style={fileAction}>
            <Typography variant='h6'>Title</Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button onClick={addFolderCount}><CreateNewFolderIcon /></Button>
            </Grid>
          </Paper>
          <FolderStruc folderStyle={folderStyle} dropDownShow = {dropDownShow} folderCount = {count}/>
        </Box>
    </React.Fragment>
  )
}

export default TocPanel