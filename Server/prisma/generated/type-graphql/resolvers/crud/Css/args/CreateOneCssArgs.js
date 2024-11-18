"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateInput_1 = require("../../../inputs/CssCreateInput");
let CreateOneCssArgs = class CreateOneCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateInput_1.CssCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssCreateInput_1.CssCreateInput)
], CreateOneCssArgs.prototype, "data", void 0);
CreateOneCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCssArgs);
exports.CreateOneCssArgs = CreateOneCssArgs;
