const { Tickets } = require('../models');

class ticketController {

  static async getAllTickets(req, res) {
    try {
      const tickets = await Tickets.findAll({
        where: {
          place_id: req.body.place_id
        }
      });
      res.status(200).json({ tickets });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getTicketById(req, res) {
    try {
      const { id } = req.body;
      const tickets = await Tickets.findByPk(id);
      if (tickets) {
        res.status(200).json({ tickets });
      } else {
        res.status(404).json({ message: 'Ticket not found' });
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async createTicket(req, res) {
    try {
      const { title, type, priority, description, context, link, browser, os } = req.body;
      const tickets = await Tickets.create({title, type, priority, description, context, link, browser, os});

      res.status(200).json({ tickets });

    } catch (error) {
      console.trace(error);
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = ticketController;
