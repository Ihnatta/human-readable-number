module.exports = function toReadable (number) {
    let result  = '';
    let strnumber = String(number);
    if (strnumber.length === 1) {   result = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] [number];
                               console.log(result);  return result;}
        if (strnumber.length === 2 && number < 20 ) { 
            let x = strnumber[1];
            result = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'][x];
            console.log(result);
            return result;}
                                        
        if (strnumber.length === 2 && number > 19 )  { 
                                        let x = strnumber[0];
                                        let y = strnumber[1];
                                        result = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety' ][x] + [ '',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'][y];
                                        console.log(result);
                                        return result;}
        if ( strnumber.length === 3 && strnumber[1] === '0')  {
            let x = strnumber[0];
            let y = strnumber[2];
            result = ['','one hundred','two hundred', 'three hundred','four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'][x] + ['', ' one',' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'][y];
            console.log(result);
            return result;}                              
         
        if ( strnumber.length === 3 && Number(strnumber.slice(1)) <= 19 && strnumber[1] !== '00')  {
                                                    let x = strnumber[0];
                                                    let y = strnumber[2];  
                                                    result = ['','one hundred','two hundred', 'three hundred','four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'][x] +  [' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'][y];
                                                    console.log(result);
                                                    return result;}
        if ( strnumber.length === 3 && Number(strnumber.slice(1)) > 19 && strnumber.slice(1) !== '00') {
            let x = strnumber[0];
            let z = strnumber[1];
            let y = strnumber[2];  
            result = ['','one hundred','two hundred', 'three hundred','four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'][x] + ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'][z] + ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'][y];
            
            return result;                                        
        }  
        if ( strnumber.length === 3  && strnumber.slice(1) === '00'){
            let x = strnumber[0];
            result =  ['','one hundred','two hundred', 'three hundred','four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'][x];
            console.log (result);
            return result;
        }
        
    
        
    }
     
       