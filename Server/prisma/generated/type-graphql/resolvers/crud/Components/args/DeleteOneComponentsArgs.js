"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsWhereUniqueInput_1 = require("../../../inputs/ComponentsWhereUniqueInput");
let DeleteOneComponentsArgs = class DeleteOneComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], DeleteOneComponentsArgs.prototype, "where", void 0);
DeleteOneComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneComponentsArgs);
exports.DeleteOneComponentsArgs = DeleteOneComponentsArgs;
