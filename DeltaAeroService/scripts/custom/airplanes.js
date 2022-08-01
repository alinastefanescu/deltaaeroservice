// Airplane class
var airplane = function(name,desc,extra,imgURI,price){
	this.name = name;
	this.extra = extra,
	this.desc = desc;
	this.imgURI = imgURI;
	this.price = price;
}

// All airplanes
let airplanes = {
	pa140: new airplane('Apollo Fox', '150 RON/10 min', 'Apollo Fox este o aeronavă STOL cu două locuri, construită din fabrică, cu manevrabilitate, performanță și manoperă de vârf. Armonia cârmei este deosebit de bună, iar aeronava este foarte ușor de zburat și aterizat. Fuzelajul este dintr-o construcție din tuburi din aliaj de oțel sudat, cu aripi din aliaj de aluminiu atât pentru lăți, cât și pentru nervuri. Aripile și fuselajul sunt acoperite cu țesătură „Ceconite” cu un finisaj de vopsea din fabrică aplicat. Trenul de aterizare este un sistem de tablă de aluminiu la comandă, așa cum se găsește pe mai multe modele Cessna, iar roțile sunt echipate cu frâne cu disc hidraulice.','images/cherokee-rs.png',150),
};