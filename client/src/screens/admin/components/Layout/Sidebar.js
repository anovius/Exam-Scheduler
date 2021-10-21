import { Link } from 'react-router-dom';

import logo from '../../../../assets/logo-dark.png';

function Sidebar(){
    return (
        <>
             <div className='container'>
                <div className="sidebar-logo">
                    <h2> <img className='m-1' src={logo} alt='logo' /> Exam Scheduler</h2>
                </div>
                <div className="sidebar-menu">
                    
                    <h3 className=' mt-4'>Main Menu</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item active'>
                        <Link to='/admin' className='active'> <i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                       </div>
                       <div className='item'>
                        <Link to='/admin'> <i className="fas fa-bell"></i> Notifications</Link>
                       </div>
                       <div className='item'>
                        <Link to='/admin/complaints'> <i className="fas fa-bug"></i> Complaints</Link>
                       </div>
                    </div>
                    
                    <h3 className=' mt-4'>Manage Records</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item'>
                        <Link to='/admin/classes'> <i className="fas fa-users-class"></i> Classes</Link>
                       </div>
                       <div className='item'>
                        <Link to='/admin/students'> <i className="fas fa-users"></i> Students</Link>
                       </div>
                       <div className='item'>
                        <Link to='/admin/teachers'> <i className="fas fa-chalkboard-teacher"></i> Teachers</Link>
                       </div>
                       <div className='item'>
                        <Link to='/admin/faculty'> <i className="fas fa-user-friends"></i> Faculty</Link>
                       </div>
                    </div>
                    
                    
                    <h3 className=' mt-4'>Others</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item'>
                        <Link to='/admin'> <i className="fas fa-cogs"></i> Settings</Link>
                       </div>
                    </div>
                    
                </div>
             </div>
        </>
    );
}

export default Sidebar;