import feathers from "@feathersjs/client";
import { apiUrl } from "../lib/constants.js";

const client = feathers();

const rest = feathers.rest(apiUrl)

client.configure(rest.fetch(window.fetch));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export default client;