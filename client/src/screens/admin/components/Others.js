import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserService from '../../../store/action/user.service';
import Upload from '../../shared/Upload';

function Others(){
    const [rooms, setRooms] = useState([]);
    
    useEffect(()=>{
        UserService.getRooms().then(res => {
            setRooms(res.data.data);
        });
    },[])
    
    return (
        <>
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
                                    <div className='room' data-toggle="modal" data-target="#room">
                                        {room.name}
                                    </div>
                                )
                            })}
                       </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="col-md-12">
                            <div className='slots'>
                                8:30 AM - 10:00 AM
                            </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        </>
    )
}

export default Others;