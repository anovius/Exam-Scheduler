import { NavLink } from 'react-router-dom';

import logo from '../../../../assets/logo-dark.png';

function Sidebar(){
    return (
        <>
             <div className='container'>
                <span className='hide-sidebar'>
                    <i className="fas fa-times"></i>
                </span>
                <div className="sidebar-logo">
                    <h2> <img className='m-1' src={logo} alt='logo' /> Exam Scheduler</h2>
                </div>
                <div className="sidebar-menu">
                    
                    <h3 className='mt-4'>Main Menu</h3>
                    <div className='sub-menu mt-4'>
                        <NavLink exact to='/student' activeClassName='active'> <i className="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                        <NavLink to='/student/notifications' activeClassName='active'> <i className="fas fa-bell"></i> Notifications</NavLink>
                        <NavLink to='/student/complaints' activeClassName='active'> <i className="fas fa-bug"></i> Complaints</NavLink>
                    </div>

                    <h3 className='mt-4'>Others</h3>
                    <div className='sub-menu mt-4'>
                        <NavLink to='/student/settings' activeClassName='active'> <i className="fas fa-cogs"></i> Settings</NavLink>
                    </div>
                </div>
             </div>
        </>
    );
}

export default Sidebar;