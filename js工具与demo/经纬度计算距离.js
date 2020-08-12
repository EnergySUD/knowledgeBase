

//start:{lat:22.617735, lng:113.127068}、end:{lat:22.619591, lng:113.128029}
getDistance(start,end){
	var lat1 = start.lat,lng1 = start.lng,lat2 = end.lat,lng2 = end.lng;
	var radLat1 = lat1*Math.PI / 180.0;
	var radLat2 = lat2*Math.PI / 180.0;
	var a = radLat1 - radLat2;
	var  b = lng1*Math.PI / 180.0 - lng2*Math.PI / 180.0;
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
	Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
	s = s *6378.137 ;// EARTH_RADIUS;
	s = Math.round(s * 10000) / 10000;
	return s; //距离单位为km
}