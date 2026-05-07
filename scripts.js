
const convertButton = document.querySelector(".convert-button")
  const currencySelecto = document.querySelector (".currency-selecto")
  

function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value;
     const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em real
     const currencyValueConverted = document.querySelector('.currency-value') // valor convertido para outras moedas
      const currencyValueConvertTop = document.querySelector('.currency-value-convert-top')

 
   const dolartoday =4.99
       const eurotoday =6.2
       const libratoday = 7.3
       const bitcointoday = 0.0000047
      
  

         if(currencySelecto.value == "dolar"){currencyValueConverted.innerHTML =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
        .format(inputCurrencyValue/ dolartoday )
     }
     if(currencySelecto.value == "euro"){currencyValueConverted.innerHTML =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
        .format(inputCurrencyValue/ eurotoday )
    }
    if(currencySelecto.value == "libra"){currencyValueConverted.innerHTML =  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
        .format(inputCurrencyValue/ libratoday )
    }
     if(currencySelecto.value == "bitcoin"){currencyValueConverted.innerHTML =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' })
        .format(inputCurrencyValue/ bitcointoday )
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-Br",{ style: "currency",currency:"BRL"}).format(inputCurrencyValue)
    currencyValueConvretTop.innerHTML =new Intl.NumberFormat ("pt-Br",{ style: "currency",currency:"BRL"}).format(inputCurrencyValue)
    
    

   
}
 

function changeCurrency(){
     const currencyName = document.getElementById("currency-nome") ;
     const currencyImge = document.querySelector(".currency-img");
      
          if(currencySelecto.value == "dolar"){
        currencyName.innerHTML = "Dólar USA"
      currencyImge.src="./assets/dolar.png"
 }
      
    if(currencySelecto.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImge.src="./assets/euro.png"
}
    
          if(currencySelecto.value == "libra"){
        currencyName.innerHTML = "Libra GBP"
      currencyImge.src="./assets/libra.png"
          }


          if(currencySelecto.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
      currencyImge.src="./assets/bitcon.png"
          }

converterValues()
    }


    













currencySelecto.addEventListener("change" , changeCurrency)
 convertButton.addEventListener ("click",convertValues)



