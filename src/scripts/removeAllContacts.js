import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        contacts.splice(0, contacts.length);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('You deleted all contacts')
    } catch (error) {
        console.log(`Incorrect data`, error);
    }
};

await removeAllContacts();
