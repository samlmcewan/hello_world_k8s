"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h1 style="font-family: sans-serif;color:green;">Hello World.</h1><ul><li>NodeJS</li><li>Express</li><li>TypeScript</li><li>Docker</li><li>k8s</li></ul>');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map