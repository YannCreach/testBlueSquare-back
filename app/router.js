const express = require('express');
const ticketController = require('./controllers/ticketController');
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');

const router = express.Router();

// Users
router.get('/user', userController.loginUser);
router.post('/user', userController.registerUser);
// router.patch('/user', userController.updateUser);
// router.delete('/user', userController.deleteUser);

// Tickets
router.get('/ticket', ticketController.getTicketById);
router.post('/ticket', ticketController.createTicket);
router.get('/tickets', ticketController.getAllTickets);
// router.patch('/ticket', ticketController.updateTicket);
// router.delete('/ticket', ticketController.deleteTicket);

// Projects
router.get('/projects', projectController.getAllProjects);


// router.get('/', (req, res) => {
//   let filePath = path.join(__dirname, '../index.html');
//   res.sendFile(filePath);
// });

module.exports = router;
