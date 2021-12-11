import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Others(){
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
                        {[...Array(34)].map((x, i) =>
                            <div className='room'>
                                A{i+1}
                            </div>
                        )}
                        {[...Array(12)].map((x, i) =>
                            <div className='room'>
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