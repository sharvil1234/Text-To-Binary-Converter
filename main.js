const input_el = document.querySelector('.input-text');
const output_el = document.querySelector('.output-binary');

input_el.addEventListener('input', (event) => {
    let input_text = event.target.value;
    let output_arr = [];
    for (var i = 0; i < input_text.length; i++) {
        output_arr.push(input_text.charCodeAt(i).toString(2))
    }

    output_el.innerHTML = output_arr.join(" ");
});

function change()
{
    document.getElementById("input").style.boxShadow = "1px 1px 10px white"
}

function next()
{
    window.location = "index(1).html";   
}