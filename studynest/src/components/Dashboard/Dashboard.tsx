import { CourseQueries } from "../../Queries/courseQueries";
import AddCoursePage from "../AddCoursePage"


const Dashboard = () => {
    const { data } = CourseQueries.useGetAllCourses();
    console.log(data)
    
    return (
        <>
            <div className="p-8">
                <div className="text-5xl">Your Dashboard</div>
                {data?.map((x, key) => (<p key={key}>{x.title}<br />{x.description}</p>))}
                <AddCoursePage />
            </div>
        </>
    )
}

export default Dashboard