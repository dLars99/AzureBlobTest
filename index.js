// const { BlobServiceClient } = require("@azure/storage-blob");
// const csv = require('@fast-csv/parse');

// async function queryTest(blob)
// {
//     const query = "SELECT * FROM BlobStorage WHERE _3 = 'Hemingway, Ernest, 1899-1961'";
//     await dumpQueryCsv(blob, query, false);
// }

// async function dumpQueryCsv(blob, query, headers)
// {
//     var response = await blob.query(query, {
//         inputTextConfiguration: {
//             kind: "csv",
//             recordSeparator: '\n',
//             hasHeaders: headers
//         },
//         outputTextConfiguration: {
//             kind: "csv",
//             recordSeparator: '\n',
//             hasHeaders: true
//         },
//         onProgress: (progress) => console.log(`Data read: ${progress.loadedBytes}`),
//         onError: (err) => console.error(`Error: ${err.position}:${err.name}:${err.description}`)});
//     return new Promise(
//         function (resolve, reject) {
//             csv.parseStream(response.readableStreamBody)
//                 .on('data', row => console.log(row))
//                 .on('error', error => {
//                     console.error(error);
//                     reject(error);
//                 })
//                 .on('end', rowCount => resolve());
//     });
// }