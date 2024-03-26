import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import homepageRoutes from './routes/homepage';
import User from './models/User';

// Try to connnect MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Init Express
const app = express();
const port = process.env.PORT || 3000;

// Pug set
app.set('view engine', 'pug');
// 設置views目錄的路徑
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// Application routes
app.use('/', homepageRoutes);

// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
