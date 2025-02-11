"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesAvgAggregate = class TablesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesAvgAggregate.prototype, "projectId", void 0);
TablesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesAvgAggregate", {
        isAbstract: true
    })
], TablesAvgAggregate);
exports.TablesAvgAggregate = TablesAvgAggregate;
