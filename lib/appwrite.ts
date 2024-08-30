//@ts-ignore
import { Client, ID, Account, Avatars, Databases } from "react-native-appwrite";

// export const appWriteConfig = {
//   endpoint: "https://cloud.appWrite.io/v1",
//   platform: "com.harry.native",
//   projectId: "66d048fd0012a11997e4",
//   databaseId: "66d04b35003cd107b601",
//   userCollectionId: "66d04b6d00093e54abac",
//   videoCollectionId: "66d04bb7001c10d71157",
//   storageId: "66d04d45001e2e4c9622",
// };

interface AppWriteConfig {
  endpoint: string;
  platform: string;
  projectId: string;
  databaseId: string;
  userCollectionId: string;
  videoCollectionId: string;
  storageId: string;
}

export const appWriteConfig: AppWriteConfig = {
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
``;
const account = new Account(client);

const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error: any) {
    console.log({ error });

    throw new Error(error);
  }
};

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error: any) {
    throw new Error(error);
  }
}
