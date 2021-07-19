const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// * `Tag`

//   * `id`

//     * Integer.

//     * Doesn't allow null values.

//     * Set as primary key.

//     * Uses auto increment.

//   * `tag_name`

//     * String.

// * `ProductTag`

//   * `id`

//     * Integer.

//     * Doesn't allow null values.

//     * Set as primary key.

//     * Uses auto increment.

//   * `product_id`

//     * Integer.

//     * References the `Product` model's `id`.

//   * `tag_id`

//     * Integer.

//     * References the `Tag` model's `id`.

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
