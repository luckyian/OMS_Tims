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
        return JSON.parse(localStorage.getItem("orderArr"))
    }
}