"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventVisibilityEnum = exports.lessonPlanStatusEnum = exports.assignmentStatusEnum = exports.eventTypeEnum = exports.subscriptionStatusEnum = exports.subscriptionPlanEnum = exports.userRoleEnum = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
// Enums
exports.userRoleEnum = (0, pg_core_1.pgEnum)("user_role", [
    "teacher",
    "admin",
    "department_head",
    "school_admin",
]);
exports.subscriptionPlanEnum = (0, pg_core_1.pgEnum)("subscription_plan", [
    "starter",
    "professional",
    "school",
]);
exports.subscriptionStatusEnum = (0, pg_core_1.pgEnum)("subscription_status", [
    "active",
    "canceled",
    "incomplete",
    "incomplete_expired",
    "past_due",
    "trialing",
    "unpaid",
]);
exports.eventTypeEnum = (0, pg_core_1.pgEnum)("event_type", [
    "class",
    "assignment",
    "exam",
    "meeting",
    "personal",
]);
exports.assignmentStatusEnum = (0, pg_core_1.pgEnum)("assignment_status", [
    "draft",
    "published",
    "graded",
    "archived",
]);
exports.lessonPlanStatusEnum = (0, pg_core_1.pgEnum)("lesson_plan_status", [
    "draft",
    "complete",
    "archived",
]);
exports.eventVisibilityEnum = (0, pg_core_1.pgEnum)("event_visibility", [
    "public",
    "private",
    "organization",
]);
