"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCount_1 = require("../resolvers/outputs/ComponentsCount");
let Components = class Components {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Components.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Components.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Components.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCount_1.ComponentsCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCount_1.ComponentsCount)
], Components.prototype, "_count", void 0);
Components = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Components", {
        isAbstract: true
    })
], Components);
exports.Components = Components;
