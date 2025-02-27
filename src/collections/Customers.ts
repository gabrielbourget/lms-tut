import type { CollectionConfig } from "payload";

export const Customers: CollectionConfig = {
  slug: "customers",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    create: () => true
  },
  fields: [
    {
      name: "participation",
      label: "Participation",
      type: "relationship",
      relationTo: "courses",
      hasMany: true
    }
  ],
}