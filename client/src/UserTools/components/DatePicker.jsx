import React, {useState} from 'react'
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/material_green.css";

function DatePicker() {
    const [date, setDate] = useState(new Date());
    return (
        <Flatpickr
        data-enable-time
        value={date}
        onChange={date => {
          setDate(date);
        }}
      />
    )
}

export default DatePicker


