"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateManyWithoutProjectNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateOrConnectWithoutProjectInput_1 = require("../inputs/TablesCreateOrConnectWithoutProjectInput");
const TablesCreateWithoutProjectInput_1 = require("../inputs/TablesCreateWithoutProjectInput");
const TablesScalarWhereInput_1 = require("../inputs/TablesScalarWhereInput");
const TablesUpdateManyWithWhereWithoutProjectInput_1 = require("../inputs/TablesUpdateManyWithWhereWithoutProjectInput");
const TablesUpdateWithWhereUniqueWithoutProjectInput_1 = require("../inputs/TablesUpdateWithWhereUniqueWithoutProjectInput");
const TablesUpsertWithWhereUniqueWithoutProjectInput_1 = require("../inputs/TablesUpsertWithWhereUniqueWithoutProjectInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesUpdateManyWithoutProjectNestedInput = class TablesUpdateManyWithoutProjectNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesCreateOrConnectWithoutProjectInput_1.TablesCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesUpsertWithWhereUniqueWithoutProjectInput_1.TablesUpsertWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereUniqueInput_1.TablesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereUniqueInput_1.TablesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereUniqueInput_1.TablesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereUniqueInput_1.TablesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesUpdateWithWhereUniqueWithoutProjectInput_1.TablesUpdateWithWhereUniqueWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesUpdateManyWithWhereWithoutProjectInput_1.TablesUpdateManyWithWhereWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesScalarWhereInput_1.TablesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
TablesUpdateManyWithoutProjectNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateManyWithoutProjectNestedInput", {
        isAbstract: true
    })
], TablesUpdateManyWithoutProjectNestedInput);
exports.TablesUpdateManyWithoutProjectNestedInput = TablesUpdateManyWithoutProjectNestedInput;
