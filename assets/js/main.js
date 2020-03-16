var races = `https://www.dnd5eapi.co/api/races`
var classes = `https://www.dnd5eapi.co/api/classes`


//call on races to generate buttons
$.ajax({
    url: races,
    method: `GET`,

}).then(function (raceResponse) {
    //dynamically generate a button for each race
    for (var i = 0; i < raceResponse.results.length; i++) {

        var raceResult = raceResponse.results[i];

        var a = $(`<h5>`)
        
        //add a class to each button
        a.addClass('m-1 race ')
        
        //add attributes
        a.attr(`id`, raceResult.index)
        
        //give the button some text
        a.text(raceResult.name)
        
        
        //show the button
        $(`#race${i}`).append(a)
        

        

        $.ajax({
            url: races + `/` + raceResult.index,
            method: `GET`,

        }).then(function (raceInfo) {
            
            //create button

            var raceID = raceInfo.index
            
            console.log(raceInfo)
            console.log(raceID)

    
            
            // add info to button on hover
            var b = $(`<p>`)
            var c = $(`<p>`)
            var d = $(`<p>`)
            var e = $(`<p>`)
            var f = $(`<p>`)
            var g = $(`<p>`)
            var h = $(`<p>`)

            
            //add a class to show div
            b.addClass(`information`)
            c.addClass(`information`)
            d.addClass(`information`)
            d.addClass(`information`)
            e.addClass(`information`)
            f.addClass(`information`)
            g.addClass(`information`)
            h.addClass(`information`)
            //add data attribute
            b.attr(`info`)
            c.attr(`info`)
            d.attr(`info`)
            e.attr(`info`)
            f.attr(`info`)
            g.attr(`info`)
            h.attr(`info`)


            //give the information some content
            b.text('Speed: ' + raceInfo.speed + "\n")

            

            if (raceID == `dragonborn` || raceID == `dwarf` || raceID == `elf` || raceID == `gnome` || raceID == `half-elf` || raceID == `half-orc` || raceID == `halfling` || raceID == `human` || raceID == `tiefling`) {

                c.text(raceInfo.ability_bonuses[0].name + `+ ` + raceInfo.ability_bonuses[0].bonus)



            }

            if (raceID == `dragonborn` || raceID == `half-orc` || raceID == `human` || raceID == `tiefling`) {

                d.text(raceInfo.ability_bonuses[1].name + `+ ` + raceInfo.ability_bonuses[1].bonus)
            }

            if (raceID == `human`) {

                e.text(raceInfo.ability_bonuses[2].name + `+ ` + raceInfo.ability_bonuses[2].bonus)
                f.text(raceInfo.ability_bonuses[3].name + `+ ` + raceInfo.ability_bonuses[3].bonus)
                g.text(raceInfo.ability_bonuses[4].name + `+ ` + raceInfo.ability_bonuses[4].bonus)
                h.text(raceInfo.ability_bonuses[5].name + `+ ` + raceInfo.ability_bonuses[5].bonus)

            }



            //     //append the information to each button
            $('#' + raceID).append(b)
            $('#' + raceID).append(c)
            $('#' + raceID).append(d)
            $('#' + raceID).append(e)
            $('#' + raceID).append(f)
            $('#' + raceID).append(g)
            $('#' + raceID).append(h)
            
            console.log(`#description5`)
            var description = $(`<p>`)
            description.attr('id', `${raceID}-description`)
            description.text(raceInfo.alignment)
            $(`#${raceID}-description`).append(description)



        })


    }
})

