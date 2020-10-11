import React from 'react'
import Dropdown from "../../components/Dropdown";

function Images() {
    return (
        <>
        <div id="user-active-window-top-bar">
          <h1>Images</h1>
          <div id="user-active-window-filter-bar">
            < Dropdown defaultValue={'All photographers'} />
            < Dropdown defaultValue={'All tags'} />
            < Dropdown defaultValue={'Sort by: Newest'} />
          </div>
        </div>
      </>
    )
}

export default Images
