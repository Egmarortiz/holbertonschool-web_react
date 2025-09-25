import type Teacher from './Teacher';

export default abstract class Subject {
  protected teacher: Teacher | null = null;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }

  abstract getRequirements(): string;
  abstract getAvailableTeacher(): string;
}
