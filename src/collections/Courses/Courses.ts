import { CollectionConfig } from "payload";
import { VideoBlock } from "./blocks/VideoBlock";
import { QuizBLock } from "./blocks/QuizBlock";

export const Courses: CollectionConfig = {
  slug: "courses",
  access: {
    read: ({ req: { user }}) => Boolean(user),
    create: ({ req: { user }}) =>  user?.collection === "users",
    update: ({ req: { user }}) => user?.collection === "users",
    delete: ({ req: { user }}) => user?.collection === "users",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "curriculum",
      label: "Curriculum",
      type: "blocks",
      blocks: [VideoBlock, QuizBLock],
    }
  ]
}