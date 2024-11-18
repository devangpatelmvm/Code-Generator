"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateOneRequiredWithoutHtmllineNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutHtmllineInput");
const ComponentsCreateWithoutHtmllineInput_1 = require("../inputs/ComponentsCreateWithoutHtmllineInput");
const ComponentsUpdateWithoutHtmllineInput_1 = require("../inputs/ComponentsUpdateWithoutHtmllineInput");
const ComponentsUpsertWithoutHtmllineInput_1 = require("../inputs/ComponentsUpsertWithoutHtmllineInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpdateOneRequiredWithoutHtmllineNestedInput = class ComponentsUpdateOneRequiredWithoutHtmllineNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateWithoutHtmllineInput_1.ComponentsCreateWithoutHtmllineInput)
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsCreateOrConnectWithoutHtmllineInput_1.ComponentsCreateOrConnectWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsCreateOrConnectWithoutHtmllineInput_1.ComponentsCreateOrConnectWithoutHtmllineInput)
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpsertWithoutHtmllineInput_1.ComponentsUpsertWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpsertWithoutHtmllineInput_1.ComponentsUpsertWithoutHtmllineInput)
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsUpdateWithoutHtmllineInput_1.ComponentsUpdateWithoutHtmllineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsUpdateWithoutHtmllineInput_1.ComponentsUpdateWithoutHtmllineInput)
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput.prototype, "update", void 0);
ComponentsUpdateOneRequiredWithoutHtmllineNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateOneRequiredWithoutHtmllineNestedInput", {
        isAbstract: true
    })
], ComponentsUpdateOneRequiredWithoutHtmllineNestedInput);
exports.ComponentsUpdateOneRequiredWithoutHtmllineNestedInput = ComponentsUpdateOneRequiredWithoutHtmllineNestedInput;
