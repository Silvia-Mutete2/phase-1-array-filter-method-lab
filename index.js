
function findMatching(drivers,value){
    return drivers.filter(function(driver){ 
        return driver.toLowerCase()=== value.toLowerCase()
     })
  }
  
function fuzzyMatch(drivers,value){
    return drivers.filter(function(driver){ 
        return driver.toLowerCase().indexOf(value.toLowerCase()) ===0 
    })
  }
  
function matchName(drivers,argument){
    return drivers.filter(function(driver){ 
        return driver.name === argument
     })
  }



