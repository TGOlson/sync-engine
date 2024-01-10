"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/PostUpdateOneRequiredWithoutCommentsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCommentsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCommentsNestedInput");
let CommentUpdateInput = class CommentUpdateInput {
    id;
    text;
    likes;
    createdAt;
    updatedAt;
    author;
    post;
};
exports.CommentUpdateInput = CommentUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCommentsNestedInput_1.UserUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutCommentsNestedInput_1.PostUpdateOneRequiredWithoutCommentsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateOneRequiredWithoutCommentsNestedInput_1.PostUpdateOneRequiredWithoutCommentsNestedInput)
], CommentUpdateInput.prototype, "post", void 0);
exports.CommentUpdateInput = CommentUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateInput", {})
], CommentUpdateInput);
