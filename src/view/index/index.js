import { $ } from '@mfelibs/base-utils'

console.log(navigator)

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        // do_something(position.coords.latitude, position.coords.longitude);
    }, function (err) {
        console.log(err);
    });

    var watchID = navigator.geolocation.watchPosition(function (position) {
        console.log(position);
    }, function (err) {
        console.log('in watch error');
    }, {
            enableHighAccuracy: true,
            maximumAge: 5,
            timeout: 27000
        });
} else {
    /* 地理位置服务不可用 */
    console.log('不可以;');
}