import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ypkrx7ew",
  dataset: "production",
  useCdn: true,
});
