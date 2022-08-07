-- Up
CREATE TABLE Plagiarism (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT,
  plagiarisms TEXT
)

-- Down
DROP TABLE Plagiarism
