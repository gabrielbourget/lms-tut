import { Block } from "payload";

export const QuizBLock: Block = {
  slug: "quiz",
  labels: {
    singular: "Quiz",
    plural: "Quizzes"
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true
    },
    {
      name: "questions",
      labels: {
        singular: "Question",
        plural: "Questions"
      },
      type: "array",
      required: true,
      fields: [
        {
          name: "question",
          label: "Question",
          type: "text",
          required: true
        },
        {
          name: "answers",
          label: {
            singular: "Answer",
            plural: "Answers"
          },
          type: "array",
          required: true,
          fields: [
            {
              name: "answer",
              label: "Answer",
              type: "text",
              required: true
            },
            {
              name: "correct",
              label: "Correct",
              type: "checkbox",
              required: true
            }
          ]
        }
      ]
    }
  ]
}