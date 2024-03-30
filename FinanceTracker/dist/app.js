"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const homepage_1 = __importDefault(require("./routes/homepage"));
// Try to connnect MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
// Init Express
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//  Session middleware
app.use((0, express_session_1.default)({
    secret: 'your-secret-key', // 用於簽署會話ID的密鑰
    resave: false, // 是否在每次請求時強制保存會話，建議設置為 false
    saveUninitialized: false // 是否保存未初始化的會話，建議設置為 false
}));
// Pug set
app.set('view engine', 'pug');
// 設置views目錄的路徑
app.set('views', path_1.default.join(__dirname, 'views'));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Redirect url to sign in page
app.get('/', (req, res) => {
    res.redirect('/sign-in');
});
// Application routes
app.use('/', homepage_1.default);
// Run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
