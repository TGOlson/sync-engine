"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    TodoItem: crudResolvers.TodoItemCrudResolver
};
const actionResolversMap = {
    TodoItem: {
        aggregateTodoItem: actionResolvers.AggregateTodoItemResolver,
        createManyTodoItem: actionResolvers.CreateManyTodoItemResolver,
        createOneTodoItem: actionResolvers.CreateOneTodoItemResolver,
        deleteManyTodoItem: actionResolvers.DeleteManyTodoItemResolver,
        deleteOneTodoItem: actionResolvers.DeleteOneTodoItemResolver,
        findFirstTodoItem: actionResolvers.FindFirstTodoItemResolver,
        findFirstTodoItemOrThrow: actionResolvers.FindFirstTodoItemOrThrowResolver,
        todoItems: actionResolvers.FindManyTodoItemResolver,
        todoItem: actionResolvers.FindUniqueTodoItemResolver,
        getTodoItem: actionResolvers.FindUniqueTodoItemOrThrowResolver,
        groupByTodoItem: actionResolvers.GroupByTodoItemResolver,
        updateManyTodoItem: actionResolvers.UpdateManyTodoItemResolver,
        updateOneTodoItem: actionResolvers.UpdateOneTodoItemResolver,
        upsertOneTodoItem: actionResolvers.UpsertOneTodoItemResolver
    }
};
const crudResolversInfo = {
    TodoItem: ["aggregateTodoItem", "createManyTodoItem", "createOneTodoItem", "deleteManyTodoItem", "deleteOneTodoItem", "findFirstTodoItem", "findFirstTodoItemOrThrow", "todoItems", "todoItem", "getTodoItem", "groupByTodoItem", "updateManyTodoItem", "updateOneTodoItem", "upsertOneTodoItem"]
};
const argsInfo = {
    AggregateTodoItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTodoItemArgs: ["data", "skipDuplicates"],
    CreateOneTodoItemArgs: ["data"],
    DeleteManyTodoItemArgs: ["where"],
    DeleteOneTodoItemArgs: ["where"],
    FindFirstTodoItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTodoItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTodoItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTodoItemArgs: ["where"],
    FindUniqueTodoItemOrThrowArgs: ["where"],
    GroupByTodoItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTodoItemArgs: ["data", "where"],
    UpdateOneTodoItemArgs: ["data", "where"],
    UpsertOneTodoItemArgs: ["where", "create", "update"]
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
    TodoItem: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"]
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
    AggregateTodoItem: ["_count", "_avg", "_sum", "_min", "_max"],
    TodoItemGroupBy: ["id", "text", "complete", "hidden", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    TodoItemCountAggregate: ["id", "text", "complete", "hidden", "createdAt", "updatedAt", "_all"],
    TodoItemAvgAggregate: ["id"],
    TodoItemSumAggregate: ["id"],
    TodoItemMinAggregate: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemMaxAggregate: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"]
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
    TodoItemWhereInput: ["AND", "OR", "NOT", "id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemOrderByWithRelationInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemWhereUniqueInput: ["id", "AND", "OR", "NOT", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemOrderByWithAggregationInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    TodoItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemCreateInput: ["text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemUpdateInput: ["text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemCreateManyInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemUpdateManyMutationInput: ["text", "complete", "hidden", "createdAt", "updatedAt"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    TodoItemCountOrderByAggregateInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemAvgOrderByAggregateInput: ["id"],
    TodoItemMaxOrderByAggregateInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemMinOrderByAggregateInput: ["id", "text", "complete", "hidden", "createdAt", "updatedAt"],
    TodoItemSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"]
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
