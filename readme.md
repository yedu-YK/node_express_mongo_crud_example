# **NODE EXPRESS MONGODB - CRUD**

## *TO RUN *

* **yarn add** or **npm install** -- install all node modules
* **yarn dev**  or **npm run dev** -- for running project

##**API**
* base address http://localhost:8080/api
* /student method = GET get all registered students
* /student/:id  method = Get a student 
* /student/:id  method = PATCH a student 
* /student/:id  method = DELETE a student 
* /teacher method = GET get all registered teachers
* /teacher/:id  method = Get a teacher 
* /teacher/:id  method = PATCH a teacher 
* /teacher/:id  method = DELETE a teacher 
* /class method = GET get all registered classes
* /class/:id  method = Get a class 
* /class/:id  method = PATCH a class 
* /class/:id  method = DELETE a class 
* /class/division/:id  method  = GET get all divsions in a standard
* /teacher/classes/:id  method = GET get all teachers for class
* /student/division/:division  method = GET get all students in a division
* /student/division/:division/:standard  method = GET get all students in a division and standard