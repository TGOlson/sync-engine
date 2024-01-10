"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedOneWithoutPostHistoryInput_1 = require("../inputs/PostCreateNestedOneWithoutPostHistoryInput");
let PostHistoryCreateInput = class PostHistoryCreateInput {
    id;
    title;
    content;
    createdAt;
    updatedAt;
    post;
};
exports.PostHistoryCreateInput = PostHistoryCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPostHistoryInput_1.PostCreateNestedOneWithoutPostHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateNestedOneWithoutPostHistoryInput_1.PostCreateNestedOneWithoutPostHistoryInput)
], PostHistoryCreateInput.prototype, "post", void 0);
exports.PostHistoryCreateInput = PostHistoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryCreateInput", {})
], PostHistoryCreateInput);
