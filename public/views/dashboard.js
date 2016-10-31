issueTrackerApp.registerCtrl('dashboardcontroller',
 function dashboardcontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
     $scope.Name="Meesam";
     (function() {
         var canvas = this.__canvas = new fabric.Canvas('c', { selection: false });



         function makeCircle(left ,top) {
             var c = new fabric.Circle({
                 left: left,
                 top: top,
                 strokeWidth: 5,
                 radius: 12,
                 fill: '#fff',
                 stroke: '#666',
                 selectable:false
             });
             c.hasControls = c.hasBorders = false;
             return c;
         }


         canvas.add(
             makeCircle(10,20),
             makeCircle(10,240),
             makeCircle(170,80),
             makeCircle(170,190),
             makeCircle(330,140)
         );

         var line, isDown;

         canvas.on('mouse:down', function(o){
             isDown = true;
             var pointer = canvas.getPointer(o.e);
             var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
             line = new fabric.Line(points, {
                 strokeWidth: 5,
                 fill: 'red',
                 stroke: 'red',
                 originX: 'center',
                 originY: 'center'
             });
             canvas.add(line);
         });

         canvas.on('mouse:move', function(o){
             if (!isDown) return;
             var pointer = canvas.getPointer(o.e);
             line.set({ x2: pointer.x, y2: pointer.y });
             canvas.renderAll();
         });

         canvas.on('mouse:up', function(o){
             isDown = false;
         });
     })();
 });