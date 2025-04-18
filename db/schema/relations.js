"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarEventsRelations = exports.lessonPlansRelations = exports.materialsRelations = exports.gradesRelations = exports.assignmentSubmissionsRelations = exports.assignmentsRelations = exports.classStudentsRelations = exports.studentsRelations = exports.classesRelations = exports.subscriptionsRelations = exports.organizationsRelations = exports.usersRelations = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var tables_1 = require("./tables");
// Relations
exports.usersRelations = (0, drizzle_orm_1.relations)(tables_1.users, function (_a) {
    var one = _a.one, many = _a.many;
    return ({
        organization: one(tables_1.organizations, {
            fields: [tables_1.users.organizationId],
            references: [tables_1.organizations.id],
        }),
        subscription: one(tables_1.subscriptions, {
            fields: [tables_1.users.id],
            references: [tables_1.subscriptions.userId],
        }),
        classes: many(tables_1.classes),
        students: many(tables_1.students),
        materials: many(tables_1.materials),
        lessonPlans: many(tables_1.lessonPlans),
        calendarEvents: many(tables_1.calendarEvents),
    });
});
exports.organizationsRelations = (0, drizzle_orm_1.relations)(tables_1.organizations, function (_a) {
    var many = _a.many;
    return ({
        users: many(tables_1.users),
        subscriptions: many(tables_1.subscriptions),
        classes: many(tables_1.classes),
        students: many(tables_1.students),
        materials: many(tables_1.materials),
        lessonPlans: many(tables_1.lessonPlans),
    });
});
exports.subscriptionsRelations = (0, drizzle_orm_1.relations)(tables_1.subscriptions, function (_a) {
    var one = _a.one;
    return ({
        user: one(tables_1.users, {
            fields: [tables_1.subscriptions.userId],
            references: [tables_1.users.id],
        }),
        organization: one(tables_1.organizations, {
            fields: [tables_1.subscriptions.organizationId],
            references: [tables_1.organizations.id],
        }),
    });
});
exports.classesRelations = (0, drizzle_orm_1.relations)(tables_1.classes, function (_a) {
    var one = _a.one, many = _a.many;
    return ({
        teacher: one(tables_1.users, {
            fields: [tables_1.classes.teacherId],
            references: [tables_1.users.id],
        }),
        organization: one(tables_1.organizations, {
            fields: [tables_1.classes.organizationId],
            references: [tables_1.organizations.id],
        }),
        classStudents: many(tables_1.classStudents),
        assignments: many(tables_1.assignments),
        materials: many(tables_1.materials),
        calendarEvents: many(tables_1.calendarEvents),
    });
});
exports.studentsRelations = (0, drizzle_orm_1.relations)(tables_1.students, function (_a) {
    var one = _a.one, many = _a.many;
    return ({
        teacher: one(tables_1.users, {
            fields: [tables_1.students.teacherId],
            references: [tables_1.users.id],
        }),
        organization: one(tables_1.organizations, {
            fields: [tables_1.students.organizationId],
            references: [tables_1.organizations.id],
        }),
        classStudents: many(tables_1.classStudents),
        assignmentSubmissions: many(tables_1.assignmentSubmissions),
        grades: many(tables_1.grades),
    });
});
exports.classStudentsRelations = (0, drizzle_orm_1.relations)(tables_1.classStudents, function (_a) {
    var one = _a.one;
    return ({
        class: one(tables_1.classes, {
            fields: [tables_1.classStudents.classId],
            references: [tables_1.classes.id],
        }),
        student: one(tables_1.students, {
            fields: [tables_1.classStudents.studentId],
            references: [tables_1.students.id],
        }),
    });
});
exports.assignmentsRelations = (0, drizzle_orm_1.relations)(tables_1.assignments, function (_a) {
    var one = _a.one, many = _a.many;
    return ({
        class: one(tables_1.classes, {
            fields: [tables_1.assignments.classId],
            references: [tables_1.classes.id],
        }),
        teacher: one(tables_1.users, {
            fields: [tables_1.assignments.teacherId],
            references: [tables_1.users.id],
        }),
        submissions: many(tables_1.assignmentSubmissions),
        grades: many(tables_1.grades),
        calendarEvents: many(tables_1.calendarEvents),
    });
});
exports.assignmentSubmissionsRelations = (0, drizzle_orm_1.relations)(tables_1.assignmentSubmissions, function (_a) {
    var one = _a.one;
    return ({
        assignment: one(tables_1.assignments, {
            fields: [tables_1.assignmentSubmissions.assignmentId],
            references: [tables_1.assignments.id],
        }),
        student: one(tables_1.students, {
            fields: [tables_1.assignmentSubmissions.studentId],
            references: [tables_1.students.id],
        }),
        gradedByUser: one(tables_1.users, {
            fields: [tables_1.assignmentSubmissions.gradedBy],
            references: [tables_1.users.id],
        }),
    });
});
exports.gradesRelations = (0, drizzle_orm_1.relations)(tables_1.grades, function (_a) {
    var one = _a.one;
    return ({
        student: one(tables_1.students, {
            fields: [tables_1.grades.studentId],
            references: [tables_1.students.id],
        }),
        class: one(tables_1.classes, {
            fields: [tables_1.grades.classId],
            references: [tables_1.classes.id],
        }),
        assignment: one(tables_1.assignments, {
            fields: [tables_1.grades.assignmentId],
            references: [tables_1.assignments.id],
        }),
        teacher: one(tables_1.users, {
            fields: [tables_1.grades.teacherId],
            references: [tables_1.users.id],
        }),
    });
});
exports.materialsRelations = (0, drizzle_orm_1.relations)(tables_1.materials, function (_a) {
    var one = _a.one;
    return ({
        teacher: one(tables_1.users, {
            fields: [tables_1.materials.teacherId],
            references: [tables_1.users.id],
        }),
        class: one(tables_1.classes, {
            fields: [tables_1.materials.classId],
            references: [tables_1.classes.id],
        }),
        organization: one(tables_1.organizations, {
            fields: [tables_1.materials.organizationId],
            references: [tables_1.organizations.id],
        }),
    });
});
exports.lessonPlansRelations = (0, drizzle_orm_1.relations)(tables_1.lessonPlans, function (_a) {
    var one = _a.one;
    return ({
        teacher: one(tables_1.users, {
            fields: [tables_1.lessonPlans.teacherId],
            references: [tables_1.users.id],
        }),
        organization: one(tables_1.organizations, {
            fields: [tables_1.lessonPlans.organizationId],
            references: [tables_1.organizations.id],
        }),
        class: one(tables_1.classes, {
            fields: [tables_1.lessonPlans.classId],
            references: [tables_1.classes.id]
        })
    });
});
exports.calendarEventsRelations = (0, drizzle_orm_1.relations)(tables_1.calendarEvents, function (_a) {
    var one = _a.one;
    return ({
        teacher: one(tables_1.users, {
            fields: [tables_1.calendarEvents.teacherId],
            references: [tables_1.users.id],
        }),
        class: one(tables_1.classes, {
            fields: [tables_1.calendarEvents.classId],
            references: [tables_1.classes.id],
        }),
        assignment: one(tables_1.assignments, {
            fields: [tables_1.calendarEvents.assignmentId],
            references: [tables_1.assignments.id],
        }),
    });
});
