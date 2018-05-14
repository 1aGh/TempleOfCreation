const network = {
	nodes: [
			{id: 40, group:'main', x: 400, y: 400},
			{
				id: 1,
				x: 400,
				y: 400,
				borderWidth: 4,
				borderWidthSelected: 4,
				shape: 'circle',
				color: {
					border: 'rgba(234, 181, 67, 0.3)',
					background: 'rgba(234, 181, 67, 0)',
					highlight: {
						border: 'rgba(234, 181, 67, 0.3)',
						background: 'rgba(234, 181, 67, 0)',
					},
				},
				fixed: {
					x:true,
					y:true
				},
				physics: false,
				shapeProperties: {
					borderDashes: [3, 6]
				},
				margin: 160,
			},
			{
				id: 2,
				x: 400,
				y: 400,
				borderWidth: 4,
				borderWidthSelected: 4,
				shape: 'circle',
				color: {
					border: 'rgba(234, 181, 67, 0.3)',
					background: 'rgba(234, 181, 67, 0)',
					highlight: {
						border: 'rgba(234, 181, 67, 0.3)',
						background: 'rgba(234, 181, 67, 0)',
					},
				},
				fixed: {
					x:true,
					y:true
				},
				physics: false,
				shapeProperties: {
					borderDashes: [3, 6]
				},
				margin: 260
			},
			// kavarna
			{id: 41, group: 'cluster', label: 'Kavárna', x: 250, y: 317},
			{id: 3, group: 'sub', label: 'Přednášky'},
			{id: 4, group: 'sub', label: 'Bleší trhy'},
			{id: 5, group: 'sub', label: 'Koncerty'},
			{id: 6, group: 'sub', label: 'Kino'},
			{id: 7, group: 'sub', label: 'Obchod s vlastními produkty'},
			{id: 8, group: 'sub', label: 'Občerstvení'},
			// sdilena dilna
			{id: 9, group: 'cluster', label: 'Sdílená dílna', x: 537, y: 290},
			{id: 10, group: 'sub', label: 'Individuální makerspace'},
			{id: 11, group: 'sub', label: 'Workshopy'},
			{id: 12, group: 'sub', label: 'Kroužky pro nejmenší'},
			{id: 13, group: 'sub', label: 'Pronájem vybavení'},
			{id: 14, group: 'sub', label: 'Pronájem prostor'},
			{id: 15, group: 'sub', label: 'Dny otevřených dveří'},
			// graficke studio
			{id: 16, group: 'cluster', label: 'Grafické studio', x: 580, y: 430},
			{id: 17, group: 'sub', label: 'Digitální tisk'},
			{id: 18, group: 'sub', label: 'Řezaná grafika'},
			{id: 19, group: 'sub', label: 'Frézování, gravírování'},
			{id: 20, group: 'sub', label: 'Sítotisk'},
			{id: 21, group: 'sub', label: 'Návrhy 2D'},
			{id: 22, group: 'sub', label: 'Návrhy 3D, vizualizace'},
			// rekvalifikace
			{id: 23, group: 'cluster', label: 'Rekvalifikace', x: 238, y: 490},
			{id: 24, group: 'sub', label: 'Počítačový 3D grafik'},
			{id: 25, group: 'sub', label: 'Designer koupelen'},
			{id: 26, group: 'sub', label: 'Programátor'},
			{id: 27, group: 'sub', label: 'Grafik pro digitální media'},
			{id: 28, group: 'sub', label: 'Fotograf - základy fotografování'},
			{id: 29, group: 'sub', label: 'Fotograf v minilabu'},
			{id: 30, group: 'sub', label: 'Produktový a dokumentační fotograf'},
			{id: 31, group: 'sub', label: 'Fotograf architektury a krajiny'},
			{id: 32, group: 'sub', label: 'Portrétní fotograf'},
			// co-working
			{id: 33, group: 'cluster', label: 'Co-working', x: 580, y: 590},
			{id: 34, group: 'sub', label: 'Pronájem vybavených kanceláří'},
			{id: 35, group: 'sub', label: 'Teambuildingy'},
			// chranena dilna
			{id: 36, group: 'cluster', label: 'Chráněná dílna', x: 451, y: 650},
			{id: 37, group: 'sub', label: 'Pracovní místa pro ZTP'},
			{id: 38, group: 'sub', label: 'Přátelský přístup'},
			{id: 39, group: 'sub', label: 'Smysluplná práce'},
		],
	edges: [
			{from: 40, to: 41, width: 4},
			{from: 40, to: 9, width: 4},
			{from: 40, to: 16, width: 4},
			{from: 40, to: 23, width: 4},
			{from: 40, to: 33, width: 4},
			{from: 40, to: 36, width: 4},
			// kavarna
			{from: 41, to: 3},
			{from: 41, to: 4},
			{from: 41, to: 5},
			{from: 41, to: 6},
			{from: 41, to: 7},
			{from: 41, to: 8},
			// sdilena dilna
			{from: 9, to: 10},
			{from: 9, to: 11},
			{from: 9, to: 12},
			{from: 9, to: 13},
			{from: 9, to: 14},
			{from: 9, to: 15},
			// graficke studio
			{from: 16, to: 17},
			{from: 16, to: 18},
			{from: 16, to: 19},
			{from: 16, to: 20},
			{from: 16, to: 21},
			{from: 16, to: 22},
			// rekvalifikace
			{from: 23, to: 24},
			{from: 23, to: 25},
			{from: 23, to: 26},
			{from: 23, to: 27},
			{from: 23, to: 28},
			{from: 23, to: 29},
			{from: 23, to: 30},
			{from: 23, to: 31},
			{from: 23, to: 32},
			// co-working
			{from: 33, to: 34},
			{from: 33, to: 35},
			// chranena dilna
			{from: 36, to: 37},
			{from: 36, to: 38},
			{from: 36, to: 39},
		]
};

export default network;