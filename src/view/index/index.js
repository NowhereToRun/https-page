import { $ } from '@mfelibs/base-utils'

console.log(navigator)

if ("geolocation" in navigator) {
    // 第三个参数 https://developer.mozilla.org/zh-CN/docs/Web/API/PositionOptions
    // 只用getCurrentPosition 获取位置后手机上标志获取位置的箭头会消失
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log('new');
        console.log(position);
        // do_something(position.coords.latitude, position.coords.longitude);
    }, function (err) {
        console.log(err);
    }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 20000
        }
    );

    var times = 0;
    var watchID = navigator.geolocation.watchPosition(function (position) {
        console.log(position);
        times = times + 1;
        if(times === 6){
            navigator.geolocation.clearWatch(watchID);
        }
    }, function (err) {
        console.log('in watch error');
    }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        });

} else {
    /* 地理位置服务不可用 */
    console.log('不可以;');
}