// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Customers } from "./collections/Customers";
import { Courses } from "./collections/Courses/Courses";
import brevoAdapter from "./utils/brevo";
import { Participation } from "./collections/Courses/Participation";

const {
  PAYLOAD_SECRET, DATABASE_URI, S3_BUCKET_NAME, S3_BUCKET_REGION, S3_BUCKET_ENDPOINT,
  S3_BUCKET_ACCESS_KEY, S3_BUCKET_SECRET_KEY
} = process.env;

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  email: brevoAdapter(),
  collections: [Users, Media, Customers, Courses, Participation],
  editor: lexicalEditor(),
  secret: PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true
      },
      bucket: S3_BUCKET_NAME || "",
      config: {
        region: S3_BUCKET_REGION || "",
        endpoint: S3_BUCKET_ENDPOINT || "",
        credentials: {
          accessKeyId: S3_BUCKET_ACCESS_KEY || "",
          secretAccessKey: S3_BUCKET_SECRET_KEY || "",
        },
      }
    })
  ],
});
