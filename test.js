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
  

const allSettled = async() => {
  let i = 0;
  const stuck = [];
  const result = [];
  let alreadySend = [];
  let stepper = 60;

    try {
        alreadySend = await readFileToArray('./data.json')
    } catch (error) {}

    let start = new Date();
    let successCounter = 0;
    let errorCounter = 0;


    while (i < emails.length) {
        await Promise.allSettled(
            emails.slice(i, i + stepper).map(({fio, email}, index) => {
                if(alreadySend[index] === 'не отправлено' || !alreadySend[index]) {
                  return new Promise((res, rej) => {
                     sendEmail(email, fio).then((data) => {
                        result[index] = fio || "клиент";
                        res(data);
                        successCounter+= 1;
                    }).catch((error) => {
                        result[index] = error.message;
                        rej(error);
                        errorCounter+=1;
                    });
                  });
                } else {
                    result[index] = alreadySend[index];
                    return new Promise((res) => {
                        res();
                    });
                }
            })
        );
        const end = new Date();
        const dif = (end - start) / 1000;

        if(errorCounter) {
          if(end - start < 60000) {
            stepper = errorCounter;
            console.log(stepper);

          if(successCounter>=60) {
            await new Promise(
              (resolve) => 
              setTimeout(() => {
                console.log("i am wait --------->", 60 - dif);
                resolve()
              }),
              dif >= 60 ? 0 : (60 - dif) * 1000
            );
            stepper = 60;
            }
          } else {
            errorCounter = 0;
            successCounter = 0;
          }
        } else {

        await new Promise(
          (resolve) =>
            setTimeout(() => {
              console.log("i am wait2 --------->", 60 - dif);
              resolve()
            }),
            dif >= 60 ? 0 : (60 - dif) * 1000
          );
          stepper = 60;
          }
          i += stepper;
        }

    writeArrayToJsonFileSync(result);
};
allSettled(emails);