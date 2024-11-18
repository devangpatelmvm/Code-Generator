"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tables = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCount_1 = require("../resolvers/outputs/TablesCount");
let Tables = class Tables {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tables.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tables.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Tables.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesCount_1.TablesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TablesCount_1.TablesCount)
], Tables.prototype, "_count", void 0);
Tables = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tables", {
        isAbstract: true
    })
], Tables);
exports.Tables = Tables;
