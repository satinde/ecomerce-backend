// 1) npx sequelize-cli init (create project)

// 2) create Modal
// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// 3) Run migration command
// npx sequelize-cli db:migrate

// 4) Create Seeder
// npx sequelize-cli seed:generate --name demo-user

// 5) Run Seeder
// npx sequelize-cli db:seed:all

// 6) Create Migration Command
// npx sequelize-cli migration:generate --name add-phoneNumber-to-users

// 7) Run Migration Command
// npx sequelize-cli db:migrate

// ----------------------(Add Column)---------------------
// Update model Migrations (Add Column Phone Number)

// Step 1 (add Column)
// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//       // define associations if any
//     }
//   }
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     phoneNumber: DataTypes.STRING // Define the phoneNumber field
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// Step 2: Generate a Migration
// npx sequelize-cli migration:generate --name add-phoneNumber-to-users

// Step 3: Edit the Migration
// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('Users', 'phoneNumber', {
//       type: Sequelize.STRING,
//       allowNull: true, // Modify as necessary based on your requirements
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('Users', 'phoneNumber');
//   }
// };

// Step 4: Run Migration
// npx sequelize-cli db:migrate

// --------------------(Rename Column)-----------------
// Update model Migrations (Rename Column email to userEmail)

// (Step 1 Rename column)
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     userEmail: DataTypes.STRING,
//     phoneNumber: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// (Step 2: Generate a Migration)
// npx sequelize-cli migration:generate --name rename-email-to-userEmail

// (Step 3: Edit the Migration)
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.renameColumn('Users', 'email', 'userEmail');
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.renameColumn('Users', 'userEmail', 'email');
//   }
// };

// (Step 4: Run Migration)
// npx sequelize-cli db:migrate

// --------------------------(Delete Column)---------------------------------
// Update model Migrations (Delete Column phoneNumber)

// (Step 1 Delete column)
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     userEmail: DataTypes.STRING,

//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// (Step 2: Generate a Migration)
// npx sequelize-cli migration:generate --name remove-phoneNumber-from-users

// (Step 3: Edit the Migration)
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.removeColumn('Users', 'phoneNumber');
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.addColumn('Users', 'phoneNumber', {
//       type: Sequelize.STRING,
//       allowNull: true, // Adjust based on your original column definition
//     });
//   }
// };


// (Step 4: Run Migration)
// npx sequelize-cli db:migrate

// --------------------------(One to many cli)-----------------

// Step 1 (Create Course Model)
// npx sequelize-cli model:generate --name Course --attributes courseName:string,courseCode:string,courseDetail:string,userId:integer

// Step 2 (Model with user id )
// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Courses', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       courseName: {
//         type: Sequelize.STRING
//       },
//       courseCode: {
//         type: Sequelize.STRING
//       },
//       courseDetail: {
//         type: Sequelize.STRING
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         onDelete: 'CASCADE', // Delete Courses associated with User if User is deleted
//         onUpdate: 'CASCADE', // Update userId in Courses if User is updated
//         references: {
//           model: 'Users', // Name of the referenced table
//           key: 'id' // Primary key of the referenced table
//         }
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Courses');
//   }
// };

// Step 3 (one-to-many)

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Course extends Model {
//     static associate(models) {
//       // Define association here
//       Course.belongsTo(models.User, {
//         foreignKey: 'userId', // Foreign key in the Course table
//         as: 'user', // Alias to access User
//         onDelete: 'CASCADE', // Delete Courses associated with User if User is deleted
//         onUpdate: 'CASCADE' // Update userId in Courses if User is updated
//       });
//     }
//   };
//   Course.init({
//     courseName: DataTypes.STRING,
//     courseCode: DataTypes.STRING,
//     courseDetail: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Course',
//   });
//   return Course;
// };

// Step 4 (run)
// npx sequelize-cli db:migrate


// --------------------------------End---------------------------------


