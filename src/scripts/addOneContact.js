import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        contacts.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('You wrote 1 contact');
    } catch (error) {
        console.log(`Incorrect data`, error);
    }
};

await addOneContact();
