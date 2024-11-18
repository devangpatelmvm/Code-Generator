"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateInput_1 = require("../../../inputs/ComponentsCreateInput");
const ComponentsUpdateInput_1 = require("../../../inputs/ComponentsUpdateInput");
const ComponentsWhereUniqueInput_1 = require("../../../inputs/ComponentsWhereUniqueInput");
let UpsertOneComponentsArgs = class UpsertOneComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], UpsertOneComponentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateInput_1.ComponentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateInput_1.ComponentsCreateInput)
], UpsertOneComponentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateInput_1.ComponentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateInput_1.ComponentsUpdateInput)
], UpsertOneComponentsArgs.prototype, "update", void 0);
UpsertOneComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneComponentsArgs);
exports.UpsertOneComponentsArgs = UpsertOneComponentsArgs;
