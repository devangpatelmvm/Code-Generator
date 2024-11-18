"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateInput_1 = require("../../../inputs/ComponentsCreateInput");
let CreateOneComponentsArgs = class CreateOneComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateInput_1.ComponentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ComponentsCreateInput_1.ComponentsCreateInput)
], CreateOneComponentsArgs.prototype, "data", void 0);
CreateOneComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneComponentsArgs);
exports.CreateOneComponentsArgs = CreateOneComponentsArgs;
