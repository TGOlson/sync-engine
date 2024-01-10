"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutCommentsInput_1 = require("../inputs/PostCreateOrConnectWithoutCommentsInput");
const PostCreateWithoutCommentsInput_1 = require("../inputs/PostCreateWithoutCommentsInput");
const PostUpdateToOneWithWhereWithoutCommentsInput_1 = require("../inputs/PostUpdateToOneWithWhereWithoutCommentsInput");
const PostUpsertWithoutCommentsInput_1 = require("../inputs/PostUpsertWithoutCommentsInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutCommentsNestedInput = class PostUpdateOneRequiredWithoutCommentsNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.PostUpdateOneRequiredWithoutCommentsNestedInput = PostUpdateOneRequiredWithoutCommentsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutCommentsInput_1.PostCreateWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutCommentsInput_1.PostCreateOrConnectWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutCommentsInput_1.PostUpsertWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutCommentsInput_1.PostUpsertWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutCommentsInput_1.PostUpdateToOneWithWhereWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateToOneWithWhereWithoutCommentsInput_1.PostUpdateToOneWithWhereWithoutCommentsInput)
], PostUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutCommentsNestedInput = PostUpdateOneRequiredWithoutCommentsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCommentsNestedInput", {})
], PostUpdateOneRequiredWithoutCommentsNestedInput);
