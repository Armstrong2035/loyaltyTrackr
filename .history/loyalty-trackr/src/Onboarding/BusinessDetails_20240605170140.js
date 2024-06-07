
import React, {useState} from "react";
import { FormGroup, TextField } from "@mui/material";

export const BusinessDetails = () => {

    const[name, setName] = useState('')
    const[industry, setIndustry] = useState('')


    const handleNameChange = (e) => {
        const name = e.target.value
        setName(name)
    }

    const handleIndustryChange = (e) => {
        const industry = e.target.value;
        setIndustry(industry)
    }

    return (

        <div>
            <FormGroup>
                <TextField id='business-name' label='Business Name' variant='outlined' value={name} onChange={={handleNameChange}}>
                    
                </TextField>
            </FormGroup>
        </div>
    )
}

