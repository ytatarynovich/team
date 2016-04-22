var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var router_1 = require('angular2/router');
var lang_1 = require('angular2/src/facade/lang');
var core_1 = require('angular2/core');
var router_2 = require('angular2/router');
/**
 * RouterActive dynamically finds the first element with routerLink and toggles the active class
 *
 * ## Use
 *
 * ```
 * <li router-active="active"><a [routerLink]=" ['/Home'] ">Home</a></li>
 * <li [routerActive]=" activeStringValue "><a [routerLink]=" ['/Home'] ">Home</a></li>
 * ```
 */
var RouterActive = (function () {
    function RouterActive(router, element, renderer, routerLink, routerActiveAttr) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.routerLink = routerLink;
        this.routerActive = null;
        this.routerActiveAttr = 'active';
        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
    }
    RouterActive.prototype.ngOnInit = function () {
        var _this = this;
        this.routerLink.changes.subscribe(function () {
            if (_this.routerLink.first) {
                _this._updateClass();
                _this._findRootRouter().subscribe(function () {
                    _this._updateClass();
                });
            }
        });
    };
    RouterActive.prototype._findRootRouter = function () {
        var router = this.router;
        while (lang_1.isPresent(router.parent)) {
            router = router.parent;
        }
        return router;
    };
    RouterActive.prototype._updateClass = function () {
        var active = this.routerLink.first.isRouteActive;
        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
    };
    RouterActive.prototype._defaultAttrValue = function (attr) {
        return this.routerActiveAttr = attr || this.routerActiveAttr;
    };
    RouterActive.prototype._attrOrProp = function () {
        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RouterActive.prototype, "routerActive");
    RouterActive = __decorate([
        core_1.Directive({
            selector: '[router-active], [routerActive]'
        }),
        __param(3, core_1.Query(router_2.RouterLink)),
        __param(4, core_1.Optional()),
        __param(4, core_1.Attribute('router-active')), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
    ], RouterActive);
    return RouterActive;
})();
exports.RouterActive = RouterActive;
//# sourceMappingURL=router-active.js.map