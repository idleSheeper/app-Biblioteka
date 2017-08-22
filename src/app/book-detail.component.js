"use strict";
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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var books_service_1 = require("./books.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var BookDetailComponent = (function () {
    function BookDetailComponent(_booksService, route, location) {
        this._booksService = _booksService;
        this.route = route;
        this.location = location;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.book = this._booksService.getSelectedBook();
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'book-detail',
            templateUrl: './book-detail.html',
            styleUrls: ['./app.component.css'],
        }),
        __metadata("design:paramtypes", [books_service_1.BooksService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map