"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateOneRequiredWithoutTsLineNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutTsLineInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutTsLineInput");
const ComponentsCreateWithoutTsLineInput_1 = require("../inputs/ComponentsCreateWithoutTsLineInput");
const ComponentsUpdateWithoutTsLineInput_1 = require("../inputs/ComponentsUpdateWithoutTsLineInput");
const ComponentsUpsertWithoutTsLineInput_1 = require("../inputs/ComponentsUpsertWithoutTsLineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpdateOneRequiredWithoutTsLineNestedInput = class ComponentsUpdateOneRequiredWithoutTsLineNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutTsLineInput_1.ComponentsCreateWithoutTsLineInput)
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutTsLineInput_1.ComponentsCreateOrConnectWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutTsLineInput_1.ComponentsCreateOrConnectWithoutTsLineInput)
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpsertWithoutTsLineInput_1.ComponentsUpsertWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpsertWithoutTsLineInput_1.ComponentsUpsertWithoutTsLineInput)
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutTsLineInput_1.ComponentsUpdateWithoutTsLineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutTsLineInput_1.ComponentsUpdateWithoutTsLineInput)
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput.prototype, "update", void 0);
ComponentsUpdateOneRequiredWithoutTsLineNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateOneRequiredWithoutTsLineNestedInput", {
        isAbstract: true
    })
], ComponentsUpdateOneRequiredWithoutTsLineNestedInput);
exports.ComponentsUpdateOneRequiredWithoutTsLineNestedInput = ComponentsUpdateOneRequiredWithoutTsLineNestedInput;
