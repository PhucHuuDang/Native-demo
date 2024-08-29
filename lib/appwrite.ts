import { Account, Client, ID } from "react-native-appwrite";

export const appWriteConfig = {
  endpoint: "https://cloud.appWrite.io/v1",
  // platform: "com.harry.native",
  platform: process.env.PLATFORM!,
  // projectId: "66d048fd0012a11997e4",
  projectId: process.env.PROJECT_ID!,
  databaseId: process.env.DATABASE_ID,
  userCollectionId: process.env.USER_COLLECTION_ID,
  videoCollectionId: process.env.VIDEO_COLLECTION_ID,
  storageId: process.env.STORAGE_ID,
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
