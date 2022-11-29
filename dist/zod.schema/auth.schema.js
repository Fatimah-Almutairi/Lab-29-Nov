"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required' })
            .min(4),
        password: zod_1.z.string({ required_error: 'Password is required' })
            .min(6),
        email: zod_1.z.string({ required_error: 'Email is required' })
    }),
});
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
