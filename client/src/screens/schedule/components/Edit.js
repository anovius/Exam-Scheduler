import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
const localizer = momentLocalizer(moment)

function Edit(){
    const events = [
        {
            title: 'Programming Fundamentals',
            start: new Date(), // year month day hour minute second
            end: new Date(),
            allDay: true
        },
        {
            title: 'Data Structures',
            start: new Date(),
            end: new Date(),
            allDay: true
        }
    ];
    return (
        <>
            <Calendar
                defaultView='week'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                tooltipAccessor="title"
            />
        </>
    )
}

export default Edit;