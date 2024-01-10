"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutPostNestedInput_1 = require("../inputs/CommentUpdateManyWithoutPostNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostHistoryUpdateManyWithoutPostNestedInput_1 = require("../inputs/PostHistoryUpdateManyWithoutPostNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPostsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPostsNestedInput");
let PostUpdateInput = class PostUpdateInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    author;
    comments;
};
exports.PostUpdateInput = PostUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput)
], PostUpdateInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPostsNestedInput_1.UserUpdateOneRequiredWithoutPostsNestedInput)
], PostUpdateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput)
], PostUpdateInput.prototype, "comments", void 0);
exports.PostUpdateInput = PostUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateInput", {})
], PostUpdateInput);
