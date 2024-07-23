import React, { useRef, useState } from 'react';
import {Box,Button, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const FolderStruc = ({folderStyle,folderCount,dropDownShow}:any) => {
    const [editableIndex,setEditableIndex] = useState(-1);
    const [show,setShow] = useState(null);
    const tabs = [];
    const handleEdit = (index:any)=>{
        setEditableIndex(index); // edit selected element
    };
    const handleSave = () => {
        setEditableIndex(-1); // Disable editing
    };
    const dropDownRef = useRef<HTMLDivElement | null>(null)
   
    const lessonFolder = (i:number)=>{
        const isEditable = editableIndex === i;
        const handleDropDown = (index:any)=>{
            setShow(show===index?null:index)
        }
        const containerStyle = {
           height:'0px',
           transition: 'height 0.4s ease-in-out'
        };
        return(
            <div key={`folder-id${i}`} className='folderDiv' style={folderStyle} >
                <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'4px 10px'}} >
                    <Button size='medium' sx={{minWidth:24}} onClick={()=>handleDropDown(i)}><ArrowDropDownIcon/></Button>
                    <Typography variant='h6' sx={{width:'60%'}} contentEditable={isEditable} textAlign={'left'}>Lesson {i+1}</Typography>
                    <div className='btn-grp' style={{display:'flex',width:'40%',gap:'5px'}}>
                        {
                            isEditable ? <Button size='medium' sx={{minWidth:24}} onClick={handleSave}><SaveIcon/></Button>:(
                                <>
                                    <Button size='medium' sx={{minWidth:24}} onClick={()=>handleEdit(i)}><EditIcon/></Button>
                                    <Button size='medium' sx={{minWidth:24}}><AddIcon/></Button>
                                    <Button size='medium' sx={{minWidth:24}}><MoreVertIcon/></Button>
                                </>
                            )
                        }
                    </div>
                </div>
                <div key={`drop-id${i}`} ref={dropDownRef} className='insideFolder' style={show === i ? dropDownShow:containerStyle}></div>

            </div>
        )
    }
    for(let i=0;i<folderCount;i++){
        tabs.push(lessonFolder(i))
    }
  return (
    <React.Fragment>
        <Box>
            {tabs}
        </Box>
    </React.Fragment>
  )
}

export default FolderStruc