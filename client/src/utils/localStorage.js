export default {

    setStores: function(storeArr) {
        localStorage.setItem("storeArr", JSON.stringify(storeArr))
    },

    getStoresArr: function() {
        return JSON.parse(localStorage.getItem("storeArr"))
    },

    setChipArr: function(chipArr) {
        localStorage.setItem("chipArr", JSON.stringify(chipArr))
    },
    
    getChipArr: function() {
        return JSON.parse(localStorage.getItem("chipArr"))
    },

    setOrderArr: function(orderArr) {
        localStorage.setItem("orderArr", JSON.stringify(orderArr))
    },

    getOrderArr: function() {
        console.log("getting the array for storage")
        try{
            return JSON.parse(localStorage.getItem("orderArr"))
        }catch(error){
            console.log("unable to retrieve local storage")
            console.log(error)
            console.log(localStorage.getItem("orderArr"))
            return [{
                date: new Date("Sat Aug 28 2021 00:00:00 GMT-0700 (Pacific Daylight Time)")
            }]
        }
        
    }
}