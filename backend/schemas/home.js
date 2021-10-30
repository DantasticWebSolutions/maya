export default {
  name: "home",
  title: "HOME",
  type: "document",
  fields: [
    {
      name: "title",
      title: "[HOME PAGE] Title",
      type: "string",
      // description: "HOME PAGE",
    },
    {
      name: "description",
      title: "[HOME PAGE] Description",
      type: "blockContent",
      // description: "HOME PAGE",
    },
    {
      name: "link",
      title: "[HOME PAGE] Link",
      type: "url",
      // description: "HOME PAGE",
    },
    {
      name: "imageHome",
      title: "[HOME] Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "titleRadio",
      title: "[RADIO] Title",
      type: "string",
      // description: "RADIO",
    },
    {
      name: "descriptionRadio",
      title: "[RADIO] Description",
      type: "blockContent",
      // description: "RADIO",
    },
    {
      name: "imageRadio",
      title: "[RADIO] Image",
      type: "image",
      options: {
        hotspot: true,
      },
      // description: "RADIO",
    },
    {
      name: "titleArticles",
      title: "[ARTICLES] Title",
      type: "string",
      // description: "ARTICLES",
    },
    {
      name: "descriptionArticles",
      title: "[ARTICLES] Description",
      type: "blockContent",
      // description: "ARTICLES",
    },
    {
      name: "imageArticles",
      title: "[ARTICLES] Image",
      type: "image",
      options: {
        hotspot: true,
      },
      // description: "ARTICLES",
    },
    {
      name: "titleTv",
      title: "[TV] Title",
      type: "string",
      // description: "TV",
    },
    {
      name: "descriptionTv",
      title: "[TV] Description",
      type: "blockContent",
      // description: "TV",
    },
    {
      name: "imageTv",
      title: "[TV] Image",
      type: "image",
      options: {
        hotspot: true,
      },
      // description: "TV",
    },
  ],
};
