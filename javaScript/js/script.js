window.addEventListener("load",function(){
    var span = document.getElementById("text");
    var boton = document.getElementById("boton");

    boton.addEventListener("click", function(){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var datos = JSON.parse(this.responseText);

                var plantilla=`
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Nota</th>
                                <th>Convocatoria</th>
                            </tr>
                        </thead>
                        <tbody>`;

                datos.forEach(e => {
                    plantilla +=`
                    <tr>
                        <td>${e.nombre}</td>
                        <td>${e.apellido}</td>
                        <td>${e.nota}</td>
                        <td>${e.convocatoria}</td>
                    </tr>
                    `;
                });
                            
                        
                plantilla +="</tbody></table>";
                
                span.innerHTML = plantilla;
            }
        }

        xhr.open("GET", "data/datos.json", true);
        xhr.send();
    });
});