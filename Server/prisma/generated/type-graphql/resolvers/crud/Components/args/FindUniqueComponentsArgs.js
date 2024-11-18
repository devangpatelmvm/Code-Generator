"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsWhereUniqueInput_1 = require("../../../inputs/ComponentsWhereUniqueInput");
let FindUniqueComponentsArgs = class FindUniqueComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], FindUniqueComponentsArgs.prototype, "where", void 0);
FindUniqueComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueComponentsArgs);
exports.FindUniqueComponentsArgs = FindUniqueComponentsArgs;
