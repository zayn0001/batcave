import { createClient } from "@sanity/client";


const client = createClient({
  projectId: "32qy31rk", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});

export default client