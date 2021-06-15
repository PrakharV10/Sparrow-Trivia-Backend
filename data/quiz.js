const quizzes = [
	{
		id: '0001',
		topic: 'The one with the Quiz!',
		image: 'https://i.pinimg.com/736x/89/58/97/895897b7c1a99c6310ab304fb38b2281.jpg',
		maximum: 40,
		questions: [
			{
				question: 'Phoebe’s scientist boyfriend David worked in what city?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001011',
						option: 'New York',
						isRight: false,
					},
					{
						id: '0001012',
						option: 'Los Angeles',
						isRight: false,
					},
					{
						id: '0001013',
						option: 'Chicago',
						isRight: false,
					},
					{
						id: '0001014',
						option: 'Minsk',
						isRight: true,
					},
				],
			},
			{
				question: "Name of the famous actor, who played Ross's son, Ben?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001021',
						option: 'Collin Jones',
						isRight: false,
					},
					{
						id: '0001022',
						option: 'Cole Sprouse',
						isRight: true,
					},
					{
						id: '0001023',
						option: 'Collin Sprouse',
						isRight: false,
					},
					{
						id: '0001024',
						option: 'Cole Sprouts',
						isRight: false,
					},
				],
			},
			{
				question:
					'In College, Ross and Chandler had a band. What was the name of that college band?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001031',
						option: 'Way up',
						isRight: false,
					},
					{
						id: '0001032',
						option: 'No Way',
						isRight: false,
					},
					{
						id: '0001033',
						option: 'Way No Way',
						isRight: true,
					},
					{
						id: '0001034',
						option: 'Rossandler',
						isRight: false,
					},
				],
			},
			{
				question:
					'In Season 5 Finale, Ross and Rachel’s wedding dinner was held where in Vegas?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001041',
						option: 'Pizza Hut',
						isRight: true,
					},
					{
						id: '0001042',
						option: 'Bar in Vegas',
						isRight: false,
					},
					{
						id: '0001043',
						option: 'Vegas club',
						isRight: false,
					},
					{
						id: '0001044',
						option: 'Dominoes',
						isRight: false,
					},
				],
			},
			{
				question: 'What is the name of Chandler’s father’s Las Vegas all-male burlesque?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001051',
						option: 'Viva Las Gaygas',
						isRight: true,
					},
					{
						id: '0001052',
						option: 'Viva Las Vegas',
						isRight: false,
					},
					{
						id: '0001053',
						option: 'Gay Club',
						isRight: false,
					},
					{
						id: '0001054',
						option: "The name wasn't mentioned",
						isRight: false,
					},
				],
			},
			{
				question:
					"In Season 4, After Ross and Emily's Wedding, Rachel goes on Ross’ honeymoon by herself where?",
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001061',
						option: 'Athena Greece',
						isRight: false,
					},
					{
						id: '0001062',
						option: 'Athens, Greece',
						isRight: true,
					},
					{
						id: '0001063',
						option: 'Tulsa, Oklahoma',
						isRight: false,
					},
					{
						id: '0001064',
						option: 'Paris, France',
						isRight: false,
					},
				],
			},
			{
				question:
					'In Season 5, After Emily runs from her own wedding, How many roses did Ross send Emily?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001071',
						option: '82',
						isRight: false,
					},
					{
						id: '0001072',
						option: '50',
						isRight: false,
					},
					{
						id: '0001073',
						option: '70',
						isRight: false,
					},
					{
						id: '0001074',
						option: '72',
						isRight: true,
					},
				],
			},
			{
				question:
					'In Season 6, What ingredient did Rachel mistakingly put in her Thanksgiving trifle?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001081',
						option: 'Beef',
						isRight: true,
					},
					{
						id: '0001082',
						option: 'Jam',
						isRight: false,
					},
					{
						id: '0001083',
						option: 'Whipped Cream',
						isRight: false,
					},
					{
						id: '0001084',
						option: 'Bread',
						isRight: false,
					},
				],
			},
			{
				question:
					'Phoebe said something was wrong with the right or the left phalange of Rachel’s plane?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001091',
						option: 'Left',
						isRight: true,
					},
					{
						id: '0001092',
						option: 'Right',
						isRight: false,
					},
					{
						id: '0001093',
						option: 'None',
						isRight: false,
					},
					{
						id: '0001094',
						option: 'Both',
						isRight: false,
					},
				],
			},
			{
				question: 'At what age, Did Monica get a pencil stuck in her Ear?',
				pts: 4,
				negativePts: 1,
				options: [
					{
						id: '0001101',
						option: '16',
						isRight: false,
					},
					{
						id: '0001102',
						option: '15',
						isRight: false,
					},
					{
						id: '0001103',
						option: '14',
						isRight: true,
					},
					{
						id: '0001104',
						option: '18',
						isRight: false,
					},
				],
			},
		],
	},
	{
		id: '0002',
		topic: 'Know your Blender!',
		image: 'https://i.pinimg.com/736x/d9/f2/4e/d9f24e6d6a010e285f093294bb05689b.jpg',
		maximum: 10,
		questions: [
			{
				question: 'How do you view the tools window of a selected 3D object?',
				pts: 2,
				negativePts: 0,
				options: [
					{
						id: '0002011',
						option: 'Press the Space Bar',
						isRight: false,
					},
					{
						id: '0002012',
						option: 'Press the Q key',
						isRight: false,
					},
					{
						id: '0002013',
						option: 'Press the T key',
						isRight: true,
					},
					{
						id: '0002014',
						option: 'Press the O key',
						isRight: false,
					},
				],
			},
			{
				question: 'How do you connect two vertex with an edge?',
				pts: 2,
				negativePts: 0,
				options: [
					{
						id: '0002021',
						option: 'Select the vertex and press SPACE',
						isRight: false,
					},
					{
						id: '0002022',
						option: 'Select the vertex and press E',
						isRight: false,
					},
					{
						id: '0002023',
						option: 'Select the vertex and press F',
						isRight: true,
					},
					{
						id: '0002024',
						option: 'Select the vertex and press V',
						isRight: false,
					},
				],
			},
			{
				question: 'How do you add a keyframe to the selected object?',
				pts: 2,
				negativePts: 0,
				options: [
					{
						id: '0002031',
						option: 'Press the F key',
						isRight: false,
					},
					{
						id: '0002032',
						option: 'Press the k key',
						isRight: false,
					},
					{
						id: '0002033',
						option: 'Press the I key',
						isRight: true,
					},
					{
						id: '0002034',
						option: 'Press the A key',
						isRight: false,
					},
				],
			},
			{
				question: 'What is the relationship between Vertices, Edges, and Faces?',
				pts: 2,
				negativePts: 0,
				options: [
					{
						id: '0002041',
						option: 'Vertices are made with edges and Faces',
						isRight: false,
					},
					{
						id: '0002042',
						option: 'Each type of polygonal sub-object type is part of the whole ',
						isRight: true,
					},
					{
						id: '0002043',
						option: 'Each texture of the selected 3D object is part of the whole ',
						isRight: false,
					},
					{
						id: '0002044',
						option: 'None of the above',
						isRight: false,
					},
				],
			},
			{
				question: 'How do you place the 3D cursor?',
				pts: 2,
				negativePts: 0,
				options: [
					{
						id: '0002051',
						option: 'Left mouse button on 3D view',
						isRight: true,
					},
					{
						id: '0002052',
						option: 'Right mouse button on 3D view',
						isRight: false,
					},
					{
						id: '0002053',
						option: 'Left mouse button and C key.',
						isRight: false,
					},
					{
						id: '0002054',
						option: 'None of the above',
						isRight: false,
					},
				],
			},
		],
	},
];

module.exports = { quizzes };
