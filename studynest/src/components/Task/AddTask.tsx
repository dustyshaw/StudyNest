import React from 'react'
import { AddTaskRequest } from '../../@types/Requests/AddTaskRequest';
import { TaskQueries } from '../../Queries/taskQueries';
import TextInput from '../Inputs/TextInput';
import Button from '../Inputs/Button';
import { useParams } from 'react-router';

const AddTask = () => {
    const { courseUnitId } = useParams();
    console.log("BLAHHHHH", courseUnitId)
    const [formData, setFormData] = React.useState<Partial<AddTaskRequest>>({});
    const { mutateAsync: addTaskAsync } = TaskQueries.useAddTask();

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSubmission = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        e.stopPropagation();


        const newTask: AddTaskRequest = {
            unitid: Number(courseUnitId) ?? 0,
            title: formData.title ?? '',
            description: formData.description ?? '',
            eventstart: formData.eventstart instanceof Date ? formData.eventstart : new Date(),
            eventend: formData.eventend instanceof Date ? formData.eventend : new Date(),
            duedate: formData.duedate instanceof Date ? formData.duedate : new Date(),
            iscomplete: false,
        };

        addTaskAsync(newTask);
    };

    return (
        <div className="bg-gray-200 rounded-md border-gray-400 border-solid border-2 p-4 m-8">
            <form className="p-5">
                <TextInput
                    label="* Task Title"
                    placeholder="Enter Course Title"
                    error="Task Title is Required"
                    required={true}
                    id="title"
                    onChange={handleForm}
                />
                <TextInput
                    label="Task Description"
                    placeholder="Enter Task Description"
                    error="Task Description is Required"
                    required={true}
                    id="description"
                    onChange={handleForm}
                />

                <p className='mt-6'>Event Start</p>
                <div className=''>
                    <input
                        aria-label="Event Start"
                        type="datetime-local"
                        id="eventstart"
                        value={formData.eventstart != undefined ? formData.eventstart.toString() : ''}
                        onChange={handleForm}
                    />
                </div>

                <p className='mt-6'>Event End</p>
                <div className=''>
                    <input
                        aria-label="Event End"
                        type="datetime-local"
                        id="eventend"
                        value={formData.eventend ? formData.eventend.toString() : ''}
                        onChange={handleForm}
                    />
                </div>

                <p className='mt-6'>Due Date</p>
                <div className=''>
                    <input
                        aria-label="Due Date"
                        type="datetime-local"
                        id="duedate"
                        value={formData.duedate ? formData.duedate.toString() : ''}
                        onChange={handleForm}
                    />
                </div>

                <Button onClick={handleSubmission}>
                    <p>Add Task</p>
                </Button>
            </form>
        </div>
    );
}

export default AddTask