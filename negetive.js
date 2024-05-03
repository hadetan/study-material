var arr = [1, 2, 3, -54, -3, 2, -45, 56, -36, 23, -2, 4, 5, 3];
var count = 0;

for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] < 0 ) {
        count++;
    }
};

for ( var j = 1; j <= count; j++ ) {
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] < 0 ) {
            arr.splice( i , 1 );
            break;
        }
    }
}

/**
 * count all negatives first
 * now remove one neg
 * now loop this one neg program for count times
 */