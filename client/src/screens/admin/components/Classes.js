import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import ClassService from "../../../store/action/class.service";

function Classes() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses();
    }, []);

    function getClasses(){
        ClassService.getAll().then(res => {
            setClasses(res.data.data);
        });
    }

    function deleteClass(slug){
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure to delete this class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              ClassService.changeStatus(slug, 2).then(res => {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                getClasses();
              });
            }
          })
    }
    
    return(
        <>
           <div className="col-md-11 table-container box-shadow" align="center">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Classes
                    </div>
                    <div>
                        <Link to="/admin/classes/add">
                            <button className="custom-btn background-green">Add</button>
                        </Link>
                    </div>
                </div>
                <div className="custom-table mt-4">
                  <table className="table">
                    <thead className="box-shadow-bottom">
                    <tr>
                        <th scope="col">Degree</th>
                        <th scope="col">Year</th>
                        <th scope="col">Section</th>
                    </tr>
                </thead>
                <tbody>

                {classes.map((c, i) =>
                    <tr className="table-data">
                        <td>{c.degree}</td>
                        <td>{c.year}</td>
                        <td>{c.section}</td>
                        <td class="pointer"><i class="fas fa-trash-alt" onClick={()=> deleteClass(c.slug)}></i></td>
                    </tr>
                )}
                </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

export default Classes;