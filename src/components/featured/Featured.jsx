import React from 'react';
import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProgressBar from '../progressBar/ProgressBar';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h2 className='title'>Total Revenue</h2>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ProgressBar trackWidth={10} indicatorWidth={10} label="progress" progress={25} />
          {/* <svg class="svg-indicator">
            <circle class="svg-indicator-track" />
            <circle class="svg-indicator-indication" />
          </svg> */}
        </div>
        <p className="title">Total sales</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id!</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Featured
