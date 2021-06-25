export const toBrl = (numb=0)=>{
    let size = numb.toString().length - 2
    let str = numb.toString().slice(0, size);
    let str2 = numb.toString().slice(size);
    str2 = '.' + str2;
    let finish = str + str2
    let last = parseFloat(finish);
    return last.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}