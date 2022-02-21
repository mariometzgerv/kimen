export interface CourseModel {
    id: number;
    name: string;
    short_name: string;
}

export interface CourseTeacherModel {
    id: number;
    name: string;
    short_name: string;
    is_teacher: boolean;
}