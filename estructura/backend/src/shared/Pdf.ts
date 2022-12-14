import pdf from 'html-pdf'

// npm install --save @types/html-pdf

class Pdf {

    crear( html: string , archivo : string  ) : Promise<any> {

        return new Promise( (resolve, reject) => {

            pdf.create(html).toFile( archivo , function(err,res) {
                if( err) { reject("Error al crear archivo pdf") }
                else { resolve("Archivo creado") }            
            });
    
        });

        /*
        pdf.create(html).toFile( archivo , function(err,res) {
            if( err) return console.log('Error');
            console.log(res);            
        });
        */

    }

}

export { Pdf }