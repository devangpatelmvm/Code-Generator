"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsWhereInput_1 = require("../../../inputs/ComponentsWhereInput");
let DeleteManyComponentsArgs = class DeleteManyComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], DeleteManyComponentsArgs.prototype, "where", void 0);
DeleteManyComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyComponentsArgs);
exports.DeleteManyComponentsArgs = DeleteManyComponentsArgs;
