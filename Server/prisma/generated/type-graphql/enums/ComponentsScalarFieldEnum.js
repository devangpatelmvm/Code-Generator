"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ComponentsScalarFieldEnum;
(function (ComponentsScalarFieldEnum) {
    ComponentsScalarFieldEnum["id"] = "id";
    ComponentsScalarFieldEnum["name"] = "name";
    ComponentsScalarFieldEnum["projectId"] = "projectId";
})(ComponentsScalarFieldEnum = exports.ComponentsScalarFieldEnum || (exports.ComponentsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ComponentsScalarFieldEnum, {
    name: "ComponentsScalarFieldEnum",
    description: undefined,
});
