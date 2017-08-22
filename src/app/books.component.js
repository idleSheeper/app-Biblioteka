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
var core_1 = require("@angular/core");
var books_service_1 = require("./books.service");
var BooksComponent = (function () {
    function BooksComponent(_booksService) {
        this._booksService = _booksService;
        this.title = 'Biblioteka';
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._booksService.getBooks()
            .subscribe(function (resBooks) { return _this.books = resBooks; });
    };
    BooksComponent.prototype.deleteBook = function (idToRemove) {
        this.books = this.books.filter(function (item) { return item.id !== idToRemove; });
    };
    BooksComponent.prototype.selectBook = function (book) {
        this._booksService.saveSelectedBook(book);
    };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'books',
            templateUrl: './books.html',
            styleUrls: ['./app.component.css'],
        }),
        __metadata("design:paramtypes", [books_service_1.BooksService])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map