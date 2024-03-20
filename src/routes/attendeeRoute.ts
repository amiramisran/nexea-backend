import express from 'express';
import { uploadAttendees } from '@controllers/attendeeController';
import { extractCSVData } from '@services/attendeeServices';

export const attendeesRouter = express.Router();

// Route for file upload
attendeesRouter.post('/upload', uploadAttendees);
attendeesRouter.get('/download', extractCSVData);