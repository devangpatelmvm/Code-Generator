"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateManyMutationInput_1 = require("../../../inputs/ComponentsUpdateManyMutationInput");
const ComponentsWhereInput_1 = require("../../../inputs/ComponentsWhereInput");
let UpdateManyComponentsArgs = class UpdateManyComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateManyMutationInput_1.ComponentsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateManyMutationInput_1.ComponentsUpdateManyMutationInput)
], UpdateManyComponentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], UpdateManyComponentsArgs.prototype, "where", void 0);
UpdateManyComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyComponentsArgs);
exports.UpdateManyComponentsArgs = UpdateManyComponentsArgs;
