export type Question = {
  question: string;
  correctAnswer: boolean;
};
export type DataResult = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
