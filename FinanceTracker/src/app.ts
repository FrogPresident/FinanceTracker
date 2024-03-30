import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import session from 'express-session';
import homepageRoutes from './routes/homepage';
import User from './models/User';

// Try to connnect MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Init Express
const app = express();
const port = process.env.PORT || 3000;

//  Session middleware
app.use(session({
  secret: 'your-secret-key', // 用於簽署會話ID的密鑰
  resave: false, // 是否在每次請求時強制保存會話，建議設置為 false
  saveUninitialized: false // 是否保存未初始化的會話，建議設置為 false
}));

// Pug set
app.set('view engine', 'pug');
// 設置views目錄的路徑
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// Redirect url to sign in page
app.get('/', (req, res) => {
  res.redirect('/sign-in');
});

// Application routes
app.use('/', homepageRoutes);

// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
