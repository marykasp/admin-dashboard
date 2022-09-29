import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dropdown = ({ title }) => {
  const [isListOpen, setIsListOpen] = useState(false)
  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
      >
        <div className="dd-header-title">{title}</div>
        {isListOpen
          ? <KeyboardArrowDownIcon name="angle-up" size="2x" />
          : <KeyboardArrowUpIcon name="angle-down" size="2x" />}
      </button>

      <div className="dd-list">
        <button className="dd-list-item"></button>
        <button className="dd-list-item"></button>
        <button className="dd-list-item"></button>
      </div>
    </div>
  )
}

export default Dropdown;
