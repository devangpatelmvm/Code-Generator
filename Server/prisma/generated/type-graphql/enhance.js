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
    Users: crudResolvers.UsersCrudResolver,
    User_roles: crudResolvers.User_rolesCrudResolver,
    Projects: crudResolvers.ProjectsCrudResolver,
    Packages: crudResolvers.PackagesCrudResolver,
    Components: crudResolvers.ComponentsCrudResolver,
    HtmlLines: crudResolvers.HtmlLinesCrudResolver,
    Css: crudResolvers.CssCrudResolver,
    TsLines: crudResolvers.TsLinesCrudResolver,
    Tables: crudResolvers.TablesCrudResolver,
    Columns: crudResolvers.ColumnsCrudResolver
};
const actionResolversMap = {
    Users: {
        aggregateUsers: actionResolvers.AggregateUsersResolver,
        createOneUsers: actionResolvers.CreateOneUsersResolver,
        deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
        deleteOneUsers: actionResolvers.DeleteOneUsersResolver,
        findFirstUsers: actionResolvers.FindFirstUsersResolver,
        findManyUsers: actionResolvers.FindManyUsersResolver,
        findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
        groupByUsers: actionResolvers.GroupByUsersResolver,
        updateManyUsers: actionResolvers.UpdateManyUsersResolver,
        updateOneUsers: actionResolvers.UpdateOneUsersResolver,
        upsertOneUsers: actionResolvers.UpsertOneUsersResolver
    },
    User_roles: {
        aggregateUser_roles: actionResolvers.AggregateUser_rolesResolver,
        createOneUser_roles: actionResolvers.CreateOneUser_rolesResolver,
        deleteManyUser_roles: actionResolvers.DeleteManyUser_rolesResolver,
        deleteOneUser_roles: actionResolvers.DeleteOneUser_rolesResolver,
        findFirstUser_roles: actionResolvers.FindFirstUser_rolesResolver,
        findManyUser_roles: actionResolvers.FindManyUser_rolesResolver,
        findUniqueUser_roles: actionResolvers.FindUniqueUser_rolesResolver,
        groupByUser_roles: actionResolvers.GroupByUser_rolesResolver,
        updateManyUser_roles: actionResolvers.UpdateManyUser_rolesResolver,
        updateOneUser_roles: actionResolvers.UpdateOneUser_rolesResolver,
        upsertOneUser_roles: actionResolvers.UpsertOneUser_rolesResolver
    },
    Projects: {
        aggregateProjects: actionResolvers.AggregateProjectsResolver,
        createOneProjects: actionResolvers.CreateOneProjectsResolver,
        deleteManyProjects: actionResolvers.DeleteManyProjectsResolver,
        deleteOneProjects: actionResolvers.DeleteOneProjectsResolver,
        findFirstProjects: actionResolvers.FindFirstProjectsResolver,
        findManyProjects: actionResolvers.FindManyProjectsResolver,
        findUniqueProjects: actionResolvers.FindUniqueProjectsResolver,
        groupByProjects: actionResolvers.GroupByProjectsResolver,
        updateManyProjects: actionResolvers.UpdateManyProjectsResolver,
        updateOneProjects: actionResolvers.UpdateOneProjectsResolver,
        upsertOneProjects: actionResolvers.UpsertOneProjectsResolver
    },
    Packages: {
        aggregatePackages: actionResolvers.AggregatePackagesResolver,
        createOnePackages: actionResolvers.CreateOnePackagesResolver,
        deleteManyPackages: actionResolvers.DeleteManyPackagesResolver,
        deleteOnePackages: actionResolvers.DeleteOnePackagesResolver,
        findFirstPackages: actionResolvers.FindFirstPackagesResolver,
        findManyPackages: actionResolvers.FindManyPackagesResolver,
        findUniquePackages: actionResolvers.FindUniquePackagesResolver,
        groupByPackages: actionResolvers.GroupByPackagesResolver,
        updateManyPackages: actionResolvers.UpdateManyPackagesResolver,
        updateOnePackages: actionResolvers.UpdateOnePackagesResolver,
        upsertOnePackages: actionResolvers.UpsertOnePackagesResolver
    },
    Components: {
        aggregateComponents: actionResolvers.AggregateComponentsResolver,
        createOneComponents: actionResolvers.CreateOneComponentsResolver,
        deleteManyComponents: actionResolvers.DeleteManyComponentsResolver,
        deleteOneComponents: actionResolvers.DeleteOneComponentsResolver,
        findFirstComponents: actionResolvers.FindFirstComponentsResolver,
        findManyComponents: actionResolvers.FindManyComponentsResolver,
        findUniqueComponents: actionResolvers.FindUniqueComponentsResolver,
        groupByComponents: actionResolvers.GroupByComponentsResolver,
        updateManyComponents: actionResolvers.UpdateManyComponentsResolver,
        updateOneComponents: actionResolvers.UpdateOneComponentsResolver,
        upsertOneComponents: actionResolvers.UpsertOneComponentsResolver
    },
    HtmlLines: {
        aggregateHtmlLines: actionResolvers.AggregateHtmlLinesResolver,
        createOneHtmlLines: actionResolvers.CreateOneHtmlLinesResolver,
        deleteManyHtmlLines: actionResolvers.DeleteManyHtmlLinesResolver,
        deleteOneHtmlLines: actionResolvers.DeleteOneHtmlLinesResolver,
        findFirstHtmlLines: actionResolvers.FindFirstHtmlLinesResolver,
        findManyHtmlLines: actionResolvers.FindManyHtmlLinesResolver,
        findUniqueHtmlLines: actionResolvers.FindUniqueHtmlLinesResolver,
        groupByHtmlLines: actionResolvers.GroupByHtmlLinesResolver,
        updateManyHtmlLines: actionResolvers.UpdateManyHtmlLinesResolver,
        updateOneHtmlLines: actionResolvers.UpdateOneHtmlLinesResolver,
        upsertOneHtmlLines: actionResolvers.UpsertOneHtmlLinesResolver
    },
    Css: {
        aggregateCss: actionResolvers.AggregateCssResolver,
        createOneCss: actionResolvers.CreateOneCssResolver,
        deleteManyCss: actionResolvers.DeleteManyCssResolver,
        deleteOneCss: actionResolvers.DeleteOneCssResolver,
        findFirstCss: actionResolvers.FindFirstCssResolver,
        csses: actionResolvers.FindManyCssResolver,
        css: actionResolvers.FindUniqueCssResolver,
        groupByCss: actionResolvers.GroupByCssResolver,
        updateManyCss: actionResolvers.UpdateManyCssResolver,
        updateOneCss: actionResolvers.UpdateOneCssResolver,
        upsertOneCss: actionResolvers.UpsertOneCssResolver
    },
    TsLines: {
        aggregateTsLines: actionResolvers.AggregateTsLinesResolver,
        createOneTsLines: actionResolvers.CreateOneTsLinesResolver,
        deleteManyTsLines: actionResolvers.DeleteManyTsLinesResolver,
        deleteOneTsLines: actionResolvers.DeleteOneTsLinesResolver,
        findFirstTsLines: actionResolvers.FindFirstTsLinesResolver,
        findManyTsLines: actionResolvers.FindManyTsLinesResolver,
        findUniqueTsLines: actionResolvers.FindUniqueTsLinesResolver,
        groupByTsLines: actionResolvers.GroupByTsLinesResolver,
        updateManyTsLines: actionResolvers.UpdateManyTsLinesResolver,
        updateOneTsLines: actionResolvers.UpdateOneTsLinesResolver,
        upsertOneTsLines: actionResolvers.UpsertOneTsLinesResolver
    },
    Tables: {
        aggregateTables: actionResolvers.AggregateTablesResolver,
        createOneTables: actionResolvers.CreateOneTablesResolver,
        deleteManyTables: actionResolvers.DeleteManyTablesResolver,
        deleteOneTables: actionResolvers.DeleteOneTablesResolver,
        findFirstTables: actionResolvers.FindFirstTablesResolver,
        findManyTables: actionResolvers.FindManyTablesResolver,
        findUniqueTables: actionResolvers.FindUniqueTablesResolver,
        groupByTables: actionResolvers.GroupByTablesResolver,
        updateManyTables: actionResolvers.UpdateManyTablesResolver,
        updateOneTables: actionResolvers.UpdateOneTablesResolver,
        upsertOneTables: actionResolvers.UpsertOneTablesResolver
    },
    Columns: {
        aggregateColumns: actionResolvers.AggregateColumnsResolver,
        createOneColumns: actionResolvers.CreateOneColumnsResolver,
        deleteManyColumns: actionResolvers.DeleteManyColumnsResolver,
        deleteOneColumns: actionResolvers.DeleteOneColumnsResolver,
        findFirstColumns: actionResolvers.FindFirstColumnsResolver,
        findManyColumns: actionResolvers.FindManyColumnsResolver,
        findUniqueColumns: actionResolvers.FindUniqueColumnsResolver,
        groupByColumns: actionResolvers.GroupByColumnsResolver,
        updateManyColumns: actionResolvers.UpdateManyColumnsResolver,
        updateOneColumns: actionResolvers.UpdateOneColumnsResolver,
        upsertOneColumns: actionResolvers.UpsertOneColumnsResolver
    }
};
const crudResolversInfo = {
    Users: ["aggregateUsers", "createOneUsers", "deleteManyUsers", "deleteOneUsers", "findFirstUsers", "findManyUsers", "findUniqueUsers", "groupByUsers", "updateManyUsers", "updateOneUsers", "upsertOneUsers"],
    User_roles: ["aggregateUser_roles", "createOneUser_roles", "deleteManyUser_roles", "deleteOneUser_roles", "findFirstUser_roles", "findManyUser_roles", "findUniqueUser_roles", "groupByUser_roles", "updateManyUser_roles", "updateOneUser_roles", "upsertOneUser_roles"],
    Projects: ["aggregateProjects", "createOneProjects", "deleteManyProjects", "deleteOneProjects", "findFirstProjects", "findManyProjects", "findUniqueProjects", "groupByProjects", "updateManyProjects", "updateOneProjects", "upsertOneProjects"],
    Packages: ["aggregatePackages", "createOnePackages", "deleteManyPackages", "deleteOnePackages", "findFirstPackages", "findManyPackages", "findUniquePackages", "groupByPackages", "updateManyPackages", "updateOnePackages", "upsertOnePackages"],
    Components: ["aggregateComponents", "createOneComponents", "deleteManyComponents", "deleteOneComponents", "findFirstComponents", "findManyComponents", "findUniqueComponents", "groupByComponents", "updateManyComponents", "updateOneComponents", "upsertOneComponents"],
    HtmlLines: ["aggregateHtmlLines", "createOneHtmlLines", "deleteManyHtmlLines", "deleteOneHtmlLines", "findFirstHtmlLines", "findManyHtmlLines", "findUniqueHtmlLines", "groupByHtmlLines", "updateManyHtmlLines", "updateOneHtmlLines", "upsertOneHtmlLines"],
    Css: ["aggregateCss", "createOneCss", "deleteManyCss", "deleteOneCss", "findFirstCss", "csses", "css", "groupByCss", "updateManyCss", "updateOneCss", "upsertOneCss"],
    TsLines: ["aggregateTsLines", "createOneTsLines", "deleteManyTsLines", "deleteOneTsLines", "findFirstTsLines", "findManyTsLines", "findUniqueTsLines", "groupByTsLines", "updateManyTsLines", "updateOneTsLines", "upsertOneTsLines"],
    Tables: ["aggregateTables", "createOneTables", "deleteManyTables", "deleteOneTables", "findFirstTables", "findManyTables", "findUniqueTables", "groupByTables", "updateManyTables", "updateOneTables", "upsertOneTables"],
    Columns: ["aggregateColumns", "createOneColumns", "deleteManyColumns", "deleteOneColumns", "findFirstColumns", "findManyColumns", "findUniqueColumns", "groupByColumns", "updateManyColumns", "updateOneColumns", "upsertOneColumns"]
};
const argsInfo = {
    AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneUsersArgs: ["data"],
    DeleteManyUsersArgs: ["where"],
    DeleteOneUsersArgs: ["where"],
    FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUsersArgs: ["where"],
    GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUsersArgs: ["data", "where"],
    UpdateOneUsersArgs: ["data", "where"],
    UpsertOneUsersArgs: ["where", "create", "update"],
    AggregateUser_rolesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneUser_rolesArgs: ["data"],
    DeleteManyUser_rolesArgs: ["where"],
    DeleteOneUser_rolesArgs: ["where"],
    FindFirstUser_rolesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUser_rolesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUser_rolesArgs: ["where"],
    GroupByUser_rolesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUser_rolesArgs: ["data", "where"],
    UpdateOneUser_rolesArgs: ["data", "where"],
    UpsertOneUser_rolesArgs: ["where", "create", "update"],
    AggregateProjectsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneProjectsArgs: ["data"],
    DeleteManyProjectsArgs: ["where"],
    DeleteOneProjectsArgs: ["where"],
    FindFirstProjectsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProjectsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueProjectsArgs: ["where"],
    GroupByProjectsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyProjectsArgs: ["data", "where"],
    UpdateOneProjectsArgs: ["data", "where"],
    UpsertOneProjectsArgs: ["where", "create", "update"],
    AggregatePackagesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOnePackagesArgs: ["data"],
    DeleteManyPackagesArgs: ["where"],
    DeleteOnePackagesArgs: ["where"],
    FindFirstPackagesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPackagesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePackagesArgs: ["where"],
    GroupByPackagesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPackagesArgs: ["data", "where"],
    UpdateOnePackagesArgs: ["data", "where"],
    UpsertOnePackagesArgs: ["where", "create", "update"],
    AggregateComponentsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneComponentsArgs: ["data"],
    DeleteManyComponentsArgs: ["where"],
    DeleteOneComponentsArgs: ["where"],
    FindFirstComponentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyComponentsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueComponentsArgs: ["where"],
    GroupByComponentsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyComponentsArgs: ["data", "where"],
    UpdateOneComponentsArgs: ["data", "where"],
    UpsertOneComponentsArgs: ["where", "create", "update"],
    AggregateHtmlLinesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneHtmlLinesArgs: ["data"],
    DeleteManyHtmlLinesArgs: ["where"],
    DeleteOneHtmlLinesArgs: ["where"],
    FindFirstHtmlLinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyHtmlLinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueHtmlLinesArgs: ["where"],
    GroupByHtmlLinesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyHtmlLinesArgs: ["data", "where"],
    UpdateOneHtmlLinesArgs: ["data", "where"],
    UpsertOneHtmlLinesArgs: ["where", "create", "update"],
    AggregateCssArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneCssArgs: ["data"],
    DeleteManyCssArgs: ["where"],
    DeleteOneCssArgs: ["where"],
    FindFirstCssArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCssArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCssArgs: ["where"],
    GroupByCssArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCssArgs: ["data", "where"],
    UpdateOneCssArgs: ["data", "where"],
    UpsertOneCssArgs: ["where", "create", "update"],
    AggregateTsLinesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneTsLinesArgs: ["data"],
    DeleteManyTsLinesArgs: ["where"],
    DeleteOneTsLinesArgs: ["where"],
    FindFirstTsLinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTsLinesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTsLinesArgs: ["where"],
    GroupByTsLinesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTsLinesArgs: ["data", "where"],
    UpdateOneTsLinesArgs: ["data", "where"],
    UpsertOneTsLinesArgs: ["where", "create", "update"],
    AggregateTablesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneTablesArgs: ["data"],
    DeleteManyTablesArgs: ["where"],
    DeleteOneTablesArgs: ["where"],
    FindFirstTablesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTablesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTablesArgs: ["where"],
    GroupByTablesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTablesArgs: ["data", "where"],
    UpdateOneTablesArgs: ["data", "where"],
    UpsertOneTablesArgs: ["where", "create", "update"],
    AggregateColumnsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneColumnsArgs: ["data"],
    DeleteManyColumnsArgs: ["where"],
    DeleteOneColumnsArgs: ["where"],
    FindFirstColumnsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyColumnsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueColumnsArgs: ["where"],
    GroupByColumnsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyColumnsArgs: ["data", "where"],
    UpdateOneColumnsArgs: ["data", "where"],
    UpsertOneColumnsArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
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
    Users: relationResolvers.UsersRelationsResolver,
    User_roles: relationResolvers.User_rolesRelationsResolver,
    Projects: relationResolvers.ProjectsRelationsResolver,
    Packages: relationResolvers.PackagesRelationsResolver,
    Components: relationResolvers.ComponentsRelationsResolver,
    HtmlLines: relationResolvers.HtmlLinesRelationsResolver,
    Css: relationResolvers.CssRelationsResolver,
    TsLines: relationResolvers.TsLinesRelationsResolver,
    Tables: relationResolvers.TablesRelationsResolver,
    Columns: relationResolvers.ColumnsRelationsResolver
};
const relationResolversInfo = {
    Users: ["user_roles", "project"],
    User_roles: ["users"],
    Projects: ["Package", "table", "user", "Components"],
    Packages: ["project"],
    Components: ["htmlline", "tsLine", "css", "project"],
    HtmlLines: ["component"],
    Css: ["component"],
    TsLines: ["component"],
    Tables: ["project", "column"],
    Columns: ["table"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
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
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Users: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    User_roles: ["id", "name", "permissions"],
    Projects: ["id", "description", "name", "provider", "url", "framework", "userId"],
    Packages: ["id", "name", "version", "projectId"],
    Components: ["id", "name", "projectId"],
    HtmlLines: ["id", "line", "componentId"],
    Css: ["id", "content", "componentId"],
    TsLines: ["id", "line", "componentId"],
    Tables: ["id", "name", "projectId"],
    Columns: ["id", "name", "type", "constraint", "tableId"]
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
    AggregateUsers: ["_count", "_avg", "_sum", "_min", "_max"],
    UsersGroupBy: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser_roles: ["_count", "_avg", "_sum", "_min", "_max"],
    User_rolesGroupBy: ["id", "name", "permissions", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProjects: ["_count", "_avg", "_sum", "_min", "_max"],
    ProjectsGroupBy: ["id", "description", "name", "provider", "url", "framework", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePackages: ["_count", "_avg", "_sum", "_min", "_max"],
    PackagesGroupBy: ["id", "name", "version", "projectId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateComponents: ["_count", "_avg", "_sum", "_min", "_max"],
    ComponentsGroupBy: ["id", "name", "projectId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateHtmlLines: ["_count", "_avg", "_sum", "_min", "_max"],
    HtmlLinesGroupBy: ["id", "line", "componentId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCss: ["_count", "_avg", "_sum", "_min", "_max"],
    CssGroupBy: ["id", "content", "componentId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTsLines: ["_count", "_avg", "_sum", "_min", "_max"],
    TsLinesGroupBy: ["id", "line", "componentId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTables: ["_count", "_avg", "_sum", "_min", "_max"],
    TablesGroupBy: ["id", "name", "projectId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateColumns: ["_count", "_avg", "_sum", "_min", "_max"],
    ColumnsGroupBy: ["id", "name", "type", "constraint", "tableId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UsersCount: ["project"],
    UsersCountAggregate: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId", "_all"],
    UsersAvgAggregate: ["id", "user_rolesId"],
    UsersSumAggregate: ["id", "user_rolesId"],
    UsersMinAggregate: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    UsersMaxAggregate: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    User_rolesCount: ["users"],
    User_rolesCountAggregate: ["id", "name", "permissions", "_all"],
    User_rolesAvgAggregate: ["id"],
    User_rolesSumAggregate: ["id"],
    User_rolesMinAggregate: ["id", "name", "permissions"],
    User_rolesMaxAggregate: ["id", "name", "permissions"],
    ProjectsCount: ["Package", "table", "Components"],
    ProjectsCountAggregate: ["id", "description", "name", "provider", "url", "framework", "userId", "_all"],
    ProjectsAvgAggregate: ["id", "userId"],
    ProjectsSumAggregate: ["id", "userId"],
    ProjectsMinAggregate: ["id", "description", "name", "provider", "url", "framework", "userId"],
    ProjectsMaxAggregate: ["id", "description", "name", "provider", "url", "framework", "userId"],
    PackagesCountAggregate: ["id", "name", "version", "projectId", "_all"],
    PackagesAvgAggregate: ["id", "projectId"],
    PackagesSumAggregate: ["id", "projectId"],
    PackagesMinAggregate: ["id", "name", "version", "projectId"],
    PackagesMaxAggregate: ["id", "name", "version", "projectId"],
    ComponentsCount: ["htmlline", "tsLine", "css"],
    ComponentsCountAggregate: ["id", "name", "projectId", "_all"],
    ComponentsAvgAggregate: ["id", "projectId"],
    ComponentsSumAggregate: ["id", "projectId"],
    ComponentsMinAggregate: ["id", "name", "projectId"],
    ComponentsMaxAggregate: ["id", "name", "projectId"],
    HtmlLinesCountAggregate: ["id", "line", "componentId", "_all"],
    HtmlLinesAvgAggregate: ["id", "componentId"],
    HtmlLinesSumAggregate: ["id", "componentId"],
    HtmlLinesMinAggregate: ["id", "line", "componentId"],
    HtmlLinesMaxAggregate: ["id", "line", "componentId"],
    CssCountAggregate: ["id", "content", "componentId", "_all"],
    CssAvgAggregate: ["id", "componentId"],
    CssSumAggregate: ["id", "componentId"],
    CssMinAggregate: ["id", "content", "componentId"],
    CssMaxAggregate: ["id", "content", "componentId"],
    TsLinesCountAggregate: ["id", "line", "componentId", "_all"],
    TsLinesAvgAggregate: ["id", "componentId"],
    TsLinesSumAggregate: ["id", "componentId"],
    TsLinesMinAggregate: ["id", "line", "componentId"],
    TsLinesMaxAggregate: ["id", "line", "componentId"],
    TablesCount: ["column"],
    TablesCountAggregate: ["id", "name", "projectId", "_all"],
    TablesAvgAggregate: ["id", "projectId"],
    TablesSumAggregate: ["id", "projectId"],
    TablesMinAggregate: ["id", "name", "projectId"],
    TablesMaxAggregate: ["id", "name", "projectId"],
    ColumnsCountAggregate: ["id", "name", "type", "constraint", "tableId", "_all"],
    ColumnsAvgAggregate: ["id", "tableId"],
    ColumnsSumAggregate: ["id", "tableId"],
    ColumnsMinAggregate: ["id", "name", "type", "constraint", "tableId"],
    ColumnsMaxAggregate: ["id", "name", "type", "constraint", "tableId"]
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
    UsersWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "createdAt", "user_roles", "user_rolesId", "project"],
    UsersOrderByWithRelationInput: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_roles", "user_rolesId", "project"],
    UsersWhereUniqueInput: ["id", "email"],
    UsersOrderByWithAggregationInput: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId", "_count", "_avg", "_max", "_min", "_sum"],
    UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    User_rolesWhereInput: ["AND", "OR", "NOT", "id", "name", "permissions", "users"],
    User_rolesOrderByWithRelationInput: ["id", "name", "permissions", "users"],
    User_rolesWhereUniqueInput: ["id"],
    User_rolesOrderByWithAggregationInput: ["id", "name", "permissions", "_count", "_avg", "_max", "_min", "_sum"],
    User_rolesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "permissions"],
    ProjectsWhereInput: ["AND", "OR", "NOT", "id", "description", "name", "provider", "url", "framework", "Package", "table", "user", "userId", "Components"],
    ProjectsOrderByWithRelationInput: ["id", "description", "name", "provider", "url", "framework", "Package", "table", "user", "userId", "Components"],
    ProjectsWhereUniqueInput: ["id"],
    ProjectsOrderByWithAggregationInput: ["id", "description", "name", "provider", "url", "framework", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    ProjectsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "name", "provider", "url", "framework", "userId"],
    PackagesWhereInput: ["AND", "OR", "NOT", "id", "name", "version", "project", "projectId"],
    PackagesOrderByWithRelationInput: ["id", "name", "version", "project", "projectId"],
    PackagesWhereUniqueInput: ["id"],
    PackagesOrderByWithAggregationInput: ["id", "name", "version", "projectId", "_count", "_avg", "_max", "_min", "_sum"],
    PackagesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "version", "projectId"],
    ComponentsWhereInput: ["AND", "OR", "NOT", "id", "name", "htmlline", "tsLine", "css", "project", "projectId"],
    ComponentsOrderByWithRelationInput: ["id", "name", "htmlline", "tsLine", "css", "project", "projectId"],
    ComponentsWhereUniqueInput: ["id"],
    ComponentsOrderByWithAggregationInput: ["id", "name", "projectId", "_count", "_avg", "_max", "_min", "_sum"],
    ComponentsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "projectId"],
    HtmlLinesWhereInput: ["AND", "OR", "NOT", "id", "line", "component", "componentId"],
    HtmlLinesOrderByWithRelationInput: ["id", "line", "component", "componentId"],
    HtmlLinesWhereUniqueInput: ["id"],
    HtmlLinesOrderByWithAggregationInput: ["id", "line", "componentId", "_count", "_avg", "_max", "_min", "_sum"],
    HtmlLinesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "line", "componentId"],
    CssWhereInput: ["AND", "OR", "NOT", "id", "content", "component", "componentId"],
    CssOrderByWithRelationInput: ["id", "content", "component", "componentId"],
    CssWhereUniqueInput: ["id"],
    CssOrderByWithAggregationInput: ["id", "content", "componentId", "_count", "_avg", "_max", "_min", "_sum"],
    CssScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "content", "componentId"],
    TsLinesWhereInput: ["AND", "OR", "NOT", "id", "line", "component", "componentId"],
    TsLinesOrderByWithRelationInput: ["id", "line", "component", "componentId"],
    TsLinesWhereUniqueInput: ["id"],
    TsLinesOrderByWithAggregationInput: ["id", "line", "componentId", "_count", "_avg", "_max", "_min", "_sum"],
    TsLinesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "line", "componentId"],
    TablesWhereInput: ["AND", "OR", "NOT", "id", "name", "project", "projectId", "column"],
    TablesOrderByWithRelationInput: ["id", "name", "project", "projectId", "column"],
    TablesWhereUniqueInput: ["id"],
    TablesOrderByWithAggregationInput: ["id", "name", "projectId", "_count", "_avg", "_max", "_min", "_sum"],
    TablesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "projectId"],
    ColumnsWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "constraint", "table", "tableId"],
    ColumnsOrderByWithRelationInput: ["id", "name", "type", "constraint", "table", "tableId"],
    ColumnsWhereUniqueInput: ["id"],
    ColumnsOrderByWithAggregationInput: ["id", "name", "type", "constraint", "tableId", "_count", "_avg", "_max", "_min", "_sum"],
    ColumnsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "type", "constraint", "tableId"],
    UsersCreateInput: ["first_name", "last_name", "email", "password", "createdAt", "user_roles", "project"],
    UsersUpdateInput: ["first_name", "last_name", "email", "password", "createdAt", "user_roles", "project"],
    UsersUpdateManyMutationInput: ["first_name", "last_name", "email", "password", "createdAt"],
    User_rolesCreateInput: ["name", "permissions", "users"],
    User_rolesUpdateInput: ["name", "permissions", "users"],
    User_rolesUpdateManyMutationInput: ["name", "permissions"],
    ProjectsCreateInput: ["description", "name", "provider", "url", "framework", "Package", "table", "user", "Components"],
    ProjectsUpdateInput: ["description", "name", "provider", "url", "framework", "Package", "table", "user", "Components"],
    ProjectsUpdateManyMutationInput: ["description", "name", "provider", "url", "framework"],
    PackagesCreateInput: ["name", "version", "project"],
    PackagesUpdateInput: ["name", "version", "project"],
    PackagesUpdateManyMutationInput: ["name", "version"],
    ComponentsCreateInput: ["name", "htmlline", "tsLine", "css", "project"],
    ComponentsUpdateInput: ["name", "htmlline", "tsLine", "css", "project"],
    ComponentsUpdateManyMutationInput: ["name"],
    HtmlLinesCreateInput: ["line", "component"],
    HtmlLinesUpdateInput: ["line", "component"],
    HtmlLinesUpdateManyMutationInput: ["line"],
    CssCreateInput: ["content", "component"],
    CssUpdateInput: ["content", "component"],
    CssUpdateManyMutationInput: ["content"],
    TsLinesCreateInput: ["line", "component"],
    TsLinesUpdateInput: ["line", "component"],
    TsLinesUpdateManyMutationInput: ["line"],
    TablesCreateInput: ["name", "project", "column"],
    TablesUpdateInput: ["name", "project", "column"],
    TablesUpdateManyMutationInput: ["name"],
    ColumnsCreateInput: ["name", "type", "constraint", "table"],
    ColumnsUpdateInput: ["name", "type", "constraint", "table"],
    ColumnsUpdateManyMutationInput: ["name", "type", "constraint"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    User_rolesRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ProjectsListRelationFilter: ["every", "some", "none"],
    ProjectsOrderByRelationAggregateInput: ["_count"],
    UsersCountOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    UsersAvgOrderByAggregateInput: ["id", "user_rolesId"],
    UsersMaxOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    UsersMinOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    UsersSumOrderByAggregateInput: ["id", "user_rolesId"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UsersListRelationFilter: ["every", "some", "none"],
    UsersOrderByRelationAggregateInput: ["_count"],
    User_rolesCountOrderByAggregateInput: ["id", "name", "permissions"],
    User_rolesAvgOrderByAggregateInput: ["id"],
    User_rolesMaxOrderByAggregateInput: ["id", "name", "permissions"],
    User_rolesMinOrderByAggregateInput: ["id", "name", "permissions"],
    User_rolesSumOrderByAggregateInput: ["id"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    PackagesListRelationFilter: ["every", "some", "none"],
    TablesListRelationFilter: ["every", "some", "none"],
    UsersRelationFilter: ["is", "isNot"],
    ComponentsListRelationFilter: ["every", "some", "none"],
    PackagesOrderByRelationAggregateInput: ["_count"],
    TablesOrderByRelationAggregateInput: ["_count"],
    ComponentsOrderByRelationAggregateInput: ["_count"],
    ProjectsCountOrderByAggregateInput: ["id", "description", "name", "provider", "url", "framework", "userId"],
    ProjectsAvgOrderByAggregateInput: ["id", "userId"],
    ProjectsMaxOrderByAggregateInput: ["id", "description", "name", "provider", "url", "framework", "userId"],
    ProjectsMinOrderByAggregateInput: ["id", "description", "name", "provider", "url", "framework", "userId"],
    ProjectsSumOrderByAggregateInput: ["id", "userId"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    ProjectsRelationFilter: ["is", "isNot"],
    PackagesCountOrderByAggregateInput: ["id", "name", "version", "projectId"],
    PackagesAvgOrderByAggregateInput: ["id", "projectId"],
    PackagesMaxOrderByAggregateInput: ["id", "name", "version", "projectId"],
    PackagesMinOrderByAggregateInput: ["id", "name", "version", "projectId"],
    PackagesSumOrderByAggregateInput: ["id", "projectId"],
    HtmlLinesListRelationFilter: ["every", "some", "none"],
    TsLinesListRelationFilter: ["every", "some", "none"],
    CssListRelationFilter: ["every", "some", "none"],
    HtmlLinesOrderByRelationAggregateInput: ["_count"],
    TsLinesOrderByRelationAggregateInput: ["_count"],
    CssOrderByRelationAggregateInput: ["_count"],
    ComponentsCountOrderByAggregateInput: ["id", "name", "projectId"],
    ComponentsAvgOrderByAggregateInput: ["id", "projectId"],
    ComponentsMaxOrderByAggregateInput: ["id", "name", "projectId"],
    ComponentsMinOrderByAggregateInput: ["id", "name", "projectId"],
    ComponentsSumOrderByAggregateInput: ["id", "projectId"],
    ComponentsRelationFilter: ["is", "isNot"],
    HtmlLinesCountOrderByAggregateInput: ["id", "line", "componentId"],
    HtmlLinesAvgOrderByAggregateInput: ["id", "componentId"],
    HtmlLinesMaxOrderByAggregateInput: ["id", "line", "componentId"],
    HtmlLinesMinOrderByAggregateInput: ["id", "line", "componentId"],
    HtmlLinesSumOrderByAggregateInput: ["id", "componentId"],
    CssCountOrderByAggregateInput: ["id", "content", "componentId"],
    CssAvgOrderByAggregateInput: ["id", "componentId"],
    CssMaxOrderByAggregateInput: ["id", "content", "componentId"],
    CssMinOrderByAggregateInput: ["id", "content", "componentId"],
    CssSumOrderByAggregateInput: ["id", "componentId"],
    TsLinesCountOrderByAggregateInput: ["id", "line", "componentId"],
    TsLinesAvgOrderByAggregateInput: ["id", "componentId"],
    TsLinesMaxOrderByAggregateInput: ["id", "line", "componentId"],
    TsLinesMinOrderByAggregateInput: ["id", "line", "componentId"],
    TsLinesSumOrderByAggregateInput: ["id", "componentId"],
    ColumnsListRelationFilter: ["every", "some", "none"],
    ColumnsOrderByRelationAggregateInput: ["_count"],
    TablesCountOrderByAggregateInput: ["id", "name", "projectId"],
    TablesAvgOrderByAggregateInput: ["id", "projectId"],
    TablesMaxOrderByAggregateInput: ["id", "name", "projectId"],
    TablesMinOrderByAggregateInput: ["id", "name", "projectId"],
    TablesSumOrderByAggregateInput: ["id", "projectId"],
    TablesRelationFilter: ["is", "isNot"],
    ColumnsCountOrderByAggregateInput: ["id", "name", "type", "constraint", "tableId"],
    ColumnsAvgOrderByAggregateInput: ["id", "tableId"],
    ColumnsMaxOrderByAggregateInput: ["id", "name", "type", "constraint", "tableId"],
    ColumnsMinOrderByAggregateInput: ["id", "name", "type", "constraint", "tableId"],
    ColumnsSumOrderByAggregateInput: ["id", "tableId"],
    User_rolesCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
    ProjectsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    User_rolesUpdateOneWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    ProjectsUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UsersCreateNestedManyWithoutUser_rolesInput: ["create", "connectOrCreate", "connect"],
    UsersUpdateManyWithoutUser_rolesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PackagesCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "connect"],
    TablesCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "connect"],
    UsersCreateNestedOneWithoutProjectInput: ["create", "connectOrCreate", "connect"],
    ComponentsCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    PackagesUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TablesUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UsersUpdateOneRequiredWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ComponentsUpdateManyWithoutProjectNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProjectsCreateNestedOneWithoutPackageInput: ["create", "connectOrCreate", "connect"],
    ProjectsUpdateOneRequiredWithoutPackageNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    HtmlLinesCreateNestedManyWithoutComponentInput: ["create", "connectOrCreate", "connect"],
    TsLinesCreateNestedManyWithoutComponentInput: ["create", "connectOrCreate", "connect"],
    CssCreateNestedManyWithoutComponentInput: ["create", "connectOrCreate", "connect"],
    ProjectsCreateNestedOneWithoutComponentsInput: ["create", "connectOrCreate", "connect"],
    HtmlLinesUpdateManyWithoutComponentNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TsLinesUpdateManyWithoutComponentNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    CssUpdateManyWithoutComponentNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProjectsUpdateOneRequiredWithoutComponentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ComponentsCreateNestedOneWithoutHtmllineInput: ["create", "connectOrCreate", "connect"],
    ComponentsUpdateOneRequiredWithoutHtmllineNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ComponentsCreateNestedOneWithoutCssInput: ["create", "connectOrCreate", "connect"],
    ComponentsUpdateOneRequiredWithoutCssNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ComponentsCreateNestedOneWithoutTsLineInput: ["create", "connectOrCreate", "connect"],
    ComponentsUpdateOneRequiredWithoutTsLineNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProjectsCreateNestedOneWithoutTableInput: ["create", "connectOrCreate", "connect"],
    ColumnsCreateNestedManyWithoutTableInput: ["create", "connectOrCreate", "connect"],
    ProjectsUpdateOneRequiredWithoutTableNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ColumnsUpdateManyWithoutTableNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TablesCreateNestedOneWithoutColumnInput: ["create", "connectOrCreate", "connect"],
    TablesUpdateOneRequiredWithoutColumnNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    User_rolesCreateWithoutUsersInput: ["name", "permissions"],
    User_rolesCreateOrConnectWithoutUsersInput: ["where", "create"],
    ProjectsCreateWithoutUserInput: ["description", "name", "provider", "url", "framework", "Package", "table", "Components"],
    ProjectsCreateOrConnectWithoutUserInput: ["where", "create"],
    User_rolesUpsertWithoutUsersInput: ["update", "create"],
    User_rolesUpdateWithoutUsersInput: ["name", "permissions"],
    ProjectsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    ProjectsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    ProjectsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    ProjectsScalarWhereInput: ["AND", "OR", "NOT", "id", "description", "name", "provider", "url", "framework", "userId"],
    UsersCreateWithoutUser_rolesInput: ["first_name", "last_name", "email", "password", "createdAt", "project"],
    UsersCreateOrConnectWithoutUser_rolesInput: ["where", "create"],
    UsersUpsertWithWhereUniqueWithoutUser_rolesInput: ["where", "update", "create"],
    UsersUpdateWithWhereUniqueWithoutUser_rolesInput: ["where", "data"],
    UsersUpdateManyWithWhereWithoutUser_rolesInput: ["where", "data"],
    UsersScalarWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "createdAt", "user_rolesId"],
    PackagesCreateWithoutProjectInput: ["name", "version"],
    PackagesCreateOrConnectWithoutProjectInput: ["where", "create"],
    TablesCreateWithoutProjectInput: ["name", "column"],
    TablesCreateOrConnectWithoutProjectInput: ["where", "create"],
    UsersCreateWithoutProjectInput: ["first_name", "last_name", "email", "password", "createdAt", "user_roles"],
    UsersCreateOrConnectWithoutProjectInput: ["where", "create"],
    ComponentsCreateWithoutProjectInput: ["name", "htmlline", "tsLine", "css"],
    ComponentsCreateOrConnectWithoutProjectInput: ["where", "create"],
    PackagesUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    PackagesUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    PackagesUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    PackagesScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "version", "projectId"],
    TablesUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    TablesUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    TablesUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    TablesScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "projectId"],
    UsersUpsertWithoutProjectInput: ["update", "create"],
    UsersUpdateWithoutProjectInput: ["first_name", "last_name", "email", "password", "createdAt", "user_roles"],
    ComponentsUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    ComponentsUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    ComponentsUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    ComponentsScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "projectId"],
    ProjectsCreateWithoutPackageInput: ["description", "name", "provider", "url", "framework", "table", "user", "Components"],
    ProjectsCreateOrConnectWithoutPackageInput: ["where", "create"],
    ProjectsUpsertWithoutPackageInput: ["update", "create"],
    ProjectsUpdateWithoutPackageInput: ["description", "name", "provider", "url", "framework", "table", "user", "Components"],
    HtmlLinesCreateWithoutComponentInput: ["line"],
    HtmlLinesCreateOrConnectWithoutComponentInput: ["where", "create"],
    TsLinesCreateWithoutComponentInput: ["line"],
    TsLinesCreateOrConnectWithoutComponentInput: ["where", "create"],
    CssCreateWithoutComponentInput: ["content"],
    CssCreateOrConnectWithoutComponentInput: ["where", "create"],
    ProjectsCreateWithoutComponentsInput: ["description", "name", "provider", "url", "framework", "Package", "table", "user"],
    ProjectsCreateOrConnectWithoutComponentsInput: ["where", "create"],
    HtmlLinesUpsertWithWhereUniqueWithoutComponentInput: ["where", "update", "create"],
    HtmlLinesUpdateWithWhereUniqueWithoutComponentInput: ["where", "data"],
    HtmlLinesUpdateManyWithWhereWithoutComponentInput: ["where", "data"],
    HtmlLinesScalarWhereInput: ["AND", "OR", "NOT", "id", "line", "componentId"],
    TsLinesUpsertWithWhereUniqueWithoutComponentInput: ["where", "update", "create"],
    TsLinesUpdateWithWhereUniqueWithoutComponentInput: ["where", "data"],
    TsLinesUpdateManyWithWhereWithoutComponentInput: ["where", "data"],
    TsLinesScalarWhereInput: ["AND", "OR", "NOT", "id", "line", "componentId"],
    CssUpsertWithWhereUniqueWithoutComponentInput: ["where", "update", "create"],
    CssUpdateWithWhereUniqueWithoutComponentInput: ["where", "data"],
    CssUpdateManyWithWhereWithoutComponentInput: ["where", "data"],
    CssScalarWhereInput: ["AND", "OR", "NOT", "id", "content", "componentId"],
    ProjectsUpsertWithoutComponentsInput: ["update", "create"],
    ProjectsUpdateWithoutComponentsInput: ["description", "name", "provider", "url", "framework", "Package", "table", "user"],
    ComponentsCreateWithoutHtmllineInput: ["name", "tsLine", "css", "project"],
    ComponentsCreateOrConnectWithoutHtmllineInput: ["where", "create"],
    ComponentsUpsertWithoutHtmllineInput: ["update", "create"],
    ComponentsUpdateWithoutHtmllineInput: ["name", "tsLine", "css", "project"],
    ComponentsCreateWithoutCssInput: ["name", "htmlline", "tsLine", "project"],
    ComponentsCreateOrConnectWithoutCssInput: ["where", "create"],
    ComponentsUpsertWithoutCssInput: ["update", "create"],
    ComponentsUpdateWithoutCssInput: ["name", "htmlline", "tsLine", "project"],
    ComponentsCreateWithoutTsLineInput: ["name", "htmlline", "css", "project"],
    ComponentsCreateOrConnectWithoutTsLineInput: ["where", "create"],
    ComponentsUpsertWithoutTsLineInput: ["update", "create"],
    ComponentsUpdateWithoutTsLineInput: ["name", "htmlline", "css", "project"],
    ProjectsCreateWithoutTableInput: ["description", "name", "provider", "url", "framework", "Package", "user", "Components"],
    ProjectsCreateOrConnectWithoutTableInput: ["where", "create"],
    ColumnsCreateWithoutTableInput: ["name", "type", "constraint"],
    ColumnsCreateOrConnectWithoutTableInput: ["where", "create"],
    ProjectsUpsertWithoutTableInput: ["update", "create"],
    ProjectsUpdateWithoutTableInput: ["description", "name", "provider", "url", "framework", "Package", "user", "Components"],
    ColumnsUpsertWithWhereUniqueWithoutTableInput: ["where", "update", "create"],
    ColumnsUpdateWithWhereUniqueWithoutTableInput: ["where", "data"],
    ColumnsUpdateManyWithWhereWithoutTableInput: ["where", "data"],
    ColumnsScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "type", "constraint", "tableId"],
    TablesCreateWithoutColumnInput: ["name", "project"],
    TablesCreateOrConnectWithoutColumnInput: ["where", "create"],
    TablesUpsertWithoutColumnInput: ["update", "create"],
    TablesUpdateWithoutColumnInput: ["name", "project"],
    ProjectsUpdateWithoutUserInput: ["description", "name", "provider", "url", "framework", "Package", "table", "Components"],
    UsersUpdateWithoutUser_rolesInput: ["first_name", "last_name", "email", "password", "createdAt", "project"],
    PackagesUpdateWithoutProjectInput: ["name", "version"],
    TablesUpdateWithoutProjectInput: ["name", "column"],
    ComponentsUpdateWithoutProjectInput: ["name", "htmlline", "tsLine", "css"],
    HtmlLinesUpdateWithoutComponentInput: ["line"],
    TsLinesUpdateWithoutComponentInput: ["line"],
    CssUpdateWithoutComponentInput: ["content"],
    ColumnsUpdateWithoutTableInput: ["name", "type", "constraint"]
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
