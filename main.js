(function(){	
	var app = angular.module('monkeyStore',[]);
	app.controller('StoreController', function(){
		this.products = monkeys;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(newTab){
			this.tab = newTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	var monkeys = [
		{
			name: 'Белогорлый капуцин',
			description: 'Американская обезьяна, одна из самых умных среди них, мало уступает даже шимпанзе. Капуцины умеют пить молоко из чашки, разбивают молотком орехи, да так ловко, что не попадают по пальцам. С интересом смотрят кино, а увидев на экране змею, в ужасе разбегаются.',
			price: 5.70,
			inStock: true,
			image: 'images/belogcapucin.jpg'
		},
		{
			name: 'Дымчатый тонкотел',
			description: 'Живет в Мьянме, Таиланде, Лаосе и Камбодже. Это большие обезьяны длиною – от кончика морды до корня хвоста – до семидесяти трех сантиметров. Тело покрыто густой серой шерстью. На голове волосы образуют подобие короны. Обезьяны эти довольно злобные, живут стадами, питаются главным образом листьями. ',
			price: 10.05,
			inStock: false,
			image: 'images/dimtonkotel.jpg'
		},
		{
			name: 'Серебристый гиббон',
			description: 'Он ходит и даже бегает на ногах, балансируя при этом широко раскинутыми руками. Эти дружелюбные, приветливые обезьяны очень сообразительны. В Индонезии очень любят гиббонов, приручают их и относятся к ним как к членам семьи.',
			price: 15.00,
			inStock: true,
			image: 'images/silvergibbon.jpg'
		},
		{
			name: 'Орангутан',
			description: 'Самцы весят до двухсот пятидесяти килограммов. Живут орангутаны на деревьях, на высоте двух-трех десятков метров. С помощью своих ловких рук могут перебираться по ветвям. Двигаются по деревьям так же быстро, как человек бежит по земле. По земле они почти никогда не ходят в вертикальном положении.',
			price: 8.43,
			inStock: true,
			image: 'images/orangutan.jpg'
		}
	];
})();