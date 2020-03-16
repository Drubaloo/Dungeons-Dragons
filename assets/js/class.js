var races = `https://www.dnd5eapi.co/api/races`
var classes = `https://www.dnd5eapi.co/api/classes`


//call on classs to generate buttons
$.ajax({
    url: classes,
    method: `GET`,

}).then(function (classResponse) {
    //dynamically generate a button for each class
    for (var i = 0; i < classResponse.results.length; i++) {

        var classResult = classResponse.results[i];

        var a = $(`<h5>`)
        
        //add a class to each button
        a.addClass('m-1 class ')
        
        //add attributes
        a.attr(`id`, classResult.index)
        
        //give the button some text
        a.text(classResult.name)
        
        
        //show the button
        $(`#class${i}`).append(a)
        

        

        $.ajax({
            url: classes + `/` + classResult.index,
            method: `GET`,

        }).then(function (classInfo) {
            
            //create button

            var classID = classInfo.index
            
            console.log(classInfo)
            console.log(classID)

    
            
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
            b.text('Speed: ' + classInfo.speed + "\n")

            

            if (classID == `dragonborn` || classID == `dwarf` || classID == `elf` || classID == `gnome` || classID == `half-elf` || classID == `half-orc` || classID == `halfling` || classID == `human` || classID == `tiefling`) {

                c.text(classInfo.ability_bonuses[0].name + `+ ` + classInfo.ability_bonuses[0].bonus)



            }

            if (classID == `dragonborn` || classID == `half-orc` || classID == `human` || classID == `tiefling`) {

                d.text(classInfo.ability_bonuses[1].name + `+ ` + classInfo.ability_bonuses[1].bonus)
            }

            if (classID == `human`) {

                e.text(classInfo.ability_bonuses[2].name + `+ ` + classInfo.ability_bonuses[2].bonus)
                f.text(classInfo.ability_bonuses[3].name + `+ ` + classInfo.ability_bonuses[3].bonus)
                g.text(classInfo.ability_bonuses[4].name + `+ ` + classInfo.ability_bonuses[4].bonus)
                h.text(classInfo.ability_bonuses[5].name + `+ ` + classInfo.ability_bonuses[5].bonus)

            }



            //     //append the information to each button
            $('#' + classID).append(b)
            $('#' + classID).append(c)
            $('#' + classID).append(d)
            $('#' + classID).append(e)
            $('#' + classID).append(f)
            $('#' + classID).append(g)
            $('#' + classID).append(h)
            
            console.log(`#description5`)
            var description = $(`<p>`)
            description.attr('id', `${classID}-description`)
            description.text(classInfo.alignment)
            $(`#${classID}-description`).append(description)



        })


    }
})

