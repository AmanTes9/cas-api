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
exports.User_Certificate = exports.CertificateStatus = void 0;
var typeorm_1 = require("typeorm");
var companies_entity_1 = require("./companies.entity");
var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["ACTIVE"] = "Active";
    CertificateStatus["BLOCKED"] = "Blocked";
})(CertificateStatus = exports.CertificateStatus || (exports.CertificateStatus = {}));
var User_Certificate = /** @class */ (function (_super) {
    __extends(User_Certificate, _super);
    function User_Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", Number)
    ], User_Certificate.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "certificate_name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return companies_entity_1.Institutions; }, function (provider) { return provider.certificates; }),
        __metadata("design:type", companies_entity_1.Institutions)
    ], User_Certificate.prototype, "provider", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "certificate_owner_name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "certificate_type", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "image", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            enum: CertificateStatus,
            default: CertificateStatus.ACTIVE,
            type: "enum",
        }),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User_Certificate.prototype, "issued_date", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], User_Certificate.prototype, "created_at", void 0);
    User_Certificate = __decorate([
        (0, typeorm_1.Entity)()
    ], User_Certificate);
    return User_Certificate;
}(typeorm_1.BaseEntity));
exports.User_Certificate = User_Certificate;
//# sourceMappingURL=certificate.entity.js.map