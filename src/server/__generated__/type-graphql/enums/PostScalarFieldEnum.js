"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PostScalarFieldEnum;
(function (PostScalarFieldEnum) {
    PostScalarFieldEnum["id"] = "id";
    PostScalarFieldEnum["published"] = "published";
    PostScalarFieldEnum["authorId"] = "authorId";
    PostScalarFieldEnum["likes"] = "likes";
    PostScalarFieldEnum["createdAt"] = "createdAt";
    PostScalarFieldEnum["updatedAt"] = "updatedAt";
})(PostScalarFieldEnum || (exports.PostScalarFieldEnum = PostScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
    name: "PostScalarFieldEnum",
    description: undefined,
});
