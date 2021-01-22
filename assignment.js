
// convert kilemeter to meter
function kilometerToMeter (kilometer){
    var kilometer = Math.abs (kilometer);
        var meter = kilometer * 1000;
        
        return meter;
}
    
    var result = kilometerToMeter(-100);
 
    console.log(result)

// first problem is solve  

// budgetCalculator is star
        function budgetCalculator (watch,phone,laptop) {
            var watch = Math.abs (watch);
            var phone= Math.abs (phone);
            var laptop = Math.abs (laptop);
        var totalWatchCost = watch * 50;
        var totalPhoneCost = phone * 100;
        var totalLaptopCost = laptop * 500;
        var totalCost = totalWatchCost + totalPhoneCost + totalLaptopCost;
        return totalCost;
    }
    var result = budgetCalculator (-10,-15,7);
    console.log(result) 
// budgetCalculator is end

// Calculate the total hotelCost is start here
function hotelCost (day){
        cost = 0;
        if (day<=10){
            cost = day *100;
        } else if (day<=20){
            var firstTenDay = 10 * 100;
            var remaining = day - 10;
            var secondTenDay = remaining * 80;
            cost = firstTenDay +  secondTenDay; 
        } else{
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var remaining = day - 20;
            var thirdTenDay = remaining * 50;
            cost = firstTenDay +  secondTenDay + thirdTenDay; 
        }
        return cost;
        }
    var result = hotelCost(30);
    console.log(result)
// Calculate the total hotelCost is end here

// Find out largest word in the array is start here
function megaFriend(friends){
        var longestWord = friends[0];
         for(var i = 0; i < friends.length; i++){
        var element = friends[i];
         if(element > longestWord){
        longestWord =element;
            
                
            }
            }
            return element;
        }
        var friends = ['sakib', 'sadnanhafiz', 'habib', 'mustafa', 'brake hosan obama'];
        var result = megaFriend(friends);
        console.log(result);

// Find out largest word in the array is end here