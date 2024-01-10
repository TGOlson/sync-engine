"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutPostNestedInput_1 = require("../inputs/CommentUpdateManyWithoutPostNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostHistoryUpdateManyWithoutPostNestedInput_1 = require("../inputs/PostHistoryUpdateManyWithoutPostNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostUpdateWithoutAuthorInput = class PostUpdateWithoutAuthorInput {
    id;
    published;
    likes;
    createdAt;
    updatedAt;
    postHistory;
    comments;
};
exports.PostUpdateWithoutAuthorInput = PostUpdateWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "likes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateWithoutAuthorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostHistoryUpdateManyWithoutPostNestedInput_1.PostHistoryUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutAuthorInput.prototype, "postHistory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutPostNestedInput_1.CommentUpdateManyWithoutPostNestedInput)
], PostUpdateWithoutAuthorInput.prototype, "comments", void 0);
exports.PostUpdateWithoutAuthorInput = PostUpdateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateWithoutAuthorInput", {})
], PostUpdateWithoutAuthorInput);
