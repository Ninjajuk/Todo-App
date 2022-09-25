import * as React from 'react';
import Stack from '@mui/material/Stack';
import ListIcon from '@mui/icons-material/List';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

 function ButtonDown({setShowList, showList, addToList, deleteData}) {
   
  return (
  
    <Stack direction="row" className='buttons'>
        <ListIcon sx={{color:"blue", cursor: 'pointer'}} onClick={() => setShowList(!showList)} />
        <ClearIcon onClick={() => deleteData()} sx={{ color: 'red', cursor: 'pointer'}} />
        <CheckIcon onClick={() => addToList()} sx={{color:"green", cursor: 'pointer'}} />
    </Stack>
 
  );
}
export default ButtonDown;