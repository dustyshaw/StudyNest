export interface CourseWithUnitsAndTasksRequest {
  course: AddCourseRequest;
  enrollRequest: AddCourseEnrollRequest;
  units: AddUnitRequest[];
}
