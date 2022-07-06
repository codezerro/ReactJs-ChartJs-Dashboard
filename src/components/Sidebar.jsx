import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="w-auto text-center sidebar-col">
        <div className="break-words whitespace-nowrap p-5 logo-font mb-10">
          <NavLink to="/">ChartJs Dashboard</NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/pie"
            className="p-1 ml-2 mr-2 mb-2"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#cca',
              backgroundColor: isActive ? '#454543' : '',
              borderRadius: '10px',
            })}
          >
            Pie Chart
          </NavLink>

          <NavLink
            className="p-1 ml-2 mr-2 mb-2"
            style={({ isActive }) => ({
              color: isActive ? 'White' : '#cca',
              backgroundColor: isActive ? '#454543' : '',
              borderRadius: '10px',
            })}
            to="/bar"
          >
            Bar Chart
          </NavLink>
          <NavLink
            className="p-1 ml-2 mr-2 mb-2"
            style={({ isActive }) => ({
              color: isActive ? 'White' : '#cca',
              backgroundColor: isActive ? '#454543' : '',
              borderRadius: '10px',
            })}
            to="/line"
          >
            Line Chart
          </NavLink>
          <NavLink
            className="p-1 ml-2 mr-2 mb-2"
            style={({ isActive }) => ({
              color: isActive ? 'White' : '#cca',
              backgroundColor: isActive ? '#454543' : '',
              borderRadius: '10px',
            })}
            to="/doughnut"
          >
            Doughnut Chart
          </NavLink>
          <NavLink
            className="p-1 ml-2 mr-2 mb-2"
            style={({ isActive }) => ({
              color: isActive ? 'White' : '#cca',
              backgroundColor: isActive ? '#454543' : '',
              borderRadius: '10px',
            })}
            to="/dynamic-chart"
          >
            Dynamic Chart
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar
