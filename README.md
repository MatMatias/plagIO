# plagIO

#### English text plagiarism identifier

#### https://plagio.vercel.app/

This project intends to use a neural network that analyses text based on the writing style of each phrase. If a phrase's style has a certain level of difference in writing style of the text as a whole, the neural network will notify the phrase in question, warning that it might be a plagiarism. A webapp was built to consume this neural network so the users can verify plagiarism more easily.

## Architecture

There are two modules on this project: the neural network pipeline and the webapp.

## Neural network pipeline (WORK IN PROGRESS)

This module contains pipeline to model and train the neural network. Run the following commands to reproduce the neural. The neural network output is a XML file containing the offset and the length of each plagiarized stretch. See an example below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<document xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.uni-weimar.de/medien/webis/research/corpora/pan-pc-09/document.xsd" reference="suspicious-document00001.txt">
  <feature name="project-gutenberg" etext_number="4699" url="http://www.gutenberg.org/dirs/etext03/wenev11.txt" />
  <feature name="language" value="en" />
  <feature name="detected-plagiarism" this_offset="50" this_length="1000" />
  <!-- Use tags like the one below to annotate plagiarism you detected. -->
</document>
```

### Run the neural network pipeline:

#### Download texts database:

https://cefetrjbr.sharepoint.com/:u:/r/sites/Section_132349-G4-P5-Plagon/Documentos%20Compartilhados/G4-P5-Plagon/pan11-train.tar.gz?csf=1&web=1&e=jHtfTH

#### extract the downloaded files on the following directory:

```
neural_net_pipeline/pancorpus/train/
```

#### Build container:

```
$ make build
```

#### Run container:

```
$ make dev
```

#### Create sqlite3 database with the downloaded texts:

```
$ python neural_network_pipeline/src/gen_pandb_train.py --srcdir neural_network_pipeline/pancorpus/train --destfile ./plag_train.db
```

#### Create skipthoughts model:

```
$ python ./src/create_st_model.py --pandb plag_train.db --stdir ./data/skip-thoughts/ --destdir ./data/pkl --vocab ./data/skip-thoughts/dictionary.txt --start 1
```

#### Generate metadata:

```
$ python ./src/gen_metadata.py
```

#### Generate tuples:

```
$ python ./src/gen_tuples.py --destdir ./data/tuples
```

## Webapp

This module contains the webapp, written in NextJS (typescript). It is ran using Node v16.14.2
To run the app, run the following commands within the webapp directory:

### [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

Running with npm:

```
$ npm install
$ npm run dev
```

### [yarn](https://yarnpkg.com/getting-started/install):

Running with yarn:

```
$ yarn
$ yarn dev
```

### Tests

#### Setup Selenium dependencies

```
$ pip install -r ./test/requirements.txt
```

#### Run Selenium test

```
$ yarn test_ui
```
