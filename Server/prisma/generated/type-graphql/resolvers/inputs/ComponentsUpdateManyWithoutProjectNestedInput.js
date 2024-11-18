"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsUpdateManyWithoutProjectNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsCreateOrConnectWithoutProjectInput_1 = require("../inputs/ComponentsCreateOrConnectWithoutProjectInput");
const ComponentsCreateWithoutProjectInput_1 = require("../inputs/ComponentsCreateWithoutProjectInput");
const ComponentsScalarWhereInput_1 = require("../inputs/ComponentsScalarWhereInput");
const ComponentsUpdateManyWithWhereWithoutProjectInput_1 = require("../inputs/ComponentsUpdateManyWithWhereWithoutProjectInput");
const ComponentsUpdateWithWhereUniqueWithoutProjectInput_1 = require("../inputs/ComponentsUpdateWithWhereUniqueWithoutProjectInput");
const ComponentsUpsertWithWhereUniqueWithoutProjectInput_1 = require("../inputs/ComponentsUpsertWithWhereUniqueWithoutProjectInput");
const ComponentsWhereUniqueInput_1 = require("../inputs/ComponentsWhereUniqueInput");
let ComponentsUpdateManyWithoutProjectNestedInput = class ComponentsUpdateManyWithoutProjectNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsCreateWithoutProjectInput_1.ComponentsCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsCreateOrConnectWithoutProjectInput_1.ComponentsCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsUpsertWithWhereUniqueWithoutProjectInput_1.ComponentsUpsertWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsUpdateWithWhereUniqueWithoutProjectInput_1.ComponentsUpdateWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsUpdateManyWithWhereWithoutProjectInput_1.ComponentsUpdateManyWithWhereWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarWhereInput_1.ComponentsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
ComponentsUpdateManyWithoutProjectNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsUpdateManyWithoutProjectNestedInput", {
        isAbstract: true
    })
], ComponentsUpdateManyWithoutProjectNestedInput);
exports.ComponentsUpdateManyWithoutProjectNestedInput = ComponentsUpdateManyWithoutProjectNestedInput;
