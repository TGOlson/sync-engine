"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentSumAggregate = class CommentSumAggregate {
    likes;
};
exports.CommentSumAggregate = CommentSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentSumAggregate.prototype, "likes", void 0);
exports.CommentSumAggregate = CommentSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentSumAggregate", {})
], CommentSumAggregate);
