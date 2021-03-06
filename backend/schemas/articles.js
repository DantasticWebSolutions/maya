export default {
  name: "articles",
  title: "ARTICLES",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgVideo",
      title: "Img or Video?",
      type: "string",
      description: "Write either: 'img' or 'video' ",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
