import axios from "axios";

// this page handles making api calls from the front end and saving failed calls to be made at a later time

let db

// this opens indexedDB for the DB named pendingTransactions
const request = window.indexedDB.open("pendingTransactions", 1)

// if there is an error when opening "pendingTransactions DB then the console.log will happen"
request.onerror = (e) => console.log("offline transactions unavailable")

// if the DB is opened successfully then assign that open connection to our global variable
// then check if there is any transactions that are still pending
request.onsuccess = (e) => {
  console.log("opened db successfully")
  db = request.result
  checkPendingTransactions()

}

//this should never trigger but it is here if the DB needs to be changed
request.onupgradeneeded = (e) => {
  db = request.result

  db.createObjectStore("pendingTransactions", { autoIncrement: true})
}

// and object containing functions to be exported through out the app
const API = {
  
  saveTransaction: function(trans) {

    console.log(trans)
    const transaction = db.transaction(["pendingTransactions"], "readwrite")

    transaction.oncomplete = (e) => {
      console.log("transaction save completed")
    }

    const objStore = transaction.objectStore("pendingTransactions")
    
    objStore.add(trans)
  },

  userLookUp: function(id) {
    return axios.get("/api/user/"+id)
  },

  newUserCreate: function(id) {
    return axios.post("/api/user", {
      _id: id,
    })
  },

  addNewChip: function(payload) {
    return axios.post("/api/chip/", {
      id: payload.id,
      chip: payload.chip
    })
  },

  takeMedDose: function(payload) {
    return axios.post("/api/meds/dose", {
      id: payload.id,
      medName: payload.medName,
      dose: payload.dose
    })
  },

  removeChip: function(payload) {
    return axios.delete("api/chip/", {
      data: {
        id: payload.id,
        chip: payload.chip

      }
    })
  },
  
  // Saves a blood sugar to the database
  saveOrder: function(payload) {
    return axios.post("/api/order/", payload);
  }
};

export default API



function checkPendingTransactions() {
  console.log("checking for unsent transactions")

  // request to make a transaction from the DB
  // then create a DB from the DB
  const transaction = db.transaction(["pendingTransactions"], "readwrite")
  const objStore = transaction.objectStore("pendingTransactions")

  // get everything from the DB
  const pendingTransactionsArr = objStore.getAll()

  // if we succeed in getting data then check if there is a result
  // if result then execute the transactions and empty the DB
  pendingTransactionsArr.onsuccess = () => {
    console.log(pendingTransactionsArr.result)
    if(pendingTransactionsArr.result) {
      pendingTransactionsArr.result.forEach(trans => {
        console.log(trans) 
        API[trans.apiName](trans.payload)
      })

      objStore.clear()
    }
  }

}

// if the device is reconnected to the internet then check if there are any pending transactions
window.addEventListener('online', checkPendingTransactions)




