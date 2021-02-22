app.controller('InmuebleCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    // Se recibe el id del proyecto enviado por la URL
    $scope.proyecto = $routeParams.proyecto;
    // Se inicializa el array de torres
    $scope.torres = [];
    // Se realiza la petición a la API para la consulta de las torres del proyecto
    $http({
            method: 'GET',
            url: `http://apicrm.constructoracamu.com/api/proyectos/${$scope.proyecto}/torres`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(function(response) {
            $scope.torres = response.data;
            //console.log($scope.torres);
        }, function(err) {

        });

    //Función que permite consultar los pisos de la torre seleccionada
    $scope.consultarPisosTorre = function() {
        //console.log($scope.torreSeleccionada);
        // se realiza la peticion a la API para la consulta de los pisos de la torre
        $http({
                method: 'GET',
                url: `http://apicrm.constructoracamu.com/api/torres/${$scope.torreSeleccionada}/inmuebles/pisos`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
            .then(function(response) {

                $scope.pisos = [];
                let numeroPisos = response['data']['cantidadPisos'];
                for (var i = 1; i < numeroPisos + 1; i++) {
                    $scope.pisos.push(i);
                }

            }, function(err) {

            });
    };
    // Función que permite consultar los inmuebles de acuerdo a la torre y el piso seleccionado
    $scope.consultarInmueblesPisos = function() {

        $scope.inmuebles = [];

        $http({
                method: 'GET',
                url: `http://apicrm.constructoracamu.com/api/torres/${$scope.torreSeleccionada}/inmuebles/piso/${$scope.pisoSeleccionado}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
            .then(function(response) {

                $scope.inmuebles = response['data'];

            }, function(err) {

            });

    };

}]);