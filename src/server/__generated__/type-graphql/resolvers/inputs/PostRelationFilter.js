"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostRelationFilter = class PostRelationFilter {
    is;
    isNot;
};
exports.PostRelationFilter = PostRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostRelationFilter.prototype, "isNot", void 0);
exports.PostRelationFilter = PostRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PostRelationFilter", {})
], PostRelationFilter);
