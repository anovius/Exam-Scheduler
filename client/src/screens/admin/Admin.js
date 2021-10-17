import { Layout } from './components';
import './admin.css';

function Admin() {
  return (
    <>
        <div className="row">
            <div className="sidebar">
              <Layout />
            </div>
            <div className="col">
            </div>
        </div>
    </>
  );
}


export default Admin;