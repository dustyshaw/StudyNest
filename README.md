# StudyNest
StudyNest will be a course builder for self-learners. If you want to learn Philosophy, for example, you can create a self guided course with assignments and your own assessments. My app will allow you to track your progress in each course and subject, motivating you to continue your self-learning journey. You may even browse other courses to get inspiration for your own journey.

### Contributors 
Just me =)  

---
# Goals by Week
### Nov 6 - Design & Setup
- [x] Create wireframes
- [x] Make database schema
- [x] User can log in and out using OICD (Client Side Authentication)
- [x] Deployed to Kubernetes and has a duckdns URL (studynest.duckdns.org)
- [x] Add simple landing page
- [x] Add CI/CD Pipeline

**Points for this week**  
5 pts - Technology: Developer type helping (typescript)  
5 pts - Technology: CI/CD pipeline  
10 pts - Technology: authentication and user account support  

Total: 25 / 146 pts
<hr />

### Nov 9 - Setup
- [x] Make style guide
- [x] Make database in DBeaver
- [x] Add a course (text input, reusable button)
- [x] Show a success toast on course creation success
- [x] Use Tanstack for client side api calls

**Points for this week**  
5 pts - Technology: Client side state stores (e.g. tanstack query or context)  
5 pts - Technology: Toasts / global notifications or alerts  
9 pts - Technology: 3+ generic form input components  
5 pts - Technology: Network Calls that read and write data

Total: 44 / 146 pts

---
## Nov 13 - Courses
- [x] Make simple error boundary
- [x] Connect a user to a course (through add course enroll)
- [x] Display a users enrolled courses on the dashboard
- [x] Edit a course

**Points for this week**  
5 pts - Technology: linting in pipeline  
5 pts - Technology: authorized pages and public pages  
5 pts - Technology: Error handling (both on api requests and render errors)  

Total: 76 / 146 pts
---
## Nov 16 - Modules
- [x] Add module to course
- [x] Show modules on dashboard
- [x] Edit module
- [x] Add a test

**Points for this week**  
12 pts - Technology: 4+ generic layout components    
5 pts - Technology: tests run in pipeline, pipeline aborts if they fail  

Total: 86 / 146 pts
---
## Nov 20 - Assignments
- [x] Add a task to a module ( update last active day on user )
- [x] Link to assignment resources
- [ ] Be able to assign personal score on assessment ( update last active day on user )

**Points for this week**
5 pts - Experience: 3 instances where elements re-order themselves on smaller screens     
5 pts - Experience: all experiences mobile friendly  
--- 
## Nov 23 - Steaks & Progress
- [ ] Be able to update time spent on task ( update last active day on user )
- [ ] Add module assessment
- [ ] Update user streak
- [ ] Update module progress based on assignment
- [ ] Ability to complete an assignment
- [ ] Order assignments based on completion

**Points for this week**  
5 pts - Technology: 10+ pages or views  

Total: 86 / 146 pts
--- 
## Nov 26 - Edit Modules
- [ ] Edit Module titles
- [ ] Show User Progress on Dashboard

--- 
## Dec 4
- [ ] Final Polishing
- [ ] Improve experience to be professional and organized

**Points for this week**  
20 pts - Professional, organized and smooth experience  
30 pts - Project scope is 2-3 times larger than Inventory Management (per group member)  

Total: 146 / 146 pts
<hr />

### Features
1. Users should be able to view their dashboard of courses and an overview of their assignments.
2. Users will be able to add a course with a title and a short description. The description may include their own goal for learning this topic.
3. Within each course is a collection of modules. When you click in on a course, you can see an overview of the modules that you have created and your general progress on this module.
4. Users can add a module with a title, a list of resources, and an optional due date for when the user will want to complete the module.
5. Each module contains a list of assignments associated with that module. You can add an assignment by giving it a title, due date, and estimated time to complete. Assignments will show up on the users to-do list.
6. At the end of each module, you have the option to create a Self-Assessment. Assessments have multiple choice questions to check your understanding. This might be a bit too out of scope for this assignment. If it is, I can modify it to have users link to a quizlet file or an Anki file and record their last score here instead of me building out a quiz system myself.
7. Users will be able to take assessments and receive a score (which is another planned page).
8. To track progress, users can add hours or complete an assignment. This will update the modules progress and add to their streaks.
9. Users can delete modules or assignments.
10. Users can browse other users public courses to get inspiration for their own courses. In the future, it would be really cool if you could enroll in another user’s course, but I will just leave it at viewing for now.

### New things to accomplish
1. Handling multiple users at once
2. I want to show the users data and progress in a data driven way, so I might incorporate a data-visualization library such as D3.js or Recharts.
3. A big part of my app will be the motivation part. I want the user to be able to set up notifications to complete their goals or daily learning objectives they have set up. 
