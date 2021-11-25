export default {
  name: "education",
  title: "EDUCATION",
  type: "document",
  fields: [
    {
      name: "imageHome",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Degree Title",
      type: "string",
    },
    {
      name: "name",
      title: "Istitution Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "releaseDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "finishDate",
      title: "Finish Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
  ],
  orderings: [
    {
      title: "Release Date, New",
      name: "releaseDateDesc",
      by: [{ field: "releaseDate", direction: "asc" }],
    },
  ],
};
