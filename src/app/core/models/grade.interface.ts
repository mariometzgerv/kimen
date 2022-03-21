export interface GradeModel {
    id: number;
    name: string;
    short_name: string;
}

export interface GradeTeacherModel {
    id: number;
    name: string;
    short_name: string;
    is_teacher: number;
}