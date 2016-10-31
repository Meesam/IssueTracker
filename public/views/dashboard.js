issueTrackerApp.registerCtrl('dashboardcontroller',
 function dashboardcontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
     $scope.Name="Meesam";
     (function() {
         var canvas = this.__canvas = new fabric.Canvas('c', { selection: false });
         var context = canvas.getContext('2d');
         context.font='14px FontAwesome';
         function makeCircle(left ,top) {
             var c = new fabric.Circle({
                 left: left,
                 top: top,
                 strokeWidth: 1,
                 radius: 12,
                 fill: '#fff',
                 stroke: '#666',
                 fillText:'\uf000',
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

         context.fillText("\uf000", 10, 20);

         var line, isDown;

         canvas.on('mouse:down', function(o){
             if (o.target) {
                 isDown = true;
                 var pointer = canvas.getPointer(o.e);
                 var points = [pointer.x, pointer.y, pointer.x, pointer.y];
                 line = new fabric.Line(points, {
                     strokeWidth: 5,
                     fill: 'red',
                     stroke: 'red',
                     originX: 'center',
                     originY: 'center'
                 });
                 canvas.add(line);
             }
         });

         canvas.on('mouse:move', function(o){
             if (!isDown) return;
             var pointer = canvas.getPointer(o.e);
             line.set({ x2: pointer.x, y2: pointer.y });
             canvas.renderAll();
         });

         canvas.on('mouse:up', function(o){
             if(o.target) {
                 isDown = false;
             }
             else{
                 canvas.remove(line);
             }
         });
     })();
 });