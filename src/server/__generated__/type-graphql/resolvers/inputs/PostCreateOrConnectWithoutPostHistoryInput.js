"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutPostHistoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutPostHistoryInput_1 = require("../inputs/PostCreateWithoutPostHistoryInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutPostHistoryInput = class PostCreateOrConnectWithoutPostHistoryInput {
    where;
    create;
};
exports.PostCreateOrConnectWithoutPostHistoryInput = PostCreateOrConnectWithoutPostHistoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutPostHistoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutPostHistoryInput_1.PostCreateWithoutPostHistoryInput)
], PostCreateOrConnectWithoutPostHistoryInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutPostHistoryInput = PostCreateOrConnectWithoutPostHistoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutPostHistoryInput", {})
], PostCreateOrConnectWithoutPostHistoryInput);
