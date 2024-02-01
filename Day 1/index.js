// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.

const fs = require("fs").promises;

async function readFileContent(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log("File Content:");
    console.log(content);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

// Test Cases
readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");
