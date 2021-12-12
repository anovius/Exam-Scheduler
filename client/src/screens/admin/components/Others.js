import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Others(){
    return (
        <>
        <div className="modal fade" id="room" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Room</h5>
                        </div>
                        <div className="modal-body">
                        <input className='input-field' type="text"  placeholder="Room Name" />
                        <input className='input-field' type="number"  placeholder="Capacity" /><br></br>
                        <div className='d-flex justify-content-left mt-4'>
                        <div className="form-check me-4">
                        <input className="form-check-input" type="radio" name="section" checked></input>
                            Available
                            </div>
                            <div className="form-check me-4 mb-2">
                        <input className="form-check-input" type="radio" name="section"></input>
                            Not Available
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="custom-btn background-blue" data-dismiss="modal">Apply</button>
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
                        {[...Array(34)].map((x, i) =>
                            <div className='room' data-toggle="modal" data-target="#room">
                                A{i+1}
                            </div>
                        )}
                        {[...Array(12)].map((x, i) =>
                            <div className='room' data-toggle="modal" data-target="#room">
                                B{i+1}
                            </div>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="col-md-12">
                            <div className='slots'>
                                8:30 AM - 10:00 AM
                            </div>
                            <div className='slots'>
                                10:30 AM - 12:00 AM
                            </div>
                            <div className='slots'>
                                12:30 AM - 02:00 AM
                            </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        </>
    )
}

export default Others;