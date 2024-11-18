"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesMinAggregate = class TablesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesMinAggregate.prototype, "projectId", void 0);
TablesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesMinAggregate", {
        isAbstract: true
    })
], TablesMinAggregate);
exports.TablesMinAggregate = TablesMinAggregate;
