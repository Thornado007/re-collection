import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "6add243c-8548-4da7-81b5-56715509ae0c",
  branch: "main",
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  schema: {
    collections: [
      {
        name: "archive",
        label: "Archive Items",
        path: "content/archive",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
