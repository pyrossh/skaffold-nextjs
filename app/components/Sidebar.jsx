"use client";
import { ProSidebarProvider, Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';

const submenuStyles = {
  ['.' + menuClasses.label]: {
    color: 'black',
  }
}

const MySidebar = () => (
  <ProSidebarProvider>
    <Sidebar backgroundColor="#bcf3ff" style={{ width: '300px' }}>
      <Menu>
        <MenuItem rootStyles={submenuStyles} component={<a href="/pie" />}>Pie charts</MenuItem>
        <MenuItem rootStyles={submenuStyles}> Line charts </MenuItem>
        <MenuItem rootStyles={submenuStyles}> Documentation </MenuItem>
        <MenuItem rootStyles={submenuStyles}> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  </ProSidebarProvider>
)

export default MySidebar;