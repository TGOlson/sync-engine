"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutCommentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CommentUpdateWithoutAuthorInput = class CommentUpdateWithoutAuthorInput {
    id;
    text;
    likes;
    createdAt;
    updatedAt;
    post;
};
exports.CommentUpdateWithoutAuthorInput = CommentUpdateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsNestedInput_1.PostUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutCommentsNestedInput_1.PostUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateWithoutAuthorInput.prototype, "post", void 0);
exports.CommentUpdateWithoutAuthorInput = CommentUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateWithoutAuthorInput", {})
], CommentUpdateWithoutAuthorInput);
