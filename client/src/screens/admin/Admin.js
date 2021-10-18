import { Sidebar, Header } from './components';
import './admin.css';

function Admin() {
  return (
    <>
      <Header />
      <div className="row">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="col">
          </div>
      </div>
    </>
  );
}


export default Admin;