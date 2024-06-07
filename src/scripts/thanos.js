import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const filterRandomContacts = contacts.filter(() => Math.random() > 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(filterRandomContacts));
        console.log('You snapped your fingers, beware the Thunder God')
    } catch (error) {
        console.log(`Incorrect data`, error);
    }
};

await thanos();
