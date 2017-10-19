import { $ } from '@mfelibs/base-utils'

console.log(navigator)

if ("geolocation" in navigator) {
    // 第三个参数 https://developer.mozilla.org/zh-CN/docs/Web/API/PositionOptions
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('new');
        console.log(position);
        // do_something(position.coords.latitude, position.coords.longitude);
    }, function (err) {
        console.log(err);
    },{
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 20000
    }
);

    // var watchID = navigator.geolocation.watchPosition(function (position) {
    //     console.log(position);
    // }, function (err) {
    //     console.log('in watch error');
    // }, {
    //         enableHighAccuracy: true,
    //         maximumAge: 0,
    //         timeout: 27000
    //     });
} else {
    /* 地理位置服务不可用 */
    console.log('不可以;');
}