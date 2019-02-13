const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'agents',
});

connection.connect();

const createData = () => {
  let i = 0;
  const results = [];
  const iterator = () => {
    const pAgent = {
      agent_name: faker.name.findName(),
      reviews: faker.random.number(500),
      recent_sales: faker.random.number(500),
      agent_phone: faker.phone.phoneNumber(),
      agent_url: faker.image.people(),
    };
    const query = `
      INSERT INTO premierAgents (agent_name, reviews, recent_sales, agent_phone, agent_url)
      VALUES ("${pAgent.agent_name}", ${pAgent.reviews}, ${pAgent.recent_sales}, "${pAgent.agent_phone}", "${pAgent.agent_url}")
    `;

    connection.query(query, (err, data) => {
      results[i] = data;
      if (i < 100) {
        i += 1;
        iterator();
      } else {
        console.log('Fake data inserted into DB');
      }
      if (err) {
        console.log('fake data insert FAILED', err);
      }
    });
  };

  connection.query('DROP TABLE IF EXISTS listedAgent, premierAgents;', (err, data) => {
    connection.query(`
      CREATE TABLE premierAgents (
        id INT AUTO_INCREMENT,
        agent_name VARCHAR(100),
        reviews INT,
        recent_sales INT,
        agent_phone VARCHAR(50),
        agent_url VARCHAR(255),
        PRIMARY KEY (id)
      );`, (err, data) => { iterator(); });
  });
};
createData();