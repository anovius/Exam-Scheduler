import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserService from '../../../store/action/user.service';
import Upload from '../../shared/Upload';

function Others(){
    const [rooms, setRooms] = useState([]);
    const [slots, setSlots] = useState([]);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    
    useEffect(()=>{
        UserService.getRooms().then(res => {
            setRooms(res.data.data);
        });

        UserService.getSlots().then(res => {
            setSlots(res.data.data);
        });

    },[])

    const onSubmit = () => {
        UserService.addSlot({start: start, end: end}).then(res => {
            window.location.reload();
        })
    }
    
    return (
        <>
        <div className="modal fade" id="time" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Room</h5>
                        </div>
                        <div className="modal-body">
                            <div>
                                <input className="input-field "type="text"  min="00:00" max="23:59" onFocus={(e) => (e.currentTarget.type = "time")} onChange={(e) => setStart(e.target.value)} placeholder="Starting Time" />                            
                                <input className="input-field "type="text"  min="00:00" max="23:59" onFocus={(e) => (e.currentTarget.type = "time")} onChange={(e) => setEnd(e.target.value)} placeholder="Ending Time" />                            
                            </div>
                        <div className="modal-footer">
                            <button type="button" className="custom-btn background-blue" data-dismiss="modal" onClick={onSubmit}>Add</button>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-md-11 table-container box-shadow">
            <Tabs>
                <TabList>
                    <Tab>Rooms</Tab>
                    <Tab>Time Slots</Tab>
                </TabList>

                <TabPanel>
                    <div className="col-md-12">
                        <div className="col-md-12">
                        <Upload />
                        </div>
                       <div className="col-md-9">
                        {rooms.map(room => {
                                return (
                                    <div className='room'>
                                        {room.name}
                                    </div>
                                )
                            })}
                       </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="schedule-title m-2">
                        Slots
                    </div>
                    <div>
                        <button className="custom-btn background-blue"  data-toggle="modal" data-target="#time">Add</button>
                    </div>
                </div>
                    <div className="col-md-12">
                           {slots.map(slot => {
                               return (
                                <div className='slots'>
                                    {slot.start} - {slot.end}
                                </div>
                               )
                           })}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        </>
    )
}

export default Others;