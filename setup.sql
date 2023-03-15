DROP TABLE IF EXISTS wrong;
DROP TABLE IF EXISTS person;

CREATE TABLE person(
    person_id INT GENERATED ALWAYS AS IDENTITY,
    person_name VARCHAR(50) NOT NULL, 
    PRIMARY KEY (person_id)
);

INSERT INTO person (person_name)
VALUES ('Bob'), ('Monia'), ('Tom'), ('Clarence');

CREATE TABLE wrong (
    wrong_id INT GENERATED ALWAYS AS IDENTITY,
    perpetrator_id INT NOT NULL,
    victim_id INT NOT NULL,
    description VARCHAR(200),
    forgiven BOOLEAN DEFAULT FALSE,
    forgotten BOOLEAN DEFAULT FALSE,
    revenged BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (wrong_id),
    FOREIGN KEY (perpetrator_id) REFERENCES person(person_id),
    FOREIGN KEY (victim_id) REFERENCES person(person_id)
);

INSERT INTO wrong
    (perpetrator_id, victim_id, description)
VALUES
    (3, 2, 'Ate his pet chicken.');
