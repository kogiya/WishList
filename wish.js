angular.module('wishApp', [])
    .controller('WishListController', function($scope){
        //array of wish list item
        $scope.wishes = [];
        //take input wish
        $scope.newItem = '';
        //hide alert as default
        $("#alertAdd").hide();
        //when add buttun is clicked, the addItem is stored in wishes
        $scope.addItem = function(){
            if($scope.newItem!=""){
                $scope.wishes.push({
                    item: $scope.newItem,
                    done: false
                });
                $scope.newItem ='';
            }else{
                $("#alertAdd").show();
                $("#alertAdd").delay(4000).fadeOut('slow');
            }
        }

        $scope.deleteItem = function(index){
            var r = confirm("Are you sure you want to delete this item?")
            if(r==true){
                $scope.wishes.splice(index,1);
            }

        }
    });