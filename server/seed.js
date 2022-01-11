require('dotenv').config();
const mongoose = require('mongoose');


let con = mongoose.connect('mongodb://localhost:27017/EXAM', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch(err => {
  console.log(err);
  process.exit(1);
})
  .then(() => {
    console.log("connected to db in development environment");
    init()
  });


  
  require('./models/User');
  require('./models/Chat');
  require('./models/Friend');
  require('./models/Notification');
  require('./models/Article');
  require('./models/Comment');
  require('./models/Package');
  require('./models/Transaction');
  require('./models/Rating');

  const seedPackages = require('./seeder/packages');
  const seedUsers = require('./seeder/users');
  const seedProfiles = require('./seeder/seedProfiles');
  const seedArticles = require('./seeder/article');
  const seedRatings = require('./seeder/ratings');
  const seedConnections = require('./seeder/connection');
  const seedSponsors = require('./seeder/sponsor');



async function init() {
  console.log("dropping DB");
  await mongoose.connection.db.dropDatabase();

  await seedPackages();
  await seedUsers();
  //await seedProfiles();
  //await seedArticles();
  //await seedRatings();
  //await seedConnections();
  //await seedSponsors();
  exit();
}


function exit() {
  console.log('exiting')
  process.exit(1)
}
