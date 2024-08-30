//@ts-ignore
import { Client, ID, Account } from "react-native-appwrite";

// export const appWriteConfig = {
//   endpoint: "https://cloud.appWrite.io/v1",
//   platform: "com.harry.native",
//   projectId: "66d048fd0012a11997e4",
//   databaseId: "66d04b35003cd107b601",
//   userCollectionId: "66d04b6d00093e54abac",
//   videoCollectionId: "66d04bb7001c10d71157",
//   storageId: "66d04d45001e2e4c9622",
// };

export const appWriteConfig = {
  endpoint: "https://cloud.appWrite.io/v1",
  platform: process.env.EXPO_PUBLIC_PLATFORM!,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID!,
  databaseId: process.env.EXPO_PUBLIC_DATABASE_ID!,
  userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID!,
  videoCollectionId: process.env.EXPO_PUBLIC_VIDEO_COLLECTION_ID!,
  storageId: process.env.EXPO_PUBLIC_STORAGE_ID!,
};

// console.log("hello", process.env.EXPO_PUBLIC_PLATFORM);

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response: any) {
      console.log(response);
    },
    function (error: any) {
      console.log(error);
    }
  );
};
