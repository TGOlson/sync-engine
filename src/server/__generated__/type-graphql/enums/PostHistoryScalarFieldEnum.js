"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHistoryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PostHistoryScalarFieldEnum;
(function (PostHistoryScalarFieldEnum) {
    PostHistoryScalarFieldEnum["id"] = "id";
    PostHistoryScalarFieldEnum["title"] = "title";
    PostHistoryScalarFieldEnum["content"] = "content";
    PostHistoryScalarFieldEnum["postId"] = "postId";
    PostHistoryScalarFieldEnum["createdAt"] = "createdAt";
    PostHistoryScalarFieldEnum["updatedAt"] = "updatedAt";
})(PostHistoryScalarFieldEnum || (exports.PostHistoryScalarFieldEnum = PostHistoryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PostHistoryScalarFieldEnum, {
    name: "PostHistoryScalarFieldEnum",
    description: undefined,
});
