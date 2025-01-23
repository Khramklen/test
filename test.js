//при первом запуске очистить массив в файле  data.json
const fs = require('fs');
const fsPromises = require('fs').promises;

async function readFileToArray(filePath) {
    try {
      const data = await fsPromises.readFile(filePath, 'utf8');
      const array = JSON.parse(data);
      if (!Array.isArray(array)) {
        throw new Error('Parsed data is not in array')
      }  
      return array;
    } catch (err) {
        console.error('Error reading or processing file:', err);
        throw err;
    }
}

function writeArrayToJsonFileSync(array) {
    try {
        const jsonString = JSON.stringify(array);
        fs.writeFileSync('data.json', jsonString)
        
        console.log('Data has been written to file successfully');
    } catch (err) {
       console.log('Error writing file:', err) 
    }
}
const emails = [
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    { fio: 'Иванов Иван Иванович', email: 'example1@email.com' },
    { fio: 'Иванов И И', email: 'example2@email.com' },
    { fio: 'Ли Тян', email: 'example3@email.com' },
    { fio: '', email: 'example4@email.com' },
    { fio: 'Петров Петя', email: 'example5@email.com' },
    { fio: 'Вася Петров', email: 'example5@email.com' },
    // … 10000 записей,
    { fio: 'Петров Вася', email: 'example999@email.com' },
  ];
  
  async function sendEmail(email, fio) {
    if(fio.length < 1){
      fio = 'клиент'
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 10) > 0) {
          console.log(`отправлено ${fio} на ${email}`);
          resolve(Math.floor(Math.random() * 100000));
        } else {
          console.error(`не отправлено ${fio}  на ${email}`);
          reject(new Error('не отправлено'));
        }
      }, Math.floor(Math.random() * (2000 - 100) + 100));
    });
  }
  

const sender = async(emails) => {
    const result = [];
    let alreadySend = [];
    try {
        alreadySend = await readFileToArray('./data.json')
    } catch (error) {}

    for (let i = 0; i < emails.length; i+=60) {
        const start = new Date();
        await Promise.allSettled(
            emails.slice(i, i + 60).map(({fio, email}, index) => {
                if(alreadySend[index] === 'не отправлено' || !alreadySend[index]) {
                    return sendEmail(email, fio).then((data) => {
                        result[index] = fio;
                    }).catch((error) => {
                        result[index] = error.message;
                    });
                } else {
                    result[index] = alreadySend[index];
                    return new Promise((res, rej) => {
                        res();
                    });
                }
            })
        );
        const end = new Date();
        const dif = (end - start) / 1000;

        //нет уверенности в математике расчета, но схема такая

        await new Promise((resolve) => setTimeout(resolve, dif >= 60 ? 0: 60000));
      
        
    }
    writeArrayToJsonFileSync(result);
}
console.log(sender(emails));