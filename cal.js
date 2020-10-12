var indi_ = document.getElementById("indicator");
    
    var operator = ["+", "-", "*", "/"];


    function number(num) {
      
        indi_.innerHTML += num;

        if(indi_.innerText.length >= 3) {
            
          try{
        if (operator.indexOf(indi_.innerText.charAt(1)) != -1) {
            cal();
        }
          }catch(e) {
              alert(e);
          }  
         
    }
  
         

        }
    
    function erase() {
        indi_.innerHTML = indi_.innerHTML.substr(0,indi_.innerHTML.length-1);
    }

    function cal() {
        try{
            
        var o = indi_.innerText.charAt(1);
        var a = indi_.innerText.charAt(0);
        var b = indi_.innerText.charAt(2);

        alert(a + ' ' + b);
        
        switch(o) {
            case '+':
                indi_.innerHTML = `${Number(a) + Number(b)}`;
                break;
            case '-':
                indi_.innerHTML = `${Number(a) - Number(b)}`;
                break;
            case '*':
                indi_.innerHTML = `${Number(a) * Number(b)}`;
                break;
            case '/':
                indi_.innerHTML = `${Number(a) / Number(b)}`;
                break;
        }

        }catch (e) {
            alert(e);
        }
    }

    
