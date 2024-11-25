export interface CourseWithUnitsRequest {
  course: AddCourseRequest;
  enrollRequest: AddCourseEnrollRequest;
  units: AddUnitRequest[];
}
