"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarEvents = exports.lessonPlans = exports.materials = exports.grades = exports.assignmentSubmissions = exports.assignments = exports.classStudents = exports.students = exports.classes = exports.featureLimits = exports.subscriptions = exports.verificationTokens = exports.sessions = exports.accounts = exports.users = exports.organizations = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
var enums_1 = require("./enums");
var nextAuthSchema = (0, pg_core_1.pgSchema)("next_auth");
// Organizations (for School plan)
exports.organizations = nextAuthSchema.table("organizations", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    domain: (0, pg_core_1.text)("domain"),
    logo: (0, pg_core_1.text)("logo"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
    ownerId: (0, pg_core_1.uuid)("owner_id"),
    maxUsers: (0, pg_core_1.integer)("max_users").default(50),
}, function (table) {
    return [(0, pg_core_1.index)("domain_idx").on(table.domain)];
});
exports.users = nextAuthSchema.table("users", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    name: (0, pg_core_1.text)("name"),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    emailVerified: (0, pg_core_1.timestamp)("emailVerified", { withTimezone: true }),
    image: (0, pg_core_1.text)("image"),
    firstName: (0, pg_core_1.text)("first_name").notNull(),
    lastName: (0, pg_core_1.text)("last_name").notNull(),
    passwordHash: (0, pg_core_1.text)("password_hash").notNull(),
    role: (0, enums_1.userRoleEnum)("role").notNull().default("teacher"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
    stripeCustomerId: (0, pg_core_1.uuid)("stripe_customer_id"),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }, {
        onDelete: "set null",
    }),
    lastLoginAt: (0, pg_core_1.timestamp)("last_login_at"),
}, function (table) {
    return [
        (0, pg_core_1.index)("email_idx").on(table.email),
        (0, pg_core_1.index)("organization_idx").on(table.organizationId),
    ];
});
exports.accounts = nextAuthSchema.table("accounts", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    userId: (0, pg_core_1.uuid)("userId")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    type: (0, pg_core_1.text)("type").notNull(),
    provider: (0, pg_core_1.text)("provider").notNull(),
    providerAccountId: (0, pg_core_1.text)("providerAccountId").notNull(),
    refresh_token: (0, pg_core_1.text)("refresh_token"),
    access_token: (0, pg_core_1.text)("access_token"),
    expires_at: (0, pg_core_1.bigint)({ mode: "bigint" }),
    token_type: (0, pg_core_1.text)("token_type"),
    scope: (0, pg_core_1.text)("scope"),
    id_token: (0, pg_core_1.text)("id_token"),
    session_state: (0, pg_core_1.text)("session_state"),
    oauth_token_secret: (0, pg_core_1.text)("oauth_token_secret"),
    oauth_token: (0, pg_core_1.text)("oauth_token"),
}, function (table) { return [
    unique("provider_unique").on(table.provider, table.providerAccountId),
]; });
exports.sessions = nextAuthSchema.table("sessions", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    sessionToken: (0, pg_core_1.text)("sessionToken").notNull().unique(),
    userId: (0, pg_core_1.uuid)("userId")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    expires: (0, pg_core_1.timestamp)("expires", { withTimezone: true }).notNull(),
});
exports.verificationTokens = nextAuthSchema.table("verification_tokens", {
    identifier: (0, pg_core_1.text)("identifier").notNull(),
    token: (0, pg_core_1.text)("token").notNull(),
    expires: (0, pg_core_1.timestamp)("expires", { withTimezone: true }).notNull(),
}, function (table) { return [
    (0, pg_core_1.primaryKey)({ columns: [table.identifier, table.token] }),
    unique("token_unique").on(table.token),
]; });
// Helper for creating unique constraints
function unique(name) {
    return {
        name: name,
        columns: [],
        on: function () {
            var columns = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                columns[_i] = arguments[_i];
            }
            this.columns = columns;
            return this;
        },
    };
}
// Subscriptions
exports.subscriptions = (0, pg_core_1.pgTable)("subscriptions", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    userId: (0, pg_core_1.uuid)("user_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }, {
        onDelete: "cascade",
    }),
    plan: (0, enums_1.subscriptionPlanEnum)("plan").notNull(),
    status: (0, enums_1.subscriptionStatusEnum)("status").notNull(),
    currentPeriodStart: (0, pg_core_1.timestamp)("current_period_start").notNull(),
    currentPeriodEnd: (0, pg_core_1.timestamp)("current_period_end").notNull(),
    cancelAtPeriodEnd: (0, pg_core_1.boolean)("cancel_at_period_end").default(false),
    stripeCustomerId: (0, pg_core_1.text)("stripe_customer_id"),
    stripeSubscriptionId: (0, pg_core_1.text)("stripe_subscription_id"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.index)("user_idx").on(table.userId),
        (0, pg_core_1.index)("subscription_organization_idx").on(table.organizationId),
    ];
});
// Feature Limits (based on subscription plan)
exports.featureLimits = (0, pg_core_1.pgTable)("feature_limits", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    plan: (0, enums_1.subscriptionPlanEnum)("plan").notNull(),
    maxClasses: (0, pg_core_1.integer)("max_classes").notNull(),
    maxStudentsPerClass: (0, pg_core_1.integer)("max_students_per_class").notNull(),
    maxStorageGB: (0, pg_core_1.decimal)("max_storage_gb").notNull(),
    advancedGrading: (0, pg_core_1.boolean)("advanced_grading").notNull(),
    lessonPlanning: (0, pg_core_1.boolean)("lesson_planning").notNull(),
    studentAnalytics: (0, pg_core_1.boolean)("student_analytics").notNull(),
    parentCommunication: (0, pg_core_1.boolean)("parent_communication").notNull(),
    adminDashboard: (0, pg_core_1.boolean)("admin_dashboard").notNull(),
    departmentAnalytics: (0, pg_core_1.boolean)("department_analytics").notNull(),
    customIntegrations: (0, pg_core_1.boolean)("custom_integrations").notNull(),
    prioritySupport: (0, pg_core_1.boolean)("priority_support").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
});
// Classes
exports.classes = (0, pg_core_1.pgTable)("classes", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    subject: (0, pg_core_1.text)("subject").notNull(),
    gradeLevel: (0, pg_core_1.text)("grade_level").notNull(),
    academicYear: (0, pg_core_1.text)("academic_year").notNull(),
    schedule: (0, pg_core_1.text)("schedule"),
    room: (0, pg_core_1.text)("room"),
    capacity: (0, pg_core_1.integer)("capacity"),
    description: (0, pg_core_1.text)("description"),
    isActive: (0, pg_core_1.boolean)("is_active").default(true),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.index)("teacher_idx").on(table.teacherId),
        (0, pg_core_1.index)("class_organization_idx").on(table.organizationId),
    ];
});
// Students
exports.students = (0, pg_core_1.pgTable)("students", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    studentId: (0, pg_core_1.text)("student_id").notNull(),
    firstName: (0, pg_core_1.text)("first_name").notNull(),
    lastName: (0, pg_core_1.text)("last_name").notNull(),
    email: (0, pg_core_1.text)("email"),
    dateOfBirth: (0, pg_core_1.date)("date_of_birth"),
    gender: (0, pg_core_1.text)("gender"),
    enrollmentDate: (0, pg_core_1.date)("enrollment_date"),
    previousSchool: (0, pg_core_1.text)("previous_school"),
    specialNeeds: (0, pg_core_1.boolean)("special_needs").default(false),
    notes: (0, pg_core_1.text)("notes"),
    address: (0, pg_core_1.text)("address"),
    emergencyContact: (0, pg_core_1.text)("emergency_contact"),
    emergencyPhone: (0, pg_core_1.text)("emergency_phone"),
    relationship: (0, pg_core_1.text)("relationship"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.index)("student_id_idx").on(table.studentId),
        (0, pg_core_1.index)("student_teacher_idx").on(table.teacherId),
        (0, pg_core_1.index)("student_organization_idx").on(table.organizationId),
    ];
});
// Class-Student relationship (many-to-many)
exports.classStudents = (0, pg_core_1.pgTable)("class_students", {
    classId: (0, pg_core_1.uuid)("class_id")
        .notNull()
        .references(function () { return exports.classes.id; }, { onDelete: "cascade" }),
    studentId: (0, pg_core_1.uuid)("student_id")
        .notNull()
        .references(function () { return exports.students.id; }, { onDelete: "cascade" }),
    enrollmentDate: (0, pg_core_1.date)("enrollment_date").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.primaryKey)({ columns: [table.classId, table.studentId] }),
        (0, pg_core_1.index)("class_student_class_idx").on(table.classId),
        (0, pg_core_1.index)("class_student_student_idx").on(table.studentId),
    ];
});
// Assignments
exports.assignments = (0, pg_core_1.pgTable)("assignments", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    title: (0, pg_core_1.text)("title").notNull(),
    type: (0, pg_core_1.text)("type").notNull(), // homework, quiz, test, project
    classId: (0, pg_core_1.uuid)("class_id")
        .notNull()
        .references(function () { return exports.classes.id; }, { onDelete: "cascade" }),
    dueDate: (0, pg_core_1.timestamp)("due_date").notNull(),
    totalPoints: (0, pg_core_1.integer)("total_points").notNull(),
    estimatedTime: (0, pg_core_1.integer)("estimated_time"),
    instructions: (0, pg_core_1.text)("instructions").notNull(),
    allowLateSubmissions: (0, pg_core_1.boolean)("allow_late_submissions").default(false),
    timeLimit: (0, pg_core_1.integer)("time_limit"),
    status: (0, enums_1.assignmentStatusEnum)("status").default("draft").notNull(),
    resources: (0, pg_core_1.json)("resources"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    createdAt: (0, pg_core_1.timestamp)("created_at").notNull().defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").notNull().defaultNow(),
}, function (table) {
    return [
        (0, pg_core_1.index)("assignment_class_idx").on(table.classId),
        (0, pg_core_1.index)("assignment_teacher_idx").on(table.teacherId),
    ];
});
// Assignment Submissions
exports.assignmentSubmissions = (0, pg_core_1.pgTable)("assignment_submissions", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    assignmentId: (0, pg_core_1.uuid)("assignment_id")
        .notNull()
        .references(function () { return exports.assignments.id; }, { onDelete: "cascade" }),
    studentId: (0, pg_core_1.uuid)("student_id")
        .notNull()
        .references(function () { return exports.students.id; }, { onDelete: "cascade" }),
    submissionDate: (0, pg_core_1.timestamp)("submission_date").defaultNow().notNull(),
    score: (0, pg_core_1.decimal)("score"),
    feedback: (0, pg_core_1.text)("feedback"),
    content: (0, pg_core_1.text)("content"),
    comments: (0, pg_core_1.json)("comments"), // Array of comment objects with author, text, timestamp
    attachments: (0, pg_core_1.json)("attachments"),
    isLate: (0, pg_core_1.boolean)("is_late").default(false),
    gradedBy: (0, pg_core_1.uuid)("graded_by").references(function () { return exports.users.id; }),
    gradedAt: (0, pg_core_1.timestamp)("graded_at"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.index)("submission_assignment_idx").on(table.assignmentId),
        (0, pg_core_1.index)("submission_student_idx").on(table.studentId),
    ];
});
// Grades
exports.grades = (0, pg_core_1.pgTable)("grades", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    studentId: (0, pg_core_1.uuid)("student_id")
        .notNull()
        .references(function () { return exports.students.id; }, { onDelete: "cascade" }),
    classId: (0, pg_core_1.uuid)("class_id")
        .notNull()
        .references(function () { return exports.classes.id; }, { onDelete: "cascade" }),
    assignmentId: (0, pg_core_1.uuid)("assignment_id").references(function () { return exports.assignments.id; }, {
        onDelete: "set null",
    }),
    score: (0, pg_core_1.decimal)("score").notNull(),
    maxScore: (0, pg_core_1.decimal)("max_score").notNull(),
    comments: (0, pg_core_1.text)("comments"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) { return ([
    (0, pg_core_1.index)("grade_student_idx").on(table.studentId),
    (0, pg_core_1.index)("grade_class_idx").on(table.classId),
    (0, pg_core_1.index)("grade_assignment_idx").on(table.assignmentId),
    (0, pg_core_1.index)("grade_teacher_idx").on(table.teacherId),
]); });
// Teaching Materials
exports.materials = (0, pg_core_1.pgTable)("materials", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    name: (0, pg_core_1.text)("name").notNull(),
    type: (0, pg_core_1.text)("type").notNull(), // lesson-plan, worksheet, presentation, document, image, video, audio
    subject: (0, pg_core_1.text)("subject").notNull(),
    gradeLevel: (0, pg_core_1.text)("grade_level").notNull(),
    classId: (0, pg_core_1.uuid)("class_id").references(function () { return exports.classes.id; }, {
        onDelete: "set null",
    }),
    description: (0, pg_core_1.text)("description"),
    fileUrl: (0, pg_core_1.text)("file_url").notNull(),
    fileSize: (0, pg_core_1.integer)("file_size").notNull(),
    fileType: (0, pg_core_1.text)("file_type").notNull(),
    shareWithStudents: (0, pg_core_1.boolean)("share_with_students").default(false),
    shareWithTeachers: (0, pg_core_1.boolean)("share_with_teachers").default(false),
    tags: (0, pg_core_1.json)("tags"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
}, function (table) {
    return [
        (0, pg_core_1.index)("material_teacher_idx").on(table.teacherId),
        (0, pg_core_1.index)("material_class_idx").on(table.classId),
        (0, pg_core_1.index)("material_organization_idx").on(table.organizationId),
    ];
});
// Lesson Plans
exports.lessonPlans = (0, pg_core_1.pgTable)("lesson_plans", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    title: (0, pg_core_1.text)("title").notNull(),
    subject: (0, pg_core_1.text)("subject").notNull(),
    gradeLevel: (0, pg_core_1.text)("grade_level").notNull(),
    duration: (0, pg_core_1.text)("duration").notNull(),
    date: (0, pg_core_1.date)("date").defaultNow().notNull(),
    classId: (0, pg_core_1.uuid)("class").references(function () { return exports.classes.id; }),
    status: (0, enums_1.lessonPlanStatusEnum)("status").default("draft"),
    objectives: (0, pg_core_1.json)("objectives").$type().notNull(),
    materials: (0, pg_core_1.json)("materials").$type().notNull(),
    introduction: (0, pg_core_1.text)("introduction").notNull(),
    mainActivity: (0, pg_core_1.text)("main_activity").notNull(),
    conclusion: (0, pg_core_1.text)("conclusion").notNull(),
    assessment: (0, pg_core_1.text)("assessment").notNull(),
    notes: (0, pg_core_1.text)("notes"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    organizationId: (0, pg_core_1.uuid)("organization_id").references(function () { return exports.organizations.id; }),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
    procedure: (0, pg_core_1.jsonb)("procedure").$type().notNull().default({})
}, function (table) {
    return [
        (0, pg_core_1.index)("lesson_plan_teacher_idx").on(table.teacherId),
        (0, pg_core_1.index)("lesson_plan_class_idx").on(table.classId),
        (0, pg_core_1.index)("lesson_plan_organization_idx").on(table.organizationId),
    ];
});
// Calendar Events
exports.calendarEvents = (0, pg_core_1.pgTable)("calendar_events", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey(),
    title: (0, pg_core_1.text)("title").notNull(),
    description: (0, pg_core_1.text)("description"),
    startDate: (0, pg_core_1.timestamp)("start_date").notNull(),
    endDate: (0, pg_core_1.timestamp)("end_date").notNull(),
    allDay: (0, pg_core_1.boolean)("all_day").default(false).notNull(),
    location: (0, pg_core_1.text)("location"),
    type: (0, enums_1.eventTypeEnum)("type").notNull().default("class"),
    classId: (0, pg_core_1.uuid)("class_id").references(function () { return exports.classes.id; }, { onDelete: "set null" }),
    assignmentId: (0, pg_core_1.uuid)("assignment_id").references(function () { return exports.assignments.id; }, { onDelete: "set null" }),
    lessonPlanId: (0, pg_core_1.uuid)("lesson_plan_id").references(function () { return exports.lessonPlans.id; }, { onDelete: "set null" }),
    color: (0, pg_core_1.text)("color"),
    teacherId: (0, pg_core_1.uuid)("teacher_id")
        .notNull()
        .references(function () { return exports.users.id; }, { onDelete: "cascade" }),
    recurrenceRule: (0, pg_core_1.text)("recurrence_rule"), // For recurring events
    isRecurring: (0, pg_core_1.boolean)("is_recurring").default(false),
    visibility: (0, enums_1.eventVisibilityEnum)("event_visibility").default("private").notNull(),
    reminders: (0, pg_core_1.json)("reminders").default([]).$type(), // Array of reminder settings
    createdAt: (0, pg_core_1.timestamp)("created_at").notNull().defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").notNull().defaultNow(),
});
