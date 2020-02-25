var races = `https://www.dnd5eapi.co/api/races`
var classes = `https://www.dnd5eapi.co/api/classes`


//call on races to generate buttons
$.ajax({
    url: races,
    method: `GET`,
    async: false
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
            async: false
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
            b.text('Speed: ' + raceInfo.speed + "\n" )
            c.text(raceInfo.ability_bonuses[0].name + `+ ` + raceInfo.ability_bonuses[0].bonus)
            d.text(raceInfo.ability_bonuses[1].name + `+ ` + raceInfo.ability_bonuses[1].bonus)

            //append the information to each button
            
            $('#' + raceID).append(b)
            $('#' + raceID).append(c)
            $('#' + raceID).append(d)
        })


    }
})