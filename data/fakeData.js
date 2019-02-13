const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'agents',
  multipleStatements: true,
});

connection.connect();

const createData = () => {
  let i = 0;
  const iterator = () => {
    const lAgent = {
      house_id: i,
      agent_name: faker.name.findName(),
      agent_company: faker.company.companyName(),
      agent_phone: faker.phone.phoneNumber(),
      agent_url: faker.image.people(),
    };
    const lQuery = `
    INSERT INTO listedAgent (house_id, agent_name, agent_company, agent_phone, agent_url)
    VALUES (${lAgent.house_id}, "${lAgent.agent_name}", "${lAgent.agent_company}", "${lAgent.agent_phone}", "${lAgent.agent_url}")
  `;
    connection.query(lQuery, (err, data) => {
      if (i === 100) { console.log('listed agents data entered') }
    });
    const pAgent = {
      agent_name: faker.name.findName(),
      reviews: faker.random.number(500),
      recent_sales: faker.random.number(500),
      agent_phone: faker.phone.phoneNumber(),
      agent_url: faker.image.people(),
    };
    const pQuery = `
      INSERT INTO premierAgents (agent_name, reviews, recent_sales, agent_phone, agent_url)
      VALUES ("${pAgent.agent_name}", ${pAgent.reviews}, ${pAgent.recent_sales}, "${pAgent.agent_phone}", "${pAgent.agent_url}")
    `;

    connection.query(pQuery, (err, data) => {
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
      CREATE TABLE listedAgent (
        id INT AUTO_INCREMENT,
        house_id INT,
        agent_name VARCHAR(100),
        agent_company VARCHAR(100),
        agent_phone VARCHAR(50),
        agent_url VARCHAR(255),
        PRIMARY KEY (id)
      );`, (err, data) => {
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
      })
  });
};
createData();