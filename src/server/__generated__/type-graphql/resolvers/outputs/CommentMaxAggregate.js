"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentMaxAggregate = class CommentMaxAggregate {
    id;
    text;
    authorId;
    postId;
    likes;
    createdAt;
    updatedAt;
};
exports.CommentMaxAggregate = CommentMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentMaxAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentMaxAggregate.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentMaxAggregate.prototype, "updatedAt", void 0);
exports.CommentMaxAggregate = CommentMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentMaxAggregate", {})
], CommentMaxAggregate);
