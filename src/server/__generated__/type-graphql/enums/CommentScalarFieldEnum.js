"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["id"] = "id";
    CommentScalarFieldEnum["text"] = "text";
    CommentScalarFieldEnum["authorId"] = "authorId";
    CommentScalarFieldEnum["postId"] = "postId";
    CommentScalarFieldEnum["likes"] = "likes";
    CommentScalarFieldEnum["createdAt"] = "createdAt";
    CommentScalarFieldEnum["updatedAt"] = "updatedAt";
})(CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = CommentScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
    name: "CommentScalarFieldEnum",
    description: undefined,
});
