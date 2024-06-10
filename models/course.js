const { DataTypes } = require('sequelize')

const sequelize = require('../lib/sequelize')
const bcrypt = require('bcryptjs')

// const { Photo } = require('./photo')
// const { Review } = require('./review')
// const { Business } = require('./business')
const { User } = require('./user')

const Course = sequelize.define('course', {
  subject_code: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false},
  instructor: {type: User, allowNull: false}
})

// /*
// * Set up one-to-many relationship between User and Business.
// */
// User.hasMany(Business, { foreignKey: { allowNull: false } })
// Business.belongsTo(User)

// /*
// * Set up one-to-many relationship between User and Photo.
// */
// User.hasMany(Photo, { foreignKey: { allowNull: false } })
// Photo.belongsTo(User)

// /*
// * Set up one-to-many relationship between User and Review.
// */
// User.hasMany(Review, { foreignKey: { allowNull: false } })
// Review.belongsTo(User)

exports.Course = Course

/*
 * Export an array containing the names of fields the client is allowed to set
 * on users.
 */
exports.CourseClientFields = [
  'subject_code',
  'number',
  'title',
  'instructor'
]