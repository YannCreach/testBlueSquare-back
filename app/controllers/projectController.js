const { Projects } = require('../models');

class projectController {

  static async getAllProjects(req, res) {
    try {
      const projects = await Projects.findAll({
        where: {
          place_id: req.body.place_id
        }
      });
      res.status(200).json({ projects });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = projectController;
