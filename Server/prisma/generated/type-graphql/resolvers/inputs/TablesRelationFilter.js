"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesWhereInput_1 = require("../inputs/TablesWhereInput");
let TablesRelationFilter = class TablesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], TablesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], TablesRelationFilter.prototype, "isNot", void 0);
TablesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesRelationFilter", {
        isAbstract: true
    })
], TablesRelationFilter);
exports.TablesRelationFilter = TablesRelationFilter;
