"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutPostHistoryNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutPostHistoryNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostHistoryUpdateInput = class PostHistoryUpdateInput {
    id;
    title;
    content;
    createdAt;
    updatedAt;
    post;
};
exports.PostHistoryUpdateInput = PostHistoryUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostHistoryUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostHistoryUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostHistoryUpdateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostHistoryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostHistoryUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutPostHistoryNestedInput_1.PostUpdateOneRequiredWithoutPostHistoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutPostHistoryNestedInput_1.PostUpdateOneRequiredWithoutPostHistoryNestedInput)
], PostHistoryUpdateInput.prototype, "post", void 0);
exports.PostHistoryUpdateInput = PostHistoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostHistoryUpdateInput", {})
], PostHistoryUpdateInput);
