$(document).ready(function(){

  var laImagen = '';

  $('#imagenHeroe').on('error', function(){
    console.log('Error en la imagen');
      laImagen = 'assets/img/sh1.jpg';
      console.log(`Nueva Ruta Imagen: ${laImagen}`);
      $('#imagenHeroe').attr("src", laImagen );
  });


  //rama master actualizada
  $('#formHeroe').submit(function(event){
    event.preventDefault();
    console.log('funciona submit');
    $('#mensajeHeroe').text('cargando ...');

    $('#seccionDatos').attr('class', 'container d-block');

    let idHeroe = $('#txtSuperheroe').val();

    $.ajax({
      type:"GET",
      url:`https://superheroapi.com/api.php/4905856019427443/${idHeroe}`,
      success: function(data){
            $('#mensajeHeroe').text('SuperHeroe Encontrado');
            console.log(data);
            laImagen = data.image.url;

            console.log(`ruta imagen: ${laImagen}`);
            $('#imagenHeroe').attr("src", laImagen );

            let elNombre = data.name;
            // $('#nombreHeroe').attr("src", `Nombre: ${data.name}`);
            $('#nombreHeroe').text(`Nombre: ${elNombre}`);

            let lasConexiones = data['connections']['group-affiliation'];
            $('#conexionesHeroe').text(`Conexiones: ${lasConexiones}`);

            let publicado = data['biography']['publisher'];
            $('#publicadoHeroe').text(`Publicado por: ${publicado}`);

            let laOcupacion = data['work']['occupation'];
            $('#ocupacionHeroe').text(`Ocupacion: ${laOcupacion}`);

            let laInteligencia = data['powerstats']['intelligence']== 'null' ? 0 : parseInt(data['powerstats']['intelligence']);
            let laFuerza = data['powerstats']['strength'] == 'null' ? 0 : parseInt(data['powerstats']['strength']);
            let laVelocidad = data['powerstats']['speed'] == 'null' ? 0 : parseInt(data['powerstats']['speed']);



          var chart = new CanvasJS.Chart("chartContainer", {
          	animationEnabled: true,

          	title:{
          		text: `Estadisticas de poder para ${elNombre}`,
          	},
          	axisX:{
          		interval: 1
          	},
          	axisY2:{
          		interlacedColor: "rgba(1,77,101,.2)",
          		gridColor: "rgba(1,77,101,.1)",
          		title: "Estadisticas"
          	},
          	data: [{
          		type: "bar",
          		name: "companies",
          		axisYType: "secondary",
          		color: "#014D65",
          		dataPoints: [
                { y: laInteligencia, label: "Intelligence" },
                { y: laFuerza, label: "Strength" },
                { y: laVelocidad, label: "Speed" },
                //FALTA ACTUALIZAR LOS DEM??S PARAMETROS DE ACUERDO A LA RESPUESTA DEL API
                { y: 5.02, label: "Microsoft Edge" },
                { y: 4.07, label: "Safari" },
                { y: 1.22, label: "Opera" },
                { y: 0.44, label: "Others" }
          		]
          	}]
          });
          chart.render();


      },
      error: function(data){
        $('#mensajeHeroe').text(`API NO ENCOTRADA: ${data}`);
      },
      dataType: 'json',
    }); // fin ajax
  });//Fin submit
});//fin ready
