const monthDiff = (data) => {

    var today = new Date();
    var birthDay = new Date(data);
    var y1 = today.getFullYear();
    var y2 = birthDay.getFullYear();
    var yDiff = Math.abs(y2 - y1)
    var m1 = today.getMonth();
    var m2 = birthDay.getMonth();
    var mDiff = Math.abs(m2 - m1)
    return ((yDiff * 12) + mDiff)
}

export default monthDiff; 

