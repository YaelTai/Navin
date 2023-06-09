import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { indigo } from '@mui/material/colors';

export default function Location({ setLocation }) {
    const [address, setAddress] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const getSuggestions = async () => {
        if (!address) return;
        const response = await fetch('http://localhost:3001/api/maps/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: address })
        })
        if (response?.ok) {
            const options = await response.json();
            setSuggestions(options);
        }
    }

    const findLocation = async (loc) => {
        const response = await fetch('http://localhost:3001/api/maps/geocode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: loc })
        })
        console.log(response);
        if (response?.ok) {
            const newLocation = await response.json();
            if (newLocation)
                setLocation(newLocation);
        }
    }

    useEffect(() => { getSuggestions() }, [address]);
    return (
        <>
            <Autocomplete
                sx={{ margin: "20px", color: indigo[700] }}
                color={indigo[700]}
                id="free-solo-demo"
                freeSolo
                options={suggestions}
                onChange={e => { findLocation(e.target.innerHTML) }}
                renderInput={(params) => <TextField {...params} label="Your location" onChange={e => setAddress(e.target.value)} />}
            />
        </>
    );
}
