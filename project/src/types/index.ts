export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'employee' | 'trainer';
  password: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  createdBy: string;
}

export interface Module {
  id: string;
  title: string;
  content: string;
  assessment: Assessment;
}

export interface Assessment {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Progress {
  userId: string;
  courseId: string;
  completedModules: string[];
  assessmentScores: Record<string, number>;
}