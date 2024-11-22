"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadMockCatalogs_1 = require("./scripts/loadMockCatalogs");
(0, loadMockCatalogs_1.default)().then(() => {
    console.log('Mock data loaded. Exiting...');
    process.exit();
});
//# sourceMappingURL=loadMockData.js.map