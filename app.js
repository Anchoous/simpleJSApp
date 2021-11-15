import chance from 'chance';
import fs from 'fs/promises';

function Student(){
    this.name = chance.Chance().first();
    this.surname = chance.Chance().last();
    this.rate = chance.Chance().integer({min:1, max: 100});
    
};

async function File(){
    let student = new Student();
    let string = JSON.stringify(student);
    
    try {
        await fs.writeFile('text.txt',string);
        console.log("Saved");

        let  text = await fs.readFile('text.txt', "utf8")

        console.log("Read");

        let new_student = await JSON.parse(text);
        new_student.rate = chance.Chance().integer({min:1, max: 100});
        
        await fs.appendFile('text.txt', JSON.stringify(new_student));
        console.log("Added")

    }catch (error) {
        console.error('there was an error:', error.message);
      }


};

File();


