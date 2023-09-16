const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down!');
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down!');
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

// mongoose.set('debug', true);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
