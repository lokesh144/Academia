import { Router } from 'express';

// const { format } = require('date-fns');
import {Notice,Event,Application} from '../models/user-model.js';
const router = Router();
// const findStudentByBirthday = require('../controller/birthdays.js')
router.get('/', function(req, res) {
  res.send('This is the home page');
});
router.get('/api/notice', function(req, res) {
  // res.send('This is the notice page');
  const { data } = req.body;
    // Handle data processing and saving to the database
    res.status(200).json({ message: 'Data received', data });
});
router.post('/api/notice', async function(req, res) {
  // res.send('This is the notice page');
  console.log(req.body)
  // const { ...data } = req.body;
  const { title,description,selectedClasses } = req.body;

  // console.log(data);
  const newNotice = new Notice({
    title,
    description,selectedClasses,
  });
    // Handle data processing and saving to the database
    // res.status(200).json({ message: {data} });
    try {
      const savedNotice = await newNotice.save();
      res.json(savedNotice);
    } catch (error) {
      res.status(500).json({ error: 'Error saving data to database' });
    }
});
router.post('/api/event', async function(req, res) {
  // res.send('This is the notice page');
  console.log(req.body)
  // const { ...data } = req.body;
  const { title,description } = req.body;

  // console.log(data);
  const newEvent = new Event({
    title,
    description,
  });
    // Handle data processing and saving to the database
    // res.status(200).json({ message: {data} });
    
    try {
      const savedEvent = await newEvent.save();
      res.json(savedEvent);
      console.log("Event added successfully !");
    } catch (error) {
      console.error('Error saving event:', error); 
      res.status(500).json({ error: 'Error saving data to database' });
    }
});

router.get('/api/get-notice', async function( req,res) {
  // const filteredNotices=[{}];
    try {
      const notices = await Notice.find(); 
      const filteredNotices = notices.map(notice => ({
        title: notice.title,
        descrp: notice.description,
        classes: notice.selectedClasses,
      }));
      // res.json(filteredNotices);
      res.status(200).json(filteredNotices);
   } catch (err) {
      res.status(500).json({ message: err.message });
    }
    // res.status(200).json([{ message: 'Sent succes',filteredNotices}]);
});
router.get('/api/event', async function( req,res) {
  // const filteredNotices=[{}];
    try {
      const events = await Event.find(); 
      const firstEvents = events.map(notice => ({
        title: notice.title,
        description: notice.description,
      }));
      res.status(200).json(firstEvents);
   } catch (err) {
      res.status(500).json({ message: err.message });
    }
    // res.status(200).json([{ message: 'Sent succes',filteredNotices}]);
});
// Create a new user


// Get all users
router.post('/api/teachers', async function(req, res) {
  // res.send('This is the notice page');
  console.log(req.body)
  // const { ...data } = req.body;
  const { fname,lname,email,contact } = req.body;

  // console.log(data);
  const newApplication = new Application({
    fname,
    lname,email,contact
  });
    // Handle data processing and saving to the database
    // res.status(200).json({ message: {data} });
    
  
    try {
      const savedApplication = await newApplication.save();
      res.json(savedApplication);
    } catch (error) {
      res.status(500).json({ error: 'Error saving data to database' });
    }
});
export default router;