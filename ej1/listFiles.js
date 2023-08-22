//TP01

const fs = require('fs');

var args = process.argv.slice(2);

//verifico que recibo solo un argumento
if (args.length != 1) {
    console.log("sintaxis correcta: node listfiles <path_to_directory>");
    process.exit(-1);
}


try {
    //leer el directorio
    fs.readdir(args.toString(), (err, files) => {
        if (err) {
            console.log(err);
            console.log("sintaxis correcta: node listfiles <path_to_directory>");
        }
        else {

            console.log("\nCurrent directory:");

            //leer el directorio actual

            files.forEach(file => {

                //diferenciar entre archivo o directorio
                if (fs.statSync(file).isFile()) {
                    console.log("File: " + file)
                } else if (fs.statSync(file).isDirectory()) {
                    console.log("Directory: " + file)
                }

            })
        }
    });
} catch (err) {
    console.log("sintaxis correcta: node listfiles <path_to_directory>");
    console.log(err)
}