export const toBrl = (numb=0)=>{
    let number = numb.toString(); 
    let size = number.length - 2
    let str = number.slice(0, size);
    let str2 = number.slice(size);
    str2 = '.' + str2;
    let finish = str + str2
    let last = parseFloat(finish);
    return last.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}