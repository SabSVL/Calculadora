// NUMEROS
var conta = []
var contP1 = 0
var contP2 = 0
var cP = 0
var contPonto =0
input = document.getElementById('input').value
function um(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*1'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '1'
    conta.push(input[input.length-1]) 
    }
    
}
function dois(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*2'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '2'
    conta.push(input[input.length-1]) 
    }
      
    
}
function tres(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*3'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '3'
    conta.push(input[input.length-1]) 
    }
       
}
function quatro(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*4'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '4'
    conta.push(input[input.length-1]) 
    }
      
}
function cinco(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*5'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '5'
    conta.push(input[input.length-1]) 
    }
      
}
function seis(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*6'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '6'
    conta.push(input[input.length-1]) 
    }
      
}
function sete(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*7'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '7'
    conta.push(input[input.length-1]) 
    }
      
}
function oito(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*8'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '8'
    conta.push(input[input.length-1]) 
    }
      
}
function nove(){
    if(input[input.length-1] == ')'){
        
    input = document.getElementById('input').value += '*9'
    conta.push(input[input.length-1]) 
    }  
    else{
    input = document.getElementById('input').value += '9'
    conta.push(input[input.length-1]) 
    }
      
}
function zero(){

    if(input[input.length-1]=='.'){
        cP = 1
    }else if(input[input.length-1]!=='0'){
    input = document.getElementById('input').value += '0'
    conta.push(input[input.length-1]) 
     cP =0
    }else if(input[input.length-1] == ')'){
    input = document.getElementById('input').value += '*0'
    conta.push(input[input.length-1]) 
    }
     if(cP==1 || input[input.length-2] >=0 && input[input.length-2] <=9){
        if(cP==0){
            conta.pop()
            conta.push('0')
            input = document.getElementById('input').value = conta.join('')
            conta.push(input[input.length-1]) 
        }else{
            input = document.getElementById('input').value += '0'
            conta.push(input[input.length-1]) 
        }
    }
}

// LIMPAR, IGUAL E PONTO
function limpar(){
    input = document.getElementById('input').value = ''
    conta = []
    contP2 = 0   
    contP1 = 0   
    contPonto =0

}
function igual(){
    if(contP1 != contP2){
        alert('Feche todos os parentenses!')
    }
    if(input[input.length-1] >=0 && input[input.length-1] <=9 || input[input.length-1] ==')'){
       
    input = document.getElementById('input').value = eval(input)
    } else{
        alert('Coloque um numero!')
    }
    
}

function ponto(){
    if(input[input.length-1] >=0 && input[input.length-1] <=9 && contPonto == 0){
        contPonto =1
        input = document.getElementById('input').value += '.'
        conta.push(input)
    }
    
}
//SINAIS
function mais(){
    contPonto =0
    input = document.getElementById('input').value
    if( input[input.length-1] >=0 && input[input.length-1] <=9 || input[input.length-1] =='(' || input[input.length-1] ==')' ){
    input = document.getElementById('input').value += '+'
    conta.push(input)   
    }
    else if(input[0] !=='-' && input.length>0){
        if(input[input.length-1]!='+' ||input[input.length-2]!='+'){
        conta.pop()
        conta.push('+')
        input = document.getElementById('input').value = conta.join('')
    }
}
}

function menos(){
    contPonto =0
    if( input[input.length-1] >=0 && input[input.length-1] <=9 || input[input.length-1] =='(' || input[input.length-1] ==')'){
    input = document.getElementById('input').value += '-'
    conta.push(input)   
    }
    else {
        if(input[input.length-1]!='-' ||input[input.length-2]!='-'){
        conta.pop()
        conta.push('-')
        input = document.getElementById('input').value = conta.join('')
    }
}
    
}

function divisao(){
    contPonto =0
    input = document.getElementById('input').value
    if( input[input.length-1] >=0 && input[input.length-1] <=9  || input[input.length-1] =='(' || input[input.length-1] ==')' ){
    input = document.getElementById('input').value += '/'
    conta.push(input)   
   
    }
    else if(input[0] !=='-' && input.length>0) {
        if(input[input.length-1]!='/' ||input[input.length-2]!='/'){

        conta.pop()
        conta.push('/')
        input = document.getElementById('input').value = conta.join('')
    }
}
    
}

function multi(){
    contPonto =0
    input = document.getElementById('input').value
    if( input[input.length-1] >=0 && input[input.length-1] <=9 && input.length!=0|| input[input.length-1] =='(' || input[input.length-1] ==')' ){
    input = document.getElementById('input').value += '*'
    conta.push(input)   
    }
    else if(input[0] !=='-' && input.length>0){
        if(input[input.length-1]!='*'|| input[input.length-2]!='*'){
        conta.pop()
        conta.push('*')
        input = document.getElementById('input').value = conta.join('')
    }
}
}

//PARENTESES
function paren1(){
    
    contPonto =0
        if(input[input.length-1] >=0 && input[input.length-1] <=9){
            
        input = document.getElementById('input').value += '*('
        conta.push(input[input.length-1])
        contP1++
        } else {
            input = document.getElementById('input').value += '('
            conta.push(input[input.length-1])
            contP1++
        }
            
}
function paren2(){
    
    contPonto =0
   if(input[input.length-1] !== '(' && contP2 != contP1 && input[input.length-1] >=0 && input[input.length-1] <=9){
        contP2++   
        input = document.getElementById('input').value += ')'
        conta.push(input[input.length-1])  
    }
}





