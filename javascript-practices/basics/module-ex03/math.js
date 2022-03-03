/**
 * exports 뒤에 이름을 사용해서 export 한다(named export)
 * 
 */

exports.PI = 3.14;    PI: 3.14,
    // sum: function(){
    //     var sum = 0;
    //     Array.from(arguments).forEach(function(e){
    //         sum += e;
    //     })

    //     return sum;
    // },
exports.max = function() {
        var max = Number.MIN_SAFE_INTEGER;   //MIN_SAFE 가장 작은값을 의미
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max;
    };


exports.min =  function() {
        var min = Number.MAX_SAFE_INTEGER;   //MIN_SAFE 가장 작은값을 의미
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });

        return min;
    }

}