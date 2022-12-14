"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const protect_1 = __importDefault(require("../middleware/protect"));
const validate_1 = __importDefault(require("../middleware/validate"));
const auth_schema_1 = require("../zod.schema/auth.schema");
const router = express_1.default.Router();
router.post('/login', (0, validate_1.default)(auth_schema_1.loginSchema), user_controller_1.loginHandler);
router.post('/register', (0, validate_1.default)(auth_schema_1.registerSchema), user_controller_1.registerHandler);
router.get('/users', protect_1.default, user_controller_1.getAllUser);
router.get('/admin', protect_1.default, user_controller_1.admin);
router.get('/user', protect_1.default, user_controller_1.user);
exports.default = router;
