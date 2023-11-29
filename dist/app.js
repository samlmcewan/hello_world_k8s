"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const configVar = process.env.HELLO_WORLD_CONFIG_VAR || 'default-value';
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`<h1>${configVar}</h1>`);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map