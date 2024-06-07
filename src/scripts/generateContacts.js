import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        for (let index = 0; index < number; index++) {
            contacts.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log(`You wrote ${number} contacts`);
    } catch (error) {
        console.log(`Incorrect data`, error);
    }
}

await generateContacts(5);
