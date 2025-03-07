import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const countedContacts = await readContacts();
    return countedContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
