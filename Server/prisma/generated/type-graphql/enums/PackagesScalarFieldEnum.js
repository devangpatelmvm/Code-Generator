"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PackagesScalarFieldEnum;
(function (PackagesScalarFieldEnum) {
    PackagesScalarFieldEnum["id"] = "id";
    PackagesScalarFieldEnum["name"] = "name";
    PackagesScalarFieldEnum["version"] = "version";
    PackagesScalarFieldEnum["projectId"] = "projectId";
})(PackagesScalarFieldEnum = exports.PackagesScalarFieldEnum || (exports.PackagesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PackagesScalarFieldEnum, {
    name: "PackagesScalarFieldEnum",
    description: undefined,
});
