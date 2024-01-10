"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver,
    PostHistory: crudResolvers.PostHistoryCrudResolver,
    Comment: crudResolvers.CommentCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Post: {
        aggregatePost: actionResolvers.AggregatePostResolver,
        createOnePost: actionResolvers.CreateOnePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        deleteOnePost: actionResolvers.DeleteOnePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        findFirstPostOrThrow: actionResolvers.FindFirstPostOrThrowResolver,
        posts: actionResolvers.FindManyPostResolver,
        post: actionResolvers.FindUniquePostResolver,
        getPost: actionResolvers.FindUniquePostOrThrowResolver,
        groupByPost: actionResolvers.GroupByPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        updateOnePost: actionResolvers.UpdateOnePostResolver,
        upsertOnePost: actionResolvers.UpsertOnePostResolver
    },
    PostHistory: {
        aggregatePostHistory: actionResolvers.AggregatePostHistoryResolver,
        createOnePostHistory: actionResolvers.CreateOnePostHistoryResolver,
        deleteManyPostHistory: actionResolvers.DeleteManyPostHistoryResolver,
        deleteOnePostHistory: actionResolvers.DeleteOnePostHistoryResolver,
        findFirstPostHistory: actionResolvers.FindFirstPostHistoryResolver,
        findFirstPostHistoryOrThrow: actionResolvers.FindFirstPostHistoryOrThrowResolver,
        postHistories: actionResolvers.FindManyPostHistoryResolver,
        postHistory: actionResolvers.FindUniquePostHistoryResolver,
        getPostHistory: actionResolvers.FindUniquePostHistoryOrThrowResolver,
        groupByPostHistory: actionResolvers.GroupByPostHistoryResolver,
        updateManyPostHistory: actionResolvers.UpdateManyPostHistoryResolver,
        updateOnePostHistory: actionResolvers.UpdateOnePostHistoryResolver,
        upsertOnePostHistory: actionResolvers.UpsertOnePostHistoryResolver
    },
    Comment: {
        aggregateComment: actionResolvers.AggregateCommentResolver,
        createOneComment: actionResolvers.CreateOneCommentResolver,
        deleteManyComment: actionResolvers.DeleteManyCommentResolver,
        deleteOneComment: actionResolvers.DeleteOneCommentResolver,
        findFirstComment: actionResolvers.FindFirstCommentResolver,
        findFirstCommentOrThrow: actionResolvers.FindFirstCommentOrThrowResolver,
        comments: actionResolvers.FindManyCommentResolver,
        comment: actionResolvers.FindUniqueCommentResolver,
        getComment: actionResolvers.FindUniqueCommentOrThrowResolver,
        groupByComment: actionResolvers.GroupByCommentResolver,
        updateManyComment: actionResolvers.UpdateManyCommentResolver,
        updateOneComment: actionResolvers.UpdateOneCommentResolver,
        upsertOneComment: actionResolvers.UpsertOneCommentResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Post: ["aggregatePost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "findFirstPostOrThrow", "posts", "post", "getPost", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
    PostHistory: ["aggregatePostHistory", "createOnePostHistory", "deleteManyPostHistory", "deleteOnePostHistory", "findFirstPostHistory", "findFirstPostHistoryOrThrow", "postHistories", "postHistory", "getPostHistory", "groupByPostHistory", "updateManyPostHistory", "updateOnePostHistory", "upsertOnePostHistory"],
    Comment: ["aggregateComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "findFirstCommentOrThrow", "comments", "comment", "getComment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOnePostArgs: ["data"],
    DeleteManyPostArgs: ["where"],
    DeleteOnePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPostOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePostArgs: ["where"],
    FindUniquePostOrThrowArgs: ["where"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPostArgs: ["data", "where"],
    UpdateOnePostArgs: ["data", "where"],
    UpsertOnePostArgs: ["where", "create", "update"],
    AggregatePostHistoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOnePostHistoryArgs: ["data"],
    DeleteManyPostHistoryArgs: ["where"],
    DeleteOnePostHistoryArgs: ["where"],
    FindFirstPostHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPostHistoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostHistoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePostHistoryArgs: ["where"],
    FindUniquePostHistoryOrThrowArgs: ["where"],
    GroupByPostHistoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPostHistoryArgs: ["data", "where"],
    UpdateOnePostHistoryArgs: ["data", "where"],
    UpsertOnePostHistoryArgs: ["where", "create", "update"],
    AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneCommentArgs: ["data"],
    DeleteManyCommentArgs: ["where"],
    DeleteOneCommentArgs: ["where"],
    FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCommentArgs: ["where"],
    FindUniqueCommentOrThrowArgs: ["where"],
    GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCommentArgs: ["data", "where"],
    UpdateOneCommentArgs: ["data", "where"],
    UpsertOneCommentArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Post: relationResolvers.PostRelationsResolver,
    PostHistory: relationResolvers.PostHistoryRelationsResolver,
    Comment: relationResolvers.CommentRelationsResolver
};
const relationResolversInfo = {
    User: ["posts", "comments"],
    Post: ["postHistory", "author", "comments"],
    PostHistory: ["post"],
    Comment: ["author", "post"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "name", "email", "createdAt", "updatedAt"],
    Post: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostHistory: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    Comment: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "published", "authorId", "likes", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePostHistory: ["_count", "_min", "_max"],
    PostHistoryGroupBy: ["id", "title", "content", "postId", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
    CommentGroupBy: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["posts", "comments"],
    UserCountAggregate: ["id", "name", "email", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "name", "email", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "name", "email", "createdAt", "updatedAt"],
    PostCount: ["postHistory", "comments"],
    PostCountAggregate: ["id", "published", "authorId", "likes", "createdAt", "updatedAt", "_all"],
    PostAvgAggregate: ["likes"],
    PostSumAggregate: ["likes"],
    PostMinAggregate: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostMaxAggregate: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostHistoryCountAggregate: ["id", "title", "content", "postId", "createdAt", "updatedAt", "_all"],
    PostHistoryMinAggregate: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    PostHistoryMaxAggregate: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    CommentCountAggregate: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "_all"],
    CommentAvgAggregate: ["likes"],
    CommentSumAggregate: ["likes"],
    CommentMinAggregate: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    CommentMaxAggregate: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "createdAt", "updatedAt", "posts", "comments"],
    UserOrderByWithRelationInput: ["id", "name", "email", "createdAt", "updatedAt", "posts", "comments"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "createdAt", "updatedAt", "posts", "comments"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "createdAt", "updatedAt"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "published", "authorId", "likes", "createdAt", "updatedAt", "postHistory", "author", "comments"],
    PostOrderByWithRelationInput: ["id", "published", "authorId", "likes", "createdAt", "updatedAt", "postHistory", "author", "comments"],
    PostWhereUniqueInput: ["id", "AND", "OR", "NOT", "published", "authorId", "likes", "createdAt", "updatedAt", "postHistory", "author", "comments"],
    PostOrderByWithAggregationInput: ["id", "published", "authorId", "likes", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostHistoryWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "postId", "createdAt", "updatedAt", "post"],
    PostHistoryOrderByWithRelationInput: ["id", "title", "content", "postId", "createdAt", "updatedAt", "post"],
    PostHistoryWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "content", "postId", "createdAt", "updatedAt", "post"],
    PostHistoryOrderByWithAggregationInput: ["id", "title", "content", "postId", "createdAt", "updatedAt", "_count", "_max", "_min"],
    PostHistoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "content", "postId", "createdAt", "updatedAt"],
    CommentWhereInput: ["AND", "OR", "NOT", "id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "author", "post"],
    CommentOrderByWithRelationInput: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "author", "post"],
    CommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "author", "post"],
    CommentOrderByWithAggregationInput: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "name", "email", "createdAt", "updatedAt", "posts", "comments"],
    UserUpdateInput: ["id", "name", "email", "createdAt", "updatedAt", "posts", "comments"],
    UserUpdateManyMutationInput: ["id", "name", "email", "createdAt", "updatedAt"],
    PostCreateInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "author", "comments"],
    PostUpdateInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "author", "comments"],
    PostUpdateManyMutationInput: ["id", "published", "likes", "createdAt", "updatedAt"],
    PostHistoryCreateInput: ["id", "title", "content", "createdAt", "updatedAt", "post"],
    PostHistoryUpdateInput: ["id", "title", "content", "createdAt", "updatedAt", "post"],
    PostHistoryUpdateManyMutationInput: ["id", "title", "content", "createdAt", "updatedAt"],
    CommentCreateInput: ["id", "text", "likes", "createdAt", "updatedAt", "author", "post"],
    CommentUpdateInput: ["id", "text", "likes", "createdAt", "updatedAt", "author", "post"],
    CommentUpdateManyMutationInput: ["id", "text", "likes", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostListRelationFilter: ["every", "some", "none"],
    CommentListRelationFilter: ["every", "some", "none"],
    PostOrderByRelationAggregateInput: ["_count"],
    CommentOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolFilter: ["equals", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostHistoryListRelationFilter: ["every", "some", "none"],
    UserRelationFilter: ["is", "isNot"],
    PostHistoryOrderByRelationAggregateInput: ["_count"],
    PostCountOrderByAggregateInput: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostAvgOrderByAggregateInput: ["likes"],
    PostMaxOrderByAggregateInput: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostMinOrderByAggregateInput: ["id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    PostSumOrderByAggregateInput: ["likes"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    PostRelationFilter: ["is", "isNot"],
    PostHistoryCountOrderByAggregateInput: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    PostHistoryMaxOrderByAggregateInput: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    PostHistoryMinOrderByAggregateInput: ["id", "title", "content", "postId", "createdAt", "updatedAt"],
    CommentCountOrderByAggregateInput: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    CommentAvgOrderByAggregateInput: ["likes"],
    CommentMaxOrderByAggregateInput: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    CommentMinOrderByAggregateInput: ["id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    CommentSumOrderByAggregateInput: ["likes"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
    CommentCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    PostUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CommentUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PostHistoryCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "connect"],
    BoolFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    PostHistoryUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CommentUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PostCreateNestedOneWithoutPostHistoryInput: ["create", "connectOrCreate", "connect"],
    PostUpdateOneRequiredWithoutPostHistoryNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PostUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolFilter: ["equals", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PostCreateWithoutAuthorInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "comments"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    CommentCreateWithoutAuthorInput: ["id", "text", "likes", "createdAt", "updatedAt", "post"],
    CommentCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "published", "authorId", "likes", "createdAt", "updatedAt"],
    CommentUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "authorId", "postId", "likes", "createdAt", "updatedAt"],
    PostHistoryCreateWithoutPostInput: ["id", "title", "content", "createdAt", "updatedAt"],
    PostHistoryCreateOrConnectWithoutPostInput: ["where", "create"],
    UserCreateWithoutPostsInput: ["id", "name", "email", "createdAt", "updatedAt", "comments"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    CommentCreateWithoutPostInput: ["id", "text", "likes", "createdAt", "updatedAt", "author"],
    CommentCreateOrConnectWithoutPostInput: ["where", "create"],
    PostHistoryUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    PostHistoryUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    PostHistoryUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    PostHistoryScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "postId", "createdAt", "updatedAt"],
    UserUpsertWithoutPostsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutPostsInput: ["where", "data"],
    UserUpdateWithoutPostsInput: ["id", "name", "email", "createdAt", "updatedAt", "comments"],
    CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
    CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
    CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
    PostCreateWithoutPostHistoryInput: ["id", "published", "likes", "createdAt", "updatedAt", "author", "comments"],
    PostCreateOrConnectWithoutPostHistoryInput: ["where", "create"],
    PostUpsertWithoutPostHistoryInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutPostHistoryInput: ["where", "data"],
    PostUpdateWithoutPostHistoryInput: ["id", "published", "likes", "createdAt", "updatedAt", "author", "comments"],
    UserCreateWithoutCommentsInput: ["id", "name", "email", "createdAt", "updatedAt", "posts"],
    UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
    PostCreateWithoutCommentsInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "author"],
    PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
    UserUpsertWithoutCommentsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    UserUpdateWithoutCommentsInput: ["id", "name", "email", "createdAt", "updatedAt", "posts"],
    PostUpsertWithoutCommentsInput: ["update", "create", "where"],
    PostUpdateToOneWithWhereWithoutCommentsInput: ["where", "data"],
    PostUpdateWithoutCommentsInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "author"],
    PostUpdateWithoutAuthorInput: ["id", "published", "likes", "createdAt", "updatedAt", "postHistory", "comments"],
    CommentUpdateWithoutAuthorInput: ["id", "text", "likes", "createdAt", "updatedAt", "post"],
    PostHistoryUpdateWithoutPostInput: ["id", "title", "content", "createdAt", "updatedAt"],
    CommentUpdateWithoutPostInput: ["id", "text", "likes", "createdAt", "updatedAt", "author"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
