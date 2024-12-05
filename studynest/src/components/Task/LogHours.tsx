import { useState } from "react";
import Button from "../LayoutComponents/Button";
import { TaskQueries } from "../../Queries/taskQueries";
import { UpdateTaskTimeRequest } from "../../@types/Requests/UpdateTaskTimeRequest";
import NumberInput from "../Inputs/NumberInput";
import { BounceLoader } from "react-spinners";

interface LogHoursProps {
  taskId: number;
}

const LogHours: React.FC<LogHoursProps> = ({ taskId }) => {
  const { mutateAsync, isPending } = TaskQueries.useUpdateTaskTime();

  const [hours, setHours] = useState(0); // Default to 0 hours
  const [minutes, setMinutes] = useState(0); // Default to 0 minutes

  const handleUpdateHours = async () => {
    const request: UpdateTaskTimeRequest = {
      taskid: taskId,
      hours: hours,
      minutes: minutes,
    };

    await mutateAsync(request);
  };

  if (isPending) {
    return (
      <BounceLoader
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
        color="#C4ABE6"
      />
    );
  }
  return (
    <div>
      <h2 className="text-xl">Log Hours</h2>
      <div>
        <form>
          <NumberInput
            label="Hours"
            value={hours}
            onChange={setHours}
            min={0}
          />
          <NumberInput
            label="Minutes"
            value={minutes}
            onChange={setMinutes}
            min={0}
            max={59}
          />
        </form>
        <Button onClick={handleUpdateHours}>Log Hours</Button>
      </div>
    </div>
  );
};

export default LogHours;
