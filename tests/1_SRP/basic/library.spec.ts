import { Library } from "../../../src/1_SRP/basic/library";
import { Document } from "@packages/document/Document";
import { Student } from "@packages/student/Student";
import type { DocumentInterface } from "@interfaces/document.interface";
import type { StudentInterface } from "@interfaces/student.interface";

// Play with data
const documents = [
  {
    id: 1,
    title: "The TypeScript Handbook",
    author: "TypeScript Team",
    publicationYear: 2021,
    available: true,
  },
  {
    id: 2,
    title: "New The TypeScript Handbook",
    author: "New TypeScript Team",
    publicationYear: 2021,
    available: true,
  },
];

const students = [
  { firstName: "Alice", lastName: "Anderson", id: 1, yearOfAdmission: 2019 },
  {
    firstName: "New Alice FirstName",
    lastName: "New Anderson LastName",
    id: 2,
    yearOfAdmission: 2020,
  },
];

// Define helper functions
const createDocument = (data: DocumentInterface) =>
  new Document(
    data.id,
    data.title,
    data.author,
    data.publicationYear,
    data.available
  );
const createStudent = (data: StudentInterface) =>
  new Student(data.id, data.firstName, data.lastName, data.yearOfAdmission);

// Run the tests
describe("Library Class", () => {
  let library: Library;
  let document: Document;
  let student: Student;

  beforeEach(() => {
    library = new Library();
    document = createDocument(documents[0]);
    student = createStudent(students[0]);
    library.createDocument(document);
    library.createStudent(student);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetModules();
  });

  describe("Document operations", () => {
    it("should add a document", () => {
      expect(library.readDocument()).toContainEqual(document);
    });

    it("should throw an error if a document with the same title already exists", () => {
      expect(() => library.createDocument(document)).toThrow(
        "A document with this title already exists."
      );
    });

    it("should update a document", () => {
      const updatedDocument = createDocument(documents[1]);
      library.updateDocument(document.title, updatedDocument);
      expect(library.readDocument()).toContainEqual(updatedDocument);
    });

    it("should throw an error if no document with the given title is found when updating", () => {
      expect(() =>
        library.updateDocument("Non-existing Title", document)
      ).toThrow("No document with this title was found.");
    });

    it("should remove a document", () => {
      library.deleteDocument(document.title);
      expect(library.readDocument()).not.toContainEqual(document);
    });

    it("should throw an error if no document with the given title is found when deleting", () => {
      expect(() => library.deleteDocument("Non-existing Title")).toThrow(
        "No document with this title was found."
      );
    });

    it("should change the availability of a document", () => {
      const borrowedDocument = library.borrowDocument(document.title, false);
      expect(borrowedDocument.available).toBe(false);
    });

    it("should throw an error if no document with the given title and availability is found when borrowing", () => {
      expect(() => library.borrowDocument("Non-existing Title", false)).toThrow(
        "No available document with this title was found."
      );
    });

    it("should return all documents if no filter is provided", () => {
      expect(library.readDocument().length).toBe(1);
    });

    it("should return documents that pass the filter function if one is provided", () => {
      const filteredDocuments = library.readDocument(
        (doc) => doc.author === document.author
      );
      expect(filteredDocuments).toContainEqual(document);
    });
  });

  describe("Student operations", () => {
    it("should add a student", () => {
      expect(library.readStudent()).toContainEqual(student);
    });

    it("should throw an error if a student with the same ID already exists", () => {
      expect(() => library.createStudent(student)).toThrow(
        "A student with this ID already exists."
      );
    });

    it("should update a student", () => {
      const updatedStudent = createStudent(students[1]);
      library.updateStudent(student.id, updatedStudent);
      expect(library.readStudent()).toContainEqual(updatedStudent);
    });

    it("should throw an error if no student with the given ID is found when updating", () => {
      expect(() => library.updateStudent(3, student)).toThrow(
        "No student with this ID was found."
      );
    });

    it("should remove a student", () => {
      library.deleteStudent(student.id);
      expect(library.readStudent()).not.toContainEqual(student);
    });

    it("should throw an error if no student with the given ID is found when deleting", () => {
      expect(() => library.deleteStudent(3)).toThrow(
        "No student with this ID was found."
      );
    });

    it("should return all students if no filter is provided", () => {
      expect(library.readStudent().length).toBe(1);
    });

    it("should return students that pass the filter function if one is provided", () => {
      const filteredStudents = library.readStudent(
        (stu) => stu.firstName === student.firstName
      );
      expect(filteredStudents).toContainEqual(student);
    });
  });
});
