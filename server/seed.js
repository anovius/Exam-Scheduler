require('dotenv').config();
const mongoose = require('mongoose');


let con = mongoose.connect('mongodb://localhost/EXAM?retryWrites=false', {
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
  const seedUsers = require('./seeder/users');



async function init() {
  console.log("dropping DB");
  await mongoose.connection.db.dropDatabase();
  await seedUsers();
  exit();
}


function exit() {
  console.log('exiting')
  process.exit(1)
}
