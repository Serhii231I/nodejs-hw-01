import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from "fs/promises";

export const writeContacts = async (updatedContacts) => {
   const contacts = await readContacts();
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), "utf-8");
};
