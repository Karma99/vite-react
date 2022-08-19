
/* Generate Un-ordered List */
export function generateList(itemList) {  
    return (
        <ul>
            {itemList.map((item, index) => 
                <li key={'l-' + index.toString()}>{item}</li>
            )}
        </ul>  
    );
}

/* Upper Case First Alphabet */
export const ucFirst = ([ first, ...rest ], locale = navigator.language) => first.toLocaleUpperCase(locale) + rest.join('');

/* Get File Ext from File path */
export const getFileExt  = (fileName) => fileName.split('.').pop();

/* Get File Name from File path */
export const getFileName = (path) => {
    const fileName = path.split('\\').pop().split('/').pop();   
   
    return fileName.split('.')[0] +'.'+ getFileExt(fileName);
}
