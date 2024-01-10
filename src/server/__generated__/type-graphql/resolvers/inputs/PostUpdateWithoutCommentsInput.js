"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostHistoryUpdateManyWithoutPostNestedInput_1 = require("../inputs/PostHistoryUpdateManyWithoutPostNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPostsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsNestedInput");
let PostUpdateWithoutCommentsInput = class PostUpdateWithoutCommentsInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
};
exports.PostUpdateWithoutCommentsInput = PostUpdateWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutCommentsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutCommentsInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput)
], PostUpdateWithoutCommentsInput.prototype, "author", void 0);
exports.PostUpdateWithoutCommentsInput = PostUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutCommentsInput", {})
], PostUpdateWithoutCommentsInput);
