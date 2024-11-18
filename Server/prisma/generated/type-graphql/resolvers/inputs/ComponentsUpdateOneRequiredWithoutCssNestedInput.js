"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateOneRequiredWithoutCssNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutCssInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutCssInput");
const ComponentsCreateWithoutCssInput_1 = require("../inputs/ComponentsCreateWithoutCssInput");
const ComponentsUpdateWithoutCssInput_1 = require("../inputs/ComponentsUpdateWithoutCssInput");
const ComponentsUpsertWithoutCssInput_1 = require("../inputs/ComponentsUpsertWithoutCssInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpdateOneRequiredWithoutCssNestedInput = class ComponentsUpdateOneRequiredWithoutCssNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutCssInput_1.ComponentsCreateWithoutCssInput)
], ComponentsUpdateOneRequiredWithoutCssNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutCssInput_1.ComponentsCreateOrConnectWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutCssInput_1.ComponentsCreateOrConnectWithoutCssInput)
], ComponentsUpdateOneRequiredWithoutCssNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpsertWithoutCssInput_1.ComponentsUpsertWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpsertWithoutCssInput_1.ComponentsUpsertWithoutCssInput)
], ComponentsUpdateOneRequiredWithoutCssNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsUpdateOneRequiredWithoutCssNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutCssInput_1.ComponentsUpdateWithoutCssInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutCssInput_1.ComponentsUpdateWithoutCssInput)
], ComponentsUpdateOneRequiredWithoutCssNestedInput.prototype, "update", void 0);
ComponentsUpdateOneRequiredWithoutCssNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateOneRequiredWithoutCssNestedInput", {
        isAbstract: true
    })
], ComponentsUpdateOneRequiredWithoutCssNestedInput);
exports.ComponentsUpdateOneRequiredWithoutCssNestedInput = ComponentsUpdateOneRequiredWithoutCssNestedInput;
