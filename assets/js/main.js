var races = `https://www.dnd5eapi.co/api/races`
var classes = `https://www.dnd5eapi.co/api/classes`


//call on races to generate buttons
$.ajax({
    url: races,
    method: `GET`,
}).then(function (raceResponse) {
    //dynamically generate a button for each race
    for (var i = 0; i < raceResponse.results.length; i++) {

        var raceID = raceResponse.results[i].index
        var raceName = raceResponse.results[i].name
        //create button
        var a = $(`<button>`)

        //add a class to each button
        a.addClass('btn btn-primary btn-block m-1 race')
        //add data attr
        a.attr(`id`, raceResponse.results[i].index)
        //give the button some text
        a.text(raceResponse.results[i].name)
        //show the button
        $(`#buttons-view`).append(a)

        $.ajax({
            url: races + `/` + raceResponse.results[i].index,
            method: `GET`,
        }).then(function (raceInfo) {
            console.log(raceInfo)
            // add info to button on hover
            var b = $(`<p>`)
            var c = $(`<p>`)
            var d = $(`<p>`)
            //add a class to show div
            b.addClass(`information`)
            c.addClass(`information`)
            d.addClass(`information`)
            //add data attribute
            b.attr(`info`)
            c.attr(`info`)
            d.attr(`info`)
            //give the information some content
            b.text('Speed: ' + raceInfo.speed + "\n")
            for (var j = 0; j < raceInfo.ability_bonuses.length; j++) {
                c.text(raceInfo.ability_bonuses[j].name + `+ ` + raceInfo.ability_bonuses[j].bonus)
                d.text(raceInfo.ability_bonuses[j].name + `+ ` + raceInfo.ability_bonuses[j].bonus)

                //append the information to each button

                $('#' + raceID).append(b)
                $('#' + raceID).append(c)
                $('#' + raceID).append(d)
            }
        })


    }
})