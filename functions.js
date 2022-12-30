export const functions = { 

    getText: function getSelectedText(){
        const selection = window.getSelection().toString();
        console.log(selection);
    },
}

