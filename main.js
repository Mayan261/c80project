function getParagraph1()
{
    var inputs = [];

    for(var i = 1 ; i <= 6 ; i++)
        {
            inputs.push(document.getElementById("para1_input_box_1").value);
            inputs.push(document.getElementById("para1_input_box_2").value);
            inputs.push(document.getElementById("para1_input_box_3").value);
            inputs.push(document.getElementById("para1_input_box_4").value);
            inputs.push(document.getElementById("para1_input_box_5").value);
            inputs.push(document.getElementById("para1_input_box_6").value);
        }
            inputs.join(". ");
            document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2()
{
    var inputs = [];

    for(var k = 1 ; k <= 6 ; k++)
        {
            inputs.push(document.getElementById("para2_input_box_1").value);
            inputs.push(document.getElementById("para2_input_box_2").value);
            inputs.push(document.getElementById("para2_input_box_3").value);
            inputs.push(document.getElementById("para2_input_box_4").value);
            inputs.push(document.getElementById("para2_input_box_5").value);
            inputs.push(document.getElementById("para2_input_box_6").value);
        }
        inputs.join(". ");
            document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
}