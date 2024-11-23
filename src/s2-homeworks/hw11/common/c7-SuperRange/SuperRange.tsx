import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                height: '4px',
                color: '#01cb22',
                '& .MuiSlider-thumb': {
                    borderRadius: '100%',
                    fill: '#01cb22',
                    boxShadow: '0 0 2px 0 rgba(29, 33, 38, 0.1), 0 0 40px 0 rgba(29, 33, 38, 0.13)'
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
