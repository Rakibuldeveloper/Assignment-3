
const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('This is the Home Page');
    } else if (req.url === '/about') {
        res.write('This is the About Page');
    } else if (req.url === '/contact') {
        res.write('This is the Contact Page');
    } else if (req.url === '/file-write') {

        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.write('Failed to create file');
            } else {
                res.write('File create successfully');
            }
            // End the response after writing to the file
            res.end();
        });
        // Return here to avoid calling res.end() twice
        return;
    } else {
        res.write('file not created');
    }

    // End the response for all other routes
    res.end();
});


server.listen(5500, () => {
    console.log('Server is running');
});
