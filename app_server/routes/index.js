const express = require('express');
const router = express.Router();
const ctrlCourses = 
require('../controllers/courses');
const ctrlOthers = require('../controllers/others');
const ctrlLectures=require('../controllers/lectures');
const ctrlTbpdfs=require('../controllers/tbpdfs')
const ctrlloginregister=require('../controllers/account')
const ctrlProfile=require('../controllers/profile')
/* Locations pages */
router.get('/', ctrlCourses.homelist);
router.get('/Courses', ctrlCourses.CoursesInfo);
router.get('/Courses/review/new', ctrlCourses.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
/* Lectures pages */
router.get('/notes', ctrlLectures.notes);
/*TB pdfs pages*/
router.get('/textbooks', ctrlTbpdfs.textbooks);
/*Register or login page*/
router.get('/register-login',ctrlloginregister.signuporin);
/*Profile of user*/
router.get('/profile',ctrlProfile.userprofile);
module.exports = router;
