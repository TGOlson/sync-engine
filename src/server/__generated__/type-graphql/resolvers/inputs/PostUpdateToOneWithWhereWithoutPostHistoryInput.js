"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateToOneWithWhereWithoutPostHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutPostHistoryInput_1 = require("../inputs/PostUpdateWithoutPostHistoryInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpdateToOneWithWhereWithoutPostHistoryInput = class PostUpdateToOneWithWhereWithoutPostHistoryInput {
    where;
    data;
};
exports.PostUpdateToOneWithWhereWithoutPostHistoryInput = PostUpdateToOneWithWhereWithoutPostHistoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutPostHistoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutPostHistoryInput_1.PostUpdateWithoutPostHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutPostHistoryInput_1.PostUpdateWithoutPostHistoryInput)
], PostUpdateToOneWithWhereWithoutPostHistoryInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutPostHistoryInput = PostUpdateToOneWithWhereWithoutPostHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutPostHistoryInput", {})
], PostUpdateToOneWithWhereWithoutPostHistoryInput);
