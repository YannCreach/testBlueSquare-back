const Tickets = require('./tickets');
const Projects = require('./projects');
const Users = require('./users');

Users.belongsToMany(Tickets, { through: 'user_has_ticket' });
Tickets.belongsToMany(Users, { through: 'user_has_ticket' });

Projects.hasMany(Tickets, {
  foreignKey: 'place_id',
  as: 'place_note'
});
Tickets.belongsTo(Projects, {
  foreignKey: 'place_id',
  as: 'note_place'
});

module.exports = { Users, Tickets };
