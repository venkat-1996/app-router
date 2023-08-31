import { BASE_URL } from "@/constant/url";
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(BASE_URL) // Your API Endpoint
  .setProject(process.env.APP_WRITE_PROJECT_ID); // Your project ID

export const service = {
  createDocument: (projectId, databaseId, collectionId, data) => {
    // client.headers = `X-Appwrite-Project: ${projectId}`;
    client["X-Appwrite-Project"] = projectId;
    client["Access-Control-Allow-Origin"] =
      "https://next-application.netlify.app/";
    client["Content-Type"] = "application/json";
    client
      .setEndpoint(BASE_URL) // Your API Endpoint
      .setProject(projectId); // Your project ID

    const promise = databases.createDocument(
      databaseId,
      collectionId,
      "unique()",
      data
    );

    return dataDriven(promise);
  },
  listDocuments: (collectionId) => {
    const promise = databases.listDocuments(
      process.env.APP_WRITE_DB_ID,
      collectionId
    );
    return dataDriven(promise);
  },
  getDocument: (collectionId, documentId) => {
    const promise = databases.getDocument(
      process.env.APP_WRITE_DB_ID,
      collectionId,
      documentId
    );
    return dataDriven(promise);
  },
};

export const dataDriven = (promise) => {
  return promise.then(
    function (response) {
      // Success
      return response;
    },
    function (error) {
      // Failure
      return error;
    }
  );
};
