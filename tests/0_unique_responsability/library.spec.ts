import { Library } from "../../src/0_unique_responsability/library";

import { Document } from "@packages/document/Document";
import { Student } from "@packages/student/Student";

const DOCUMENTS = [
  {
    id: 1,
    title: "The TypeScript Handbook",
    author: "TypeScript Team",
    publicationYear: 2021,
    available: true,
  },
  {
    id: 1,
    title: "New The TypeScript Handbook",
    author: "New TypeScript Team",
    publicationYear: 2021,
    available: true,
  },
  // ... other documents
];

const STUDENTS = [
  { id: 1, firstName: "Alice", lastName: "Anderson", yearOfAdmission: 2019 },
  {
    id: 1,
    firstName: "New Alice FirstName",
    lastName: "New Anderson LastName",
    yearOfAdmission: 2020,
  },
  // ... other students
];

const NON_EXISTING_DATA = {
  title: "Non-existing Title",
};

const DOCUMENT_INDEX = 0;
const STUDENT_INDEX = 0;
const DOCUMENT_UPDATED_INDEX = 1;
const STUDENT_UPDATED_INDEX = 1;

const {
  id: documentId,
  title: documentTitle,
  author: documentAuthor,
  publicationYear: documentPublicationYear,
  available: documentAvailable,
} = DOCUMENTS[DOCUMENT_INDEX];

const {
  title: newDocumentTitle,
  author: newDocumentAuthor,
  publicationYear: newDocumentPublicationYear,
  available: newDocumentAvailable,
} = DOCUMENTS[DOCUMENT_UPDATED_INDEX];

const {
  firstName: studentFirstName,
  lastName: studentLastName,
  id: studentId,
  yearOfAdmission: studentYearOfAdmission,
} = STUDENTS[STUDENT_INDEX];

const {
  firstName: newStudentFirstName,
  lastName: newStudentLastName,
  id: newStudentId,
  yearOfAdmission: newStudentYearOfAdmission,
} = STUDENTS[STUDENT_UPDATED_INDEX];

describe("Library Class", () => {
  describe("Create a document", () => {
    it("should create a document with the provided properties", () => {
      const document = new Document(
        documentId,
        documentTitle,
        documentAuthor,
        documentPublicationYear,
        documentAvailable
      );
      expect(document.title).toBe(documentTitle);
      expect(document.author).toBe(documentAuthor);
      expect(document.publicationYear).toBe(documentPublicationYear);
      expect(document.available).toBe(documentAvailable);
    });
  });

  describe("Create a student", () => {
    it("should create a student with the provided properties", () => {
      const student = new Student(
        studentId,
        studentFirstName,
        studentLastName,
        studentYearOfAdmission
      );
      expect(student.firstName).toBe(studentFirstName);
      expect(student.lastName).toBe(studentLastName);
      expect(student.id).toBe(studentId);
      expect(student.yearOfAdmission).toBe(studentYearOfAdmission);
    });
  });

  describe("Library with Documents and Students", () => {
    let library: Library;
    let document: Document;
    let student: Student;
    beforeEach(() => {
      library = new Library();
      document = new Document(
        documentId,
        documentTitle,
        documentAuthor,
        documentPublicationYear,
        documentAvailable
      );
      student = new Student(
        studentId,
        studentFirstName,
        studentLastName,
        studentYearOfAdmission
      );
      library.createDocument(document);
      library.createStudent(student);
    });

    it("should add a document", () => {
      expect(library.readDocument()).toContain(document);
    });

    it("should throw an error if a document with the same title already exists", () => {
      expect(() => library.createDocument(document)).toThrow(
        "A document with this title already exists."
      );
    });

    it("should update a document", () => {
      const updatedDocument = new Document(
        documentId,
        newDocumentTitle,
        newDocumentAuthor,
        newDocumentPublicationYear,
        newDocumentAvailable
      );
      library.updateDocument(documentTitle, updatedDocument);
      expect(library.readDocument()).toContain(updatedDocument);
    });

    it("should throw an error if no document with the given title is found when updating", () => {
      expect(() =>
        library.updateDocument("Non-existing Title", document)
      ).toThrow("No document with this title was found.");
    });

    it("should remove a document", () => {
      library.deleteDocument(documentTitle);
      expect(library.readDocument()).not.toContain(document);
    });

    it("should throw an error if no document with the given title is found when deleting", () => {
      expect(() => library.deleteDocument(NON_EXISTING_DATA.title)).toThrow(
        "No document with this title was found."
      );
    });

    it("should change the availability of a document", () => {
      const borrowedDocument = library.borrowDocument(documentTitle, false);
      expect(borrowedDocument.available).toBe(false);
    });

    it("should throw an error if no document with the given title and availability is found when borrowing", () => {
      expect(() =>
        library.borrowDocument(NON_EXISTING_DATA.title, false)
      ).toThrow("No available document with this title was found.");
    });

    it("should return all documents if no filter is provided", () => {
      expect(library.readDocument().length).toBe(1);
    });

    it("should return documents that pass the filter function if one is provided", () => {
      const documents = library.readDocument(
        (doc) => doc.author === documentAuthor
      );
      expect(documents).toContain(document);
    });

    it("should add a student", () => {
      expect(library.readStudent()).toContain(student);
    });

    it("should throw an error if a student with the same ID already exists", () => {
      expect(() => library.createStudent(student)).toThrow(
        "A student with this ID already exists."
      );
    });

    it("should update a student", () => {
      const updatedStudent = new Student(
        studentId,
        newStudentFirstName,
        newStudentLastName,
        newStudentId
      );
      library.updateStudent(1, updatedStudent);
      expect(library.readStudent()).toContain(updatedStudent);
    });

    it("should throw an error if no student with the given ID is found when updating", () => {
      expect(() => library.updateStudent(2, student)).toThrow(
        "No student with this ID was found."
      );
    });

    it("should remove a student", () => {
      library.deleteStudent(1);
      expect(library.readStudent()).not.toContain(student);
    });

    it("should throw an error if no student with the given ID is found when deleting", () => {
      expect(() => library.deleteStudent(2)).toThrow(
        "No student with this ID was found."
      );
    });

    it("should return all students if no filter is provided", () => {
      expect(library.readStudent().length).toBe(1);
    });

    it("should return students that pass the filter function if one is provided", () => {
      const students = library.readStudent(
        (stu) => stu.firstName === studentFirstName
      );
      expect(students).toContain(student);
    });
  });
});
