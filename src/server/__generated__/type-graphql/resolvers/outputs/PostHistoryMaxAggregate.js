"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostHistoryMaxAggregate = class PostHistoryMaxAggregate {
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
};
exports.PostHistoryMaxAggregate = PostHistoryMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMaxAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMaxAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMaxAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryMaxAggregate.prototype, "updatedAt", void 0);
exports.PostHistoryMaxAggregate = PostHistoryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostHistoryMaxAggregate", {})
], PostHistoryMaxAggregate);
