"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutCommentsInput_1 = require("../inputs/PostCreateWithoutCommentsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutCommentsInput = class PostCreateOrConnectWithoutCommentsInput {
    where;
    create;
};
exports.PostCreateOrConnectWithoutCommentsInput = PostCreateOrConnectWithoutCommentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutCommentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput)
], PostCreateOrConnectWithoutCommentsInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutCommentsInput = PostCreateOrConnectWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutCommentsInput", {})
], PostCreateOrConnectWithoutCommentsInput);
