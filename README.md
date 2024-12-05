# Unhandled Exception in Node.js HTTP Server

This repository demonstrates an example of an unhandled exception in a Node.js HTTP server and provides a solution to handle it gracefully.

## Bug

The `bug.js` file contains a Node.js HTTP server that throws an unhandled exception if the request URL is '/error'. This leads to the server crashing unexpectedly.

## Solution

The `bugSolution.js` file provides a solution by implementing proper error handling using the `domain` module or by using `try...catch` block. This prevents the server from crashing and allows for graceful error handling.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Access the server in your browser by navigating to `http://localhost:3000/error`.

You'll observe the server crashing due to an unhandled exception.

## How to fix the bug

1. Replace `bug.js` with `bugSolution.js`.
2. Run `node bugSolution.js`.
3. Access the server by navigating to `http://localhost:3000/error`.

You'll see an error message indicating that an error has occurred, but the server will remain running.