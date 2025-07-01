/**
 * @fileoverview Demonstrating the use of a temporary data file.
 */
class TempData {
    private filePath: string;

    constructor(id?: string) {
        this.filePath = `${id || new Date().toISOString()}.txt`;
    }

    write(data: string) {
        fs.writeFileSync(this.filePath, data);
    }

    clear() {
        fs.unlinkSync(this.filePath);
    }
}

function writeTempData() {
    const temp = new TempData();
    temp.write("This is great!");
    temp.clear();
}

writeTempData();
let fs;