import { useState } from 'react'
import Button from '../LayoutComponents/Button';
import { TaskQueries } from '../../Queries/taskQueries';
import { UpdateTaskTimeRequest } from '../../@types/Requests/UpdateTaskTimeRequest';

interface LogHoursProps {
    taskId: number
}

const LogHours: React.FC<LogHoursProps> = ({ taskId }) => {
    const {mutateAsync} = TaskQueries.useUpdateTaskTime();

    const [hours, setHours] = useState(0); // Default to 0 hours
    const [minutes, setMinutes] = useState(0); // Default to 0 minutes

    const handleUpdateHours = async() => {
        const request: UpdateTaskTimeRequest = {
            taskid: taskId,
            hours: hours,
            minutes: minutes
        }

        await mutateAsync(request)
    }
    return (
        <div>
            <h2 className="text-xl">Log Hours</h2>
            <div>
                <form>
                    <p>Hours</p>
                    <input
                        type="number"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        className="rounded border border-gray-200 p-2"
                        min="0"
                    />
                    <p>Minutes</p>
                    <input
                        type="number"
                        value={minutes}
                        onChange={(e) => setMinutes(Number(e.target.value))}
                        className="rounded border border-gray-200 p-2"
                        min="0"
                        max="59"
                    />
                </form>
                <Button
                    onClick={handleUpdateHours} // Call handleUpdateHours on button click
                >
                    Log Hours
                </Button>
            </div>
        </div>
    )
}

export default LogHours