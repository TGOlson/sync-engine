"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostMaxAggregate = class PostMaxAggregate {
    id;
    published;
    authorId;
    likes;
    createdAt;
    updatedAt;
};
exports.PostMaxAggregate = PostMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostMaxAggregate.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostMaxAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostMaxAggregate.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostMaxAggregate.prototype, "updatedAt", void 0);
exports.PostMaxAggregate = PostMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostMaxAggregate", {})
], PostMaxAggregate);
