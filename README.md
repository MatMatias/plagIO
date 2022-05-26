# Plagon
Plagiarism identifier


# Documento de instalação e configuração do framework

### Baixar base de dados:
  - Baixar os arquivos pelo link: https://cefetrjbr.sharepoint.com/:u:/r/sites/Section_132349-G4-P5-Plagon/Documentos%20Compartilhados/G4-P5-Plagon/pan11-train.tar.gz?csf=1&web=1&e=jHtfTH
  - extrair os arquivos da pasta train em ./pancorpus/train/
### Buildar container:
  - make build
### Rodar container:
  - make dev
### Criar banco de dados sqlite3 com os artigos:
	- python ./src/gen_pandb_train.py --srcdir ./pancorpus/train --destfile ./plag_train.db

### Criar modelo skipthoughts:
	- python ./src/create_st_model.py --pandb plag_train.db --stdir ./data/skip-thoughts/ --destdir ./data/pkl --vocab ./data/skip-thoughts/dictionary.txt --start 4000 --maxsen 300

### Gerar metadados:
  - python ./src/gen_metadata.py

### Gerar tuplas:
  - python ./src/gen_tuples.py --destdir ./data/tuples
