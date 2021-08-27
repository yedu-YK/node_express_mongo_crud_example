//index file for controller

//importing functions
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
import { classesTeacher } from "./classesOfTeacher";
import { studentDivision,studentsInClass } from "./studentsDivision";


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
  classesTeacher,
  studentDivision,
  studentsInClass
};
