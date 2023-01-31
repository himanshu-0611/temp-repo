const http = require("http");

// //req: incoming request, res: what we are sending back
// // const server = http.createServer((req, res) => {
// //     res.write('Welcome to our home page')
// //     res.end()
// // })

// // server.listen(5000)

// //web server keep on listening the request, as we want our server to always be up
// //so the terminal will be blank if we run this code, check 5000 port on browser

// // ================================================================================

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
        <h1>Oops</h1>
        <p>Cant seem to find the page</p>
        <a href="/">Back home</a>
        `);
  }
  //   res.write("Welcome to our home page");
  //   res.end();
});

server.listen(5000);

// //go on browser and refresh, and check terminal

// const http = require("http");

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("Here is our short history");
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `);
//   }
// });

// server.listen(5000);
