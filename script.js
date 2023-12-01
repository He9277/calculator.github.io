function aptdisplay (value)
{
   cal = document.getElementById('display-area').value += value;

}

function clean()
{
    document.getElementById('display-area').value="";
}

function calculate()
{
    expri= document.getElementById('display-area').value;

     int =eval(expri)
     document.getElementById('display-area').value = int;
}
