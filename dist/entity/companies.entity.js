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
exports.Institutions = exports.CompanyStatus = void 0;
var typeorm_1 = require("typeorm");
var category_entity_1 = require("./category.entity");
var certificate_entity_1 = require("./certificate.entity");
var user_entity_1 = require("./user.entity");
var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["PENDING"] = "Pending";
    CompanyStatus["ACCEPTED"] = "Accepted";
    CompanyStatus["VERIFIED"] = "VERIFIED";
    CompanyStatus["BLOCKED"] = "Blocked";
})(CompanyStatus = exports.CompanyStatus || (exports.CompanyStatus = {}));
var Institutions = /** @class */ (function (_super) {
    __extends(Institutions, _super);
    function Institutions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Institutions.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Institutions.prototype, "company_name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "business_address", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "company_email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "phone_number", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "company_license", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "company_logo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Institutions.prototype, "tin", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_entity_1.Category; }, function (category) { return category.company; }),
        __metadata("design:type", category_entity_1.Category)
    ], Institutions.prototype, "category", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return certificate_entity_1.User_Certificate; }, function (certificate) { return certificate.provider; }),
        __metadata("design:type", Array)
    ], Institutions.prototype, "certificates", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            enum: CompanyStatus,
            default: CompanyStatus.PENDING,
            type: "enum",
        }),
        __metadata("design:type", String)
    ], Institutions.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_entity_1.User)
    ], Institutions.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Institutions.prototype, "created_at", void 0);
    Institutions = __decorate([
        (0, typeorm_1.Entity)()
    ], Institutions);
    return Institutions;
}(typeorm_1.BaseEntity));
exports.Institutions = Institutions;
//# sourceMappingURL=companies.entity.js.map