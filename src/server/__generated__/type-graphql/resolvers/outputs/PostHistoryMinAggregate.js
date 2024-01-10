"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostHistoryMinAggregate = class PostHistoryMinAggregate {
    id;
    title;
    content;
    postId;
    createdAt;
    updatedAt;
};
exports.PostHistoryMinAggregate = PostHistoryMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMinAggregate.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMinAggregate.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryMinAggregate.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryMinAggregate.prototype, "updatedAt", void 0);
exports.PostHistoryMinAggregate = PostHistoryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostHistoryMinAggregate", {})
], PostHistoryMinAggregate);
