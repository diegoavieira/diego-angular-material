(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@dam/components', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.dam = global.dam || {}, global.dam.components = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DamMainComponent = /** @class */ (function () {
        function DamMainComponent() {
        }
        /**
         * @return {?}
         */
        DamMainComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        DamMainComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dam-main',
                        template: "<p>dam-main works!</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DamMainComponent.ctorParameters = function () { return []; };
        return DamMainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DamMainModule = /** @class */ (function () {
        function DamMainModule() {
        }
        DamMainModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DamMainComponent],
                        exports: [DamMainComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DamMainModule;
    }());

    exports.DamMainModule = DamMainModule;
    exports.ɵa = DamMainComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dam-components.umd.js.map
