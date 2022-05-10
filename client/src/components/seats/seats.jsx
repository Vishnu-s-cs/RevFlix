import React from 'react'
import Checkbox from '@mui/material/Checkbox'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA,fa1} from '@fortawesome/free-solid-svg-icons'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Seats() {

  return (
    <div>
        <div>
        <FontAwesomeIcon icon={faA} />   <Checkbox {...label} icon={ <FontAwesomeIcon icon={fa1} /> } checkedIcon={<FontAwesomeIcon icon={["fal", "fa1"]} />}/>
      <Checkbox
        {...label}
        
      /></div>
    </div>
  )
}

export default Seats