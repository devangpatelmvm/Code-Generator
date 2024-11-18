"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesWhereInput_1 = require("../inputs/TablesWhereInput");
let TablesListRelationFilter = class TablesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], TablesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], TablesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesWhereInput_1.TablesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesWhereInput_1.TablesWhereInput)
], TablesListRelationFilter.prototype, "none", void 0);
TablesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesListRelationFilter", {
        isAbstract: true
    })
], TablesListRelationFilter);
exports.TablesListRelationFilter = TablesListRelationFilter;
