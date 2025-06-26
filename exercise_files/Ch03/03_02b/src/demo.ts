type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact;

const field : ContactFields = "name";

function getValue<T, U extends keyof T>(source: T, fieldName: U): any {
    return source[fieldName];
}

console.log(getValue(primaryContact, field)); // Jamie Johnson
console.log(getValue({min:1,max:2}, "max")); // Jamie Johnson