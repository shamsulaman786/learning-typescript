interface Contact {
    id: number;
    name: string;
    age: number;
}

interface Query<TProp> {
    sort?: 'asc' | 'desc';
    matches(value: TProp): boolean;
}

type ContactQuery = {
    [TProp in keyof Contact]?: Query<Contact[TProp]>
}

function query<T>(
    items: T[],
    query: {
        [TProp in keyof T]?:(val: T[TProp])=>boolean
    } // <--- replace this!
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })
