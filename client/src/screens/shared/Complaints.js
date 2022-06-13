import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ComplaintService from "../../store/action/complaint.service";
function Complaints() {
    const { pathname } = useLocation();
    const [link, setLink] = useState(pathname+'/add');

    const [complaints, setComplaints] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        ComplaintService.getMy().then(res => {
            setComplaints(res.data.data.reverse());
        });
    }, []);

    return(
        <>
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{complaints[index]?.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>
                    {complaints[index]?.description}
                </p>
                <h5>Reply:</h5>
                <p className="text-center">
                    {complaints[index]?.status === 2 ? complaints[index]?.reply : 'No Reply Yet'}
                </p>
            </div>
            </div>
        </div>
        </div>
            <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Complaints
                    </div>
                    <div>
                        <Link to = {link}>
                    <button className="custom-btn background-blue">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        complaints.map((complaint, index) => {
                            return(
                                <tr className="table-data">
                                    <td>{complaint.by.userName}</td>
                                    <td>{complaint.title}</td>
                                    <td className={complaint.status === 1 ? 'color-info': 'color-success'}>
                                        {complaint.status === 1 ? 'Pending' : 'Resolved'}
                                    </td>
                                    <td className="view" onClick={() => setIndex(index)}>
                                        <i class="fas fa-eye" data-toggle="modal" data-target="#viewModal"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

export default Complaints;