"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsUpdateInput_1 = require("../../../inputs/ComponentsUpdateInput");
const ComponentsWhereUniqueInput_1 = require("../../../inputs/ComponentsWhereUniqueInput");
let UpdateOneComponentsArgs = class UpdateOneComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateInput_1.ComponentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateInput_1.ComponentsUpdateInput)
], UpdateOneComponentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], UpdateOneComponentsArgs.prototype, "where", void 0);
UpdateOneComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneComponentsArgs);
exports.UpdateOneComponentsArgs = UpdateOneComponentsArgs;
