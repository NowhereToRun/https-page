import { $ } from '@mfelibs/base-utils'

console.log(navigator)

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        // do_something(position.coords.latitude, position.coords.longitude);
    }, function(err){
        console.log(err);
    });

    var watchID = navigator.geolocation.watchPosition(function(position) {
        console.log('in watch');
        console.log(position);
      });
} else {
    /* 地理位置服务不可用 */
    console.log('不可以;');
}