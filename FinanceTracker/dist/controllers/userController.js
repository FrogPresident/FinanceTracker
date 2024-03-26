"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
exports.userController = {
    user(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userRepository_1.default.getAllUsers();
                res.json(users);
            }
            catch (err) {
                next(err);
            }
        });
    },
    userSignUpGet(req, res) {
        res.send('User create page');
    },
    userSignUpPost(req, res) {
        res.send('User create POST action');
    },
    userDeleteGet(req, res) {
        res.send('User delete GET page');
    },
    userDeletePost(req, res) {
        res.send('User delete POST action');
    },
    userSignInGet(req, res) {
        res.send('Sign in Page');
    },
    userSignInPost(req, res) {
        res.send('Sign in POST action');
    },
};
exports.default = exports.userController;
