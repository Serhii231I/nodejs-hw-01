import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsList = await readContacts();
    for (let i = 1; i <= number; i++) {
      contactsList.push(createFakeContact());
    }
    await writeContacts(contactsList);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
