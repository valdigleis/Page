/*
    =====================================================================
    Arquivo base contendo as funções Javascript
    Autor: Valdigleis (valdigleis@gmail.com)
    Versão: 1.0
    =====================================================================

    MIT License

    Copyright (c) 2021 Valdigleis

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */

// Constroi a data da última modificação do arquivo base da página
function buildLastModificationDate(date){
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getYear();
    return (d<10?"0"+d:d) + "/" + (m<10?"0"+m:m)  + "/" +  (2000+y-100);
}

// Recupera a data da última modificação da página
function getLastModificationDate(){
    var lmd = document.lastModified;
    var s = "The answer is 42!";
    var d1;
    if(0 != (d1=Date.parse(lmd))){
        s = "" + buildLastModificationDate(new Date(d1));
    }
    return s;
}

// Recupera o ano do Copyright da última modificação da página
function getLastModificationDateCopyright(){
    return "Copyright © " + new Date().getFullYear()  + " - Valdigleis S. Costa";
}