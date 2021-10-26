import React, {useRef} from 'react'
import { Form } from 'react-bootstrap'
import stores from '../../reference/stores.json'
import chips from '../../reference/chips.json'
// import Local from '../../../utils/localStorage'
import Local from '../../utils/localStorage'
export default function ShowChipList() {


    const chipsRef = useRef()
    let allChips = chips

    return (
<div>
     {/* <script>
     let chipSet = []
    let highScores = [];
    
    chipSet = JSON.parse(localStorage.getItem("allChips")) || [];
    
    console.log(chipSet);
    
    let highScoresListEl = document.querySelector(".high-score-list");
    let chipSetList = document.querySelector(".chips-list");
    
    function cityList() {
    cityArr.forEach(function (city) {
      let tRow = $(`<button type="button" class="btn btn-primary city-btn" id="${city}">${city}</button>`);
      $(".listie").append(tRow);

    })

  };
  cityList();
      
  function renderChips() {
        allChips.forEach(
          
        )
      }

    function renderHighScores() {

    

      // Render a new li for each high score
      for (var i = 0; i < highScores.length; i++) {
        let scores = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScores[i].initials + "   " + highScores[i].score;


        highScoresListEl.appendChild(li);
      }
    };

    function init() {
      
      // Parsing the JSON string to an object
      let storedScores = JSON.parse(localStorage.getItem("highScores")) || [];

      // If scores were retrieved from localStorage, update the scores array to it
      if (storedScores !== null) {
        highScores = storedScores;
      }

      // Render todos to the DOM
      renderHighScores();
    };
    init(); */}
</div>
    )
}