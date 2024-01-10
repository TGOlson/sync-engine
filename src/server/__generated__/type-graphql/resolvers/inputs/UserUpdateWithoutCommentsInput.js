"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PostUpdateManyWithoutAuthorNestedInput_1 = require("../inputs/PostUpdateManyWithoutAuthorNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutCommentsInput = class UserUpdateWithoutCommentsInput {
    id;
    name;
    email;
    createdAt;
    updatedAt;
    posts;
};
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutCommentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput_1.PostUpdateManyWithoutAuthorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorNestedInput_1.PostUpdateManyWithoutAuthorNestedInput)
], UserUpdateWithoutCommentsInput.prototype, "posts", void 0);
exports.UserUpdateWithoutCommentsInput = UserUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutCommentsInput", {})
], UserUpdateWithoutCommentsInput);
