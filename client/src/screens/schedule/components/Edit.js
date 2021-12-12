import { ScheduleComponent, Day, Week, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';

function Edit(){
    return (
        <>
            <ScheduleComponent>
                <ViewsDirective>
                    <ViewDirective option='Day' />
                    <ViewDirective option='Week' />
                </ViewsDirective>
                <Inject services={[Day, Week]}/>
            </ScheduleComponent>
        </>
    )
}

export default Edit;