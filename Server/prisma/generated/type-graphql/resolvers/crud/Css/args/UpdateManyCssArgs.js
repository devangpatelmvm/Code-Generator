"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssUpdateManyMutationInput_1 = require("../../../inputs/CssUpdateManyMutationInput");
const CssWhereInput_1 = require("../../../inputs/CssWhereInput");
let UpdateManyCssArgs = class UpdateManyCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyMutationInput_1.CssUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateManyMutationInput_1.CssUpdateManyMutationInput)
], UpdateManyCssArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], UpdateManyCssArgs.prototype, "where", void 0);
UpdateManyCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCssArgs);
exports.UpdateManyCssArgs = UpdateManyCssArgs;
