DROP DATABASE IF EXISTS agents;
CREATE DATABASE IF NOT EXISTS agents;
USE agents;

DROP TABLE IF EXISTS listedAgent, premierAgents;

CREATE TABLE listedAgent (
  id INT AUTO_INCREMENT,
  house_id INT,
  agent_name VARCHAR(100),
  agent_company VARCHAR(100),
  agent_phone VARCHAR(50),
  agent_url VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE premierAgents (
  id INT AUTO_INCREMENT,
  agent_name VARCHAR(100),
  reviews INT,
  recent_sales INT,
  agent_phone VARCHAR(50),
  agent_url VARCHAR(255),
  PRIMARY KEY (id)
);