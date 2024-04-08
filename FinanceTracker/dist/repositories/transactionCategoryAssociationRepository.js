"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionCategoryAssociation_1 = __importDefault(require("../models/TransactionCategoryAssociation"));
class TransactionCategoryAssociationRepository {
    create(data) {
        const association = new TransactionCategoryAssociation_1.default(data);
        return association.save();
    }
}
exports.default = new TransactionCategoryAssociationRepository();
