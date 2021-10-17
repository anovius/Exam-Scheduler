import logo from '../../../../assets/logo-dark.png';

function Sidebar(){
    return (
        <>
             <div className='container'>
                <div className="sidebar-logo">
                    <h2> <img className='m-1' src={logo}/> Exam Scheduler</h2>
                </div>
                <div className="sidebar-menu">
                    
                    <h3 className=' mt-4'>Main Menu</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item active'>
                        <a href='https://google.com' className='active'> <i class="fas fa-tachometer-alt"></i> Dashboard</a>
                       </div>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-bell"></i> Notifications</a>
                       </div>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-bug"></i> Complaints</a>
                       </div>
                    </div>
                    
                    <h3 className=' mt-4'>Manage Records</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-users-class"></i> Classes</a>
                       </div>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-users"></i> Students</a>
                       </div>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-chalkboard-teacher"></i> Teachers</a>
                       </div>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-user-friends"></i> Faulty</a>
                       </div>
                    </div>
                    
                    
                    <h3 className=' mt-4'>Others</h3>
                    <div className='sub-menu mt-4'>
                       <div className='item'>
                        <a href='https://google.com'> <i class="fas fa-cogs"></i> Settings</a>
                       </div>
                    </div>
                    
                </div>
             </div>
        </>
    );
}

export default Sidebar;