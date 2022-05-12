$(document).ready(function(){
  //rama gh-pages creada
  $('#formHeroe').submit(function(event){
    event.preventDefault();
    console.log('funciona submit');
    $('#mensajeHeroe').text('cargando ...');
    let idHeroe = $('#txtSuperheroe').val();

    $.ajax({
      type:"GET",
      url:`https://superheroapi.com/api/4905856019427443/${idHeroe}`,
      success: function(data){
            $('#mensajeHeroe').text('SuperHeroe Encontrado');
            console.log(data);
            /*
            $('#nombrePokemon').text(data.name);
            $('#pesoPokemon').text(`peso: ${data.weight} kg`);
            $('#imagenPokemon').attr("src", `${data.sprites.front_default}`);

            var chart = new CanvasJS.Chart("chartContainer",
                          {
                              title:{
                                text: 'Stats Base',
                              },
                              axisX: {
                                    title: 'Stats',
                                    titleFontSize: 12,
                              },
                              axisY: {
                                    title: 'Value',
                                    titleFontSize: 12,
                              },
                              data: [//array of dataSeries
                                { //dataSeries object

                                 type: "column",
                                 dataPoints: [
                                   { label: `${data['stats'][5]['stat']['name'] }` , y: data['stats'][5]['base_stat'] },
                                   { label: `${data['stats'][4]['stat']['name'] }` , y: data['stats'][4]['base_stat'] },
                                   { label: `${data['stats'][3]['stat']['name'] }` , y: data['stats'][3]['base_stat'] },
                                   { label: `${data['stats'][2]['stat']['name'] }` , y: data['stats'][2]['base_stat'] },
                                   { label: `${data['stats'][1]['stat']['name'] }` , y: data['stats'][1]['base_stat'] },
                                   { label: `${data['stats'][0]['stat']['name'] }` , y: data['stats'][0]['base_stat'] },
                                 ]
                               }
                               ]
                             });
                            chart.render();

*/

      },
      error: function(data){
        $('#mensajeHeroe').text(`API NO ENCOTRADA: ${data}`);
      },
      dataType: 'json',
    }); // fin ajax




  });//Fin submit



});//fin ready
