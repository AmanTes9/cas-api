"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Companies = exports.provider_status = void 0;
var typeorm_1 = require("typeorm");
var certificate_entity_1 = require("./certificate.entity");
var provider_status;
(function (provider_status) {
    provider_status["VERIFIED_ACTIVE"] = "verified_active";
    provider_status["VERIFIED_NOT_ACTIVE"] = "verified_not_active";
    provider_status["UNKNOWN"] = "unknown";
})(provider_status = exports.provider_status || (exports.provider_status = {}));
var Companies = /** @class */ (function (_super) {
    __extends(Companies, _super);
    function Companies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Companies.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Companies.prototype, "provider_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Companies.prototype, "details", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Companies.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Companies.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            enum: provider_status,
            default: provider_status.UNKNOWN,
            type: "enum",
        }),
        __metadata("design:type", String)
    ], Companies.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Companies.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Companies.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return certificate_entity_1.User_Certificate; }, function (certificate) { return certificate.provider; }),
        __metadata("design:type", Array)
    ], Companies.prototype, "certificates", void 0);
    Companies = __decorate([
        (0, typeorm_1.Entity)()
    ], Companies);
    return Companies;
}(typeorm_1.BaseEntity));
exports.Companies = Companies;
//# sourceMappingURL=certificate_provider.entity.js.map