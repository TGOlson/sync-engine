"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostMinAggregate = class PostMinAggregate {
    id;
    published;
    authorId;
    likes;
    createdAt;
    updatedAt;
};
exports.PostMinAggregate = PostMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostMinAggregate.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostMinAggregate.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostMinAggregate.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostMinAggregate.prototype, "updatedAt", void 0);
exports.PostMinAggregate = PostMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostMinAggregate", {})
], PostMinAggregate);
