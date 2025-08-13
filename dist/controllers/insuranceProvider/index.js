"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProviderWithAddress = exports.DeleteProvider = exports.UpdateProvider = exports.GetAllProvider = exports.GetOneProvider = exports.providerImage = exports.createInsuranceProvider = void 0;
var create_1 = require("./create");
Object.defineProperty(exports, "createInsuranceProvider", { enumerable: true, get: function () { return create_1.createInsuranceProvider; } });
Object.defineProperty(exports, "providerImage", { enumerable: true, get: function () { return create_1.providerImage; } });
var getOne_1 = require("./getOne");
Object.defineProperty(exports, "GetOneProvider", { enumerable: true, get: function () { return getOne_1.GetOneProvider; } });
var getAll_1 = require("./getAll");
Object.defineProperty(exports, "GetAllProvider", { enumerable: true, get: function () { return getAll_1.GetAllProvider; } });
var update_1 = require("./update");
Object.defineProperty(exports, "UpdateProvider", { enumerable: true, get: function () { return update_1.UpdateProvider; } });
var delete_1 = require("./delete");
Object.defineProperty(exports, "DeleteProvider", { enumerable: true, get: function () { return delete_1.DeleteProvider; } });
// export { uploadImage } from './create'
var getProviderWithAddress_1 = require("./getProviderWithAddress");
Object.defineProperty(exports, "GetProviderWithAddress", { enumerable: true, get: function () { return getProviderWithAddress_1.GetProviderWithAddress; } });
