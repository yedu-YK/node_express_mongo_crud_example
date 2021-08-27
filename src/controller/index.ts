import {
  getAllTeachers,
  getATeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "./teacherController";
import {
  getAllClasses,
  getAClasses,
  createClass,
  updateClasses,
  deleteClasses,
} from "./classController";
import {
  getAllStudents,
  getAStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./studentController";

import { divisionStandard } from "./divisionStandards";


export {
  getAllStudents,
  getAStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllClasses,
  getAClasses,
  createClass,
  updateClasses,
  deleteClasses,
  getAllTeachers,
  getATeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,

  divisionStandard,
};
