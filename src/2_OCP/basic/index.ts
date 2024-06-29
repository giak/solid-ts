// Run the tests

import { Library } from './library'; // Assurez-vous que le chemin d'importation est correct
import type { DocumentInterface } from '@interfaces/document.interface';
import type { StudentInterface } from '@interfaces/student.interface';
import { DocumentType } from '@packages/document/DocumentFactory';

// Création d'une instance de Library
const library = new Library();

// Création d'un document
const book: DocumentInterface = {
  id: 1,
  title: 'Introduction to TypeScript',
  author: 'Author Name',
  publicationYear: 2023,
  type: DocumentType.BOOK,
  available: true,
};
const paper: DocumentInterface = {
  id: 2,
  title: 'TypeScript in 2023',
  author: 'Another Author',
  publicationYear: 2023,
  type: DocumentType.PAPER,
  available: true,
};
library.createDocument(book);
library.createDocument(paper);

// Lecture de tous les documents
console.log(library.readDocument());

// Mise à jour d'un document
const updatedBook: DocumentInterface = { ...book, available: false };
library.updateDocument(book.title, updatedBook);

// Suppression d'un document
library.deleteDocument(paper.title);

// Création d'étudiants
const student1: StudentInterface = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  yearOfAdmission: 2020,
};
const student2: StudentInterface = {
  id: 2,
  firstName: 'Jane',
  lastName: 'Doe',
  yearOfAdmission: 2021,
};
library.createStudent(student1);
library.createStudent(student2);

// Lecture de tous les étudiants
console.log(library.readStudent());

// Mise à jour d'un étudiant
const updatedStudent1: StudentInterface = { ...student1, yearOfAdmission: 2021 };
library.updateStudent(student1.id, updatedStudent1);

// Suppression d'un étudiant
library.deleteStudent(student2.id);

// Gérer les emprunts 
library.borrowDocument(document.title, true);
