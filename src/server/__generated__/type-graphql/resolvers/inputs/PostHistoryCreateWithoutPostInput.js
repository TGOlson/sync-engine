"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryCreateWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostHistoryCreateWithoutPostInput = class PostHistoryCreateWithoutPostInput {
    id;
    title;
    content;
    createdAt;
    updatedAt;
};
exports.PostHistoryCreateWithoutPostInput = PostHistoryCreateWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateWithoutPostInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateWithoutPostInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostHistoryCreateWithoutPostInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryCreateWithoutPostInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostHistoryCreateWithoutPostInput.prototype, "updatedAt", void 0);
exports.PostHistoryCreateWithoutPostInput = PostHistoryCreateWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryCreateWithoutPostInput", {})
], PostHistoryCreateWithoutPostInput);
