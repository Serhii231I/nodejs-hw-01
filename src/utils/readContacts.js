import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
const productData = await fs.readFile(PATH_DB, { "encoding": "utf-8" });

};
