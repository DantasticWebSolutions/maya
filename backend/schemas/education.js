export default {
  name: "education",
  title: "EDUCATION",
  type: "document",
  fields: [
    {
      name: "img",
      title: "Image Link",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "releaseDate",
      title: "Release date",
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
