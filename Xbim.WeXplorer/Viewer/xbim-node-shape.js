var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Xbim;
(function (Xbim) {
    var Viewer;
    (function (Viewer) {
        var ShapeNode = (function (_super) {
            __extends(ShapeNode, _super);
            function ShapeNode() {
                _super.apply(this, arguments);
            }
            ShapeNode.prototype.CompileNode = function () {
            };
            ShapeNode.prototype.DrawNode = function () {
            };
            return ShapeNode;
        }(Viewer.Node));
        Viewer.ShapeNode = ShapeNode;
    })(Viewer = Xbim.Viewer || (Xbim.Viewer = {}));
})(Xbim || (Xbim = {}));
//# sourceMappingURL=xbim-node-shape.js.map