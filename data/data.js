const showsData = [
        {
          rank: 1,
          title: "Blade",
          year: 1998,
          duration: "2h 0m",
          rating: "7.1",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/blade.webp",
        },
        {
          rank: 2,
          title: "X-Men",
          year: 2000,
          duration: "1h 44m",
          rating: "7.3",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/x-men.webp",
        },
        {
          rank: 3,
          title: "Blade II ",
          year: 2002,
          duration: "1h 57m",
          rating: "6.7",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/blade_II.webp",
        },
        {
          rank: 4,
          title: "Spider-Man",
          year: 2002,
          duration: "2h 7m",
          rating: "7.4",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/spider-man.webp",
        },
        {
          rank: 5,
          title: "Daredevil",
          year: 2003,
          duration: "1h 43m",
          rating: "5.3",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/daredevil.webp",
        },
        {
          rank: 6,
          title: "X2: X-Men United",
          year: 2003,
          duration: "2h 13m",
          rating: "7.4",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X2_X-Men_United.webp",
        },
        {
          rank: 7,
          title: "Hulk",
          year: 2003,
          duration: "2h 18m",
          rating: "5.7",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/hulk.webp",
        },
        {
          rank: 8,
          title: "The Punisher",
          year: 2004,
          duration: "2h 3m",
          rating: "6.4",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Punisher.webp",
        },
        {
          rank: 9,
          title: "Spider-Man 2",
          year: 2004,
          duration: "2h 7m",
          rating: "7.5",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Spider-Man_2.webp",
        },
        {
          rank: 10,
          title: "Blade: Trinity",
          year: 2004,
          duration: "1h 52m",
          rating: "5.8",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Blade_Trinity.webp",
        },
        {
          rank: 11,
          title: "Elektra",
          year: 2005,
          duration: "1h 37m",
          rating: "4.7",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Elektra.webp",
        },
        {
          rank: 12,
          title: "Man-Thing",
          year: 2005,
          duration: "1h 37m",
          rating: "4.1",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Man-Thing.webp",
        },
        {
          rank: 13,
          title: "Fantastic Four",
          year: 2005,
          duration: "1h 32m",
          rating: "5.7",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Fantastic_Four.webp",
        },
        {
          rank: 14,
          title: "X-Men: The Last Stand",
          year: 2006,
          duration: "1h 44m",
          rating: "6.6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_The_Last_Stand.webp",
        },
        {
          rank: 15,
          title: "Blade: The Series",
          year: 2006,
          duration: "13 Eps",
          rating: "6.2",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Blade_The_Series.webp",
        },
        {
          rank: 16,
          title: "Ghost Rider",
          year: 2007,
          duration: "1h 50m",
          rating: "5.3",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Ghost_Rider.webp",
        },
        {
          rank: 17,
          title: "Spider-Man 3",
          year: 2007,
          duration: "2h 19m",
          rating: "6.3",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Spider-Man_3.webp",
        },
        {
          rank: 18,
          title: "Fantastic Four: Rise of the Silver Surfer",
          year: 2007,
          duration: "1h 32m",
          rating: "5.6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Fantastic_Four_Rise_of_the_Silver_Surfer.webp",
        },
        {
          rank: 19,
          title: "Iron Man",
          year: 2008,
          duration: "2h 6m",
          rating: "7.9",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Iron_Man.webp",
        },
        {
          rank: 20,
          title: "The Incredible Hulk",
          year: 2008,
          duration: "1h 52m",
          rating: "6.6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Incredible_Hulk.webp",
        },
        {
          rank: 21,
          title: "Punisher: War Zone",
          year: 2008,
          duration: "1h 43m",
          rating: "5.9",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Punisher_War_Zone.webp",
        },
        {
          rank: 22,
          title: "X-Men Origins: Wolverine",
          year: 2009,
          duration: "1h 47m",
          rating: "6.5",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_Origins_Wolverine.webp",
        },
        {
          rank: 23,
          title: "Iron Man 2",
          year: 2010,
          duration: "2h 4m",
          rating: "6.9",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Iron_Man_2.webp",
        },
        {
          rank: 24,
          title: "Thor",
          year: 2011,
          duration: "1h 54m",
          rating: "7",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Thor.webp",
        },
        {
          rank: 25,
          title: "X-Men: First Class",
          year: 2011,
          duration: "2h 11m",
          rating: "7.7",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_First_Class.webp",
        },
        {
          rank: 26,
          title: "Captain America: The First Avenger",
          year: 2011,
          duration: "2h 4m",
          rating: "6.9",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Captain_America_The_First_Avenger.webp",
        },
        {
          rank: 27,
          title: "The Consultant",
          year: 2011,
          duration: "4 mins",
          rating: "6.3",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Consultant.webp",
        },
        {
          rank: 28,
          title: "A Funny Thing Happened on the Way to Thor's Hammer",
          year: 2011,
          duration: "4 mins",
          rating: "7.1",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/A_Funny_Thing_Happened_on_the_Way_to_Thors_Hammer.webp",
        },
        {
          rank: 29,
          title: "Ghost Rider: Spirit of Vengeance",
          year: 2011,
          duration: "1h 35m",
          rating: "4.4",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Ghost_Rider_Spirit_of_Vengeance.webp",
        },
        {
          rank: 30,
          title: "The Avengers",
          year: 2012,
          duration: "2h 23m",
          rating: "8",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Avengers.webp",
        },
        {
          rank: 31,
          title: "The Amazing Spider-Man",
          year: 2012,
          duration: "2h 16m",
          rating: "6.9",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Amazing_Spider-Man.webp",
        },
        {
          rank: 32,
          title: "Item 47",
          year: 2012,
          duration: "12 mins",
          rating: "6.6",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Item_47.webp",
        },
        {
          rank: 33,
          title: "Iron Man 3",
          year: 2013,
          duration: "2h 10m",
          rating: "7.1",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Iron_Man_3.webp",
        },
        {
          rank: 34,
          title: "The Wolverine",
          year: 2013,
          duration: "2h 6m",
          rating: "6.7",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Wolverine.webp",
        },
        {
          rank: 35,
          title: "Agent Carter",
          year: 2013,
          duration: "15 mins",
          rating: "7.4",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agent_Carter.webp",
        },
        {
          rank: 36,
          title: "Agents of S.H.I.E.L.D. (Season 1)",
          year: 2013,
          duration: "22 Eps",
          rating: "8",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_1.webp",
        },
        {
          rank: 37,
          title: "Thor: The Dark World",
          year: 2013,
          duration: "1h 52m",
          rating: "6.7",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Thor_The_Dark_World.webp",
        },
        {
          rank: 38,
          title: "All Hail the King",
          year: 2014,
          duration: "14 mins",
          rating: "7.2",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/All_Hail_the_King.webp",
        },
        {
          rank: 39,
          title: "Captain America: The Winter Soldier",
          year: 2014,
          duration: "2h 16m",
          rating: "7.7",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Captain_America_the_Winter_Soldier.webp",
        },
        {
          rank: 40,
          title: "The Amazing Spider-Man 2",
          year: 2014,
          duration: "2h 22m",
          rating: "6.6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Amazing_Spider-Man_2.webp",
        },
        {
          rank: 41,
          title: "X-Men: Days of Future Past",
          year: 2014,
          duration: "2h 11m",
          rating: "7.9",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_Days_of_Future_Past.webp",
        },
        {
          rank: 42,
          title: "Guardians of the Galaxy",
          year: 2014,
          duration: "2h 1m",
          rating: "8",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Guardians_of_the_Galaxy.webp",
        },
        {
          rank: 43,
          title: "Agents of S.H.I.E.L.D. (Season 2)",
          year: 2014,
          duration: "22 Eps",
          rating: "8.3",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_2.webp",
        },
        {
          rank: 44,
          title: "Agent Carter (Season 1)",
          year: 2015,
          duration: "8 Eps",
          rating: "8.1",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agent_Carter_Season_1.webp",
        },
        {
          rank: 45,
          title: "Daredevil (Season 1)",
          year: 2015,
          duration: "13 Eps",
          rating: "8.7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Daredevil_Season_1.webp",
        },
        {
          rank: 46,
          title: "Avengers: Age of Ultron",
          year: 2015,
          duration: "2h 21m",
          rating: "7.3",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Avengers_Age_of_Ultron.webp",
        },
        {
          rank: 47,
          title: "WHIH Newsfront (Season 1)",
          year: 2015,
          duration: "5 Eps",
          rating: "6.5",
          type: "spc",
          tag: "opt",
          imageUrl: "./assets/mcuposters/WHIH_Newsfront_Season_1.webp",
        },
        {
          rank: 48,
          title: "Ant-Man",
          year: 2015,
          duration: "1h 57m",
          rating: "7.2",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Ant-Man.webp",
        },
        {
          rank: 49,
          title: "Fantastic Four",
          year: 2015,
          duration: "1h 40m",
          rating: "4.3",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Fantastic_Four_2015.webp",
        },
        {
          rank: 50,
          title: "Agents of S.H.I.E.L.D. (Season 3)",
          year: 2015,
          duration: "22 Eps",
          rating: "8.4",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_3.webp",
        },
        {
          rank: 51,
          title: "Jessica Jones (Season 1)",
          year: 2015,
          duration: "13 Eps",
          rating: "8.3",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Jessica_Jones_Season_1.webp",
        },
        {
          rank: 52,
          title: "Agent Carter (Season 2)",
          year: 2016,
          duration: "10 Eps",
          rating: "7.9",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agent_Carter_Season_2.webp",
        },
        {
          rank: 53,
          title: "Deadpool",
          year: 2016,
          duration: "1h 48m",
          rating: "8",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Deadpool.webp",
        },
        {
          rank: 54,
          title: "Daredevil (Season 2)",
          year: 2016,
          duration: "13 Eps",
          rating: "8.9",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Daredevil_Season_2.webp",
        },
        {
          rank: 55,
          title: "WHIH Newsfront (Season 2)",
          year: 2016,
          duration: "5 Eps",
          rating: "6.5",
          type: "spc",
          tag: "opt",
          imageUrl: "./assets/mcuposters/WHIH_Newsfront _Season_2.webp",
        },
        {
          rank: 56,
          title: "Captain America: Civil War",
          year: 2016,
          duration: "2h 27m",
          rating: "7.8",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Captain_America_Civil_War.webp",
        },
        {
          rank: 57,
          title: "X-Men: Apocalypse",
          year: 2016,
          duration: "2h 22m",
          rating: "6.8",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_Apocalypse.webp",
        },
        {
          rank: 58,
          title: "Team Thor: Part 1",
          year: 2016,
          duration: "3 mins",
          rating: "7.7",
          type: "one",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Team_Thor_Part_1.webp",
        },
        {
          rank: 59,
          title: "Agents of S.H.I.E.L.D. (Season 4)",
          year: 2016,
          duration: "22 Eps",
          rating: "8.5",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_4.webp",
        },
        {
          rank: 60,
          title: "Luke Cage (Season 1)",
          year: 2016,
          duration: "13 Eps",
          rating: "7.9",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Luke_Cage_Season_1.webp",
        },
        {
          rank: 61,
          title: "Doctor Strange",
          year: 2016,
          duration: "1h 55m",
          rating: "7.5",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Doctor_Strange.webp",
        },
        {
          rank: 62,
          title: "Agents of S.H.I.E.L.D.: Slingshot (Season 1)",
          year: 2016,
          duration: "6 EPs",
          rating: "6.7",
          type: "spc",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Slingshot_Season_1.webp",
        },
        {
          rank: 63,
          title: "Legion (Season 1)",
          year: 2017,
          duration: "8 Eps",
          rating: "8.6",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Legion_Season_1.webp",
        },
        {
          rank: 64,
          title: "Team Thor: Part 2",
          year: 2017,
          duration: "5 mins",
          rating: "7.2",
          type: "one",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Team_Thor_Part_2.webp",
        },
        {
          rank: 65,
          title: "Deadpool: No Good Deed",
          year: 2017,
          duration: "4 mins",
          rating: "7.9",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Deadpool_No_Good_Deed.webp",
        },
        {
          rank: 66,
          title: "Logan",
          year: 2017,
          duration: "2h 17m",
          rating: "8.1",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Logan.webp",
        },
        {
          rank: 67,
          title: "Iron Fist (Season 1)",
          year: 2017,
          duration: "13 Eps",
          rating: "7.4",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Iron_Fist_Season_1.webp",
        },
        {
          rank: 68,
          title: "Guardians of the Galaxy Vol. 2",
          year: 2017,
          duration: "2h 16m",
          rating: "7.6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Guardians_of _the_Galaxy_Vol._2.webp",
        },
        {
          rank: 69,
          title: "Spider-Man: Homecoming",
          year: 2017,
          duration: "2h 13m",
          rating: "7.4",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Spider-Man_Homecoming.webp",
        },
        {
          rank: 70,
          title: "The Defenders (Season 1)",
          year: 2017,
          duration: "8 Eps",
          rating: "7.2",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Defenders_Season_1.webp",
        },
        {
          rank: 71,
          title: "Inhumans (Season 1)",
          year: 2017,
          duration: "8 Eps",
          rating: "4.9",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Inhumans_Season_1.webp",
        },
        {
          rank: 72,
          title: "The Gifted (Season 1)",
          year: 2017,
          duration: "13 Eps",
          rating: "7.8",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Gifted_Season_1.webp",
        },
        {
          rank: 73,
          title: "Thor: Ragnarok",
          year: 2017,
          duration: "2h 10m",
          rating: "7.9",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Thor_Ragnarok.webp",
        },
        {
          rank: 74,
          title: "The Punisher (Season 1)",
          year: 2017,
          duration: "13 Eps",
          rating: "8.7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Punisher_Season_1.webp",
        },
        {
          rank: 75,
          title: "Runaways (Season 1)",
          year: 2017,
          duration: "10 Eps",
          rating: "7.4",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Runaways_Season_1.webp",
        },
        {
          rank: 76,
          title: "Agents of S.H.I.E.L.D. (Season 5)",
          year: 2017,
          duration: "22 Eps",
          rating: "8.4",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_5.webp",
        },
        {
          rank: 77,
          title: "Black Panther",
          year: 2018,
          duration: "2h 14m",
          rating: "7.3",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Black_Panther.webp",
        },
        {
          rank: 78,
          title: "Team Darryl",
          year: 2018,
          duration: "6 mins",
          rating: "6.5",
          type: "one",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Team_Darryl.webp",
        },
        {
          rank: 79,
          title: "Jessica Jones (Season 2)",
          year: 2018,
          duration: "13 Eps",
          rating: "7.7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Jessica_Jones_Season_2.webp",
        },
        {
          rank: 80,
          title: "Legion (Season 2)",
          year: 2018,
          duration: "11 Eps",
          rating: "8.2",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Legion_Season_2.webp",
        },
        {
          rank: 81,
          title: "Avengers: Infinity War",
          year: 2018,
          duration: "2h 29m",
          rating: "8.4",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Avengers_Infinity_War.webp",
        },
        {
          rank: 82,
          title: "Deadpool 2",
          year: 2018,
          duration: "1h 59m",
          rating: "7.6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Deadpool_2.webp",
        },
        {
          rank: 83,
          title: "Cloak & Dagger (Season 1)",
          year: 2018,
          duration: "10 Eps",
          rating: "7.3",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Cloak_&_Dagger_Season_1.webp",
        },
        {
          rank: 84,
          title: "Luke Cage (Season 2)",
          year: 2018,
          duration: "13 Eps",
          rating: "7.5",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Luke_Cage_Season_2.webp",
        },
        {
          rank: 85,
          title: "Ant-Man and the Wasp",
          year: 2018,
          duration: "1h 58m",
          rating: "7",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Ant-Man_and_the_Wasp.webp",
        },
        {
          rank: 86,
          title: "Iron Fist (Season 2)",
          year: 2018,
          duration: "10 Eps",
          rating: "7.3",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Iron_Fist_Season_2.webp",
        },
        {
          rank: 87,
          title: "The Gifted (Season 2)",
          year: 2018,
          duration: "16 Eps",
          rating: "7.6",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Gifted_Season_2.webp",
        },
        {
          rank: 88,
          title: "Venom",
          year: 2018,
          duration: "1h 52m",
          rating: "6.6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Venom.webp",
        },
        {
          rank: 89,
          title: "Daredevil (Season 3)",
          year: 2018,
          duration: "13 Eps",
          rating: "8.9",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Daredevil_Season_3.webp",
        },
        {
          rank: 90,
          title: "Spider-Man: Into the Spider-Verse",
          year: 2018,
          duration: "1h 56m",
          rating: "8.4",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Spider-Man_Into_the_Spider-Verse.webp"
        },
        {
          rank: 91,
          title: "Runaways (Season 2)",
          year: 2018,
          duration: "13 Eps",
          rating: "7.5",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Runaways_Season_2.webp",
        },
        {
          rank: 92,
          title: "The Punisher (Season 2)",
          year: 2019,
          duration: "13 Eps",
          rating: "8.3",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Punisher_Season_2.webp",
        },
        {
          rank: 93,
          title: "Captain Marvel",
          year: 2019,
          duration: "2h 4m",
          rating: "6.7",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Captain_Marvel.webp",
        },
        {
          rank: 94,
          title: "Cloak & Dagger (Season 2)",
          year: 2019,
          duration: "10 Eps",
          rating: "7.1",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Cloak_&_Dagger_Season_2.webp",
        },
        {
          rank: 95,
          title: "Avengers: Endgame",
          year: 2019,
          duration: "3h 1m",
          rating: "8.4",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Avengers_Endgame.webp",
        },
        {
          rank: 96,
          title: "Agents of S.H.I.E.L.D. (Season 6)",
          year: 2019,
          duration: "13 Eps",
          rating: "8.1",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_6.webp",
        },
        {
          rank: 97,
          title: "X-Men: Dark Phoenix",
          year: 2019,
          duration: "1h 54m",
          rating: "5.7",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_Dark_Phoenix.webp",
        },
        {
          rank: 98,
          title: "Jessica Jones (Season 3)",
          year: 2019,
          duration: "13 Eps",
          rating: "7.7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Jessica_Jones_Season_3.webp",
        },
        {
          rank: 99,
          title: "Legion (Season 3)",
          year: 2019,
          duration: "8 Eps",
          rating: "8.4",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Legion_Season_3.webp",
        },
        {
          rank: 100,
          title: "Peter's To-Do List",
          year: 2019,
          duration: "3 mins",
          rating: "7.7",
          type: "one",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Peters_To-Do_List.webp",
        },
        {
          rank: 101,
          title: "Spider-Man: Far From Home",
          year: 2019,
          duration: "2h 10m",
          rating: "7.3",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Spider-Man_Far_From_Home.webp",
        },
        {
          rank: 102,
          title: "The Daily Bugle (Season 1)",
          year: 2019,
          duration: "6 Eps",
          rating: "6.2",
          type: "spc",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Daily_Bugle_Season_1.webp",
        },
        {
          rank: 103,
          title: "Runaways (Season 3)",
          year: 2019,
          duration: "10 Eps",
          rating: "7.2",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Runaways_Season_3.webp",
        },
        {
          rank: 104,
          title: "Agents of S.H.I.E.L.D. (Season 7)",
          year: 2020,
          duration: "13 Eps",
          rating: "8.4",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Agents_of_S.H.I.E.L.D._Season_7.webp",
        },
        {
          rank: 105,
          title: "The New Mutants",
          year: 2020,
          duration: "1h 34m",
          rating: "5.3",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_New_Mutants.webp",
        },
        {
          rank: 106,
          title: "Helstrom (Season 1)",
          year: 2020,
          duration: "10 Eps",
          rating: "6.7",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Helstrom_Season_1.webp",
        },
        {
          rank: 107,
          title: "WandaVision (Season 1)",
          year: 2021,
          duration: "9 Eps",
          rating: "7.9",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/WandaVision_Season_1.webp",
        },
        {
          rank: 108,
          title: "The Falcon and the Winter Soldier (Season 1)",
          year: 2021,
          duration: "6 Eps",
          rating: "7.1",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Falcon_and_the_Winter_Soldier_Season_1.webp",
        },
        {
          rank: 109,
          title: "Loki (Season 1)",
          year: 2021,
          duration: "6 Eps",
          rating: "8.6",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Loki_Season_1.webp",
        },
        {
          rank: 110,
          title: "Black Widow",
          year: 2021,
          duration: "2h 13m",
          rating: "6.6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Black_Widow.webp",
        },
        {
          rank: 111,
          title: "What If…? (Season 1)",
          year: 2021,
          duration: "9 Eps",
          rating: "7.7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/What_If…_Season_1.webp",
        },
        {
          rank: 112,
          title: "Shang-Chi and the Legend of the Ten Rings",
          year: 2021,
          duration: "2h 12m",
          rating: "7.3",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Shang-Chi_and_the_Legend _of_the_Ten_Rings.webp",
        },
        {
          rank: 113,
          title: "Venom: Let There Be Carnage",
          year: 2021,
          duration: "1h 37m",
          rating: "5.9",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Venom_Let_There_Be_Carnage.webp",
        },
        {
          rank: 114,
          title: "Eternals",
          year: 2021,
          duration: "2h 37m",
          rating: "6.2",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Eternals.webp",
        },
        {
          rank: 115,
          title: "The Daily Bugle (Season 2)",
          year: 2021,
          duration: "19 Eps",
          rating: "5.5",
          type: "spc",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Daily_Bugle_Season_2.webp",
        },
        {
          rank: 116,
          title: "Hawkeye (Season 1)",
          year: 2021,
          duration: "6 Eps",
          rating: "7.4",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Hawkeye_Season_1.webp",
        },
        {
          rank: 117,
          title: "Spider-Man: No Way Home",
          year: 2021,
          duration: "2h 28m",
          rating: "8.1",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Spider-Man_No_Way_Home.webp",
        },
        {
          rank: 118,
          title: "The Daily Bugle (Season 3)",
          year: 2022,
          duration: "4 Eps",
          rating: "5.7",
          type: "spc",
          tag: "opt",
          imageUrl: "./assets/mcuposters/The_Daily_Bugle_Season_3.webp",
        },
        {
          rank: 119,
          title: "Moon Knight (Season 1)",
          year: 2022,
          duration: "6 Eps",
          rating: "7.3",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Moon_Knight_Season_1.webp",
        },
        {
          rank: 120,
          title: "Morbius",
          year: 2022,
          duration: "1h 44m",
          rating: "5.1",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Morbius.webp",
        },
        {
          rank: 121,
          title: "Doctor Strange in the Multiverse of Madness",
          year: 2022,
          duration: "2h 6m",
          rating: "6.8",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Doctor_Strange_in_the_Multiverse_of_Madness.webp",
        },
        {
          rank: 122,
          title: "Ms. Marvel (Season 1)",
          year: 2022,
          duration: "6 Eps",
          rating: "6.2",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Ms._Marvel_Season_1.webp",
        },
        {
          rank: 123,
          title: "Thor: Love and Thunder",
          year: 2022,
          duration: "1h 59m",
          rating: "6.1",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Thor_Love_and_Thunder.webp",
        },
        {
          rank: 124,
          title: "I Am Groot (Season 1)",
          year: 2022,
          duration: "5 Eps",
          rating: "7",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/I_Am_Groot_Season_1.webp",
        },
        {
          rank: 125,
          title: "She-Hulk: Attorney at Law (Season 1)",
          year: 2022,
          duration: "9 Eps",
          rating: "5.2",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/She-Hulk_Attorney_at_Law_Season_1.webp",
        },
        {
          rank: 126,
          title: "Werewolf by Night",
          year: 2022,
          duration: "52 mins",
          rating: "7.1",
          type: "spc",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Werewolf_by_Night.webp",
        },
        {
          rank: 127,
          title: "Black Panther: Wakanda Forever",
          year: 2022,
          duration: "2h 41m",
          rating: "6.6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Black_Panther_Wakanda_Forever.webp",
        },
        {
          rank: 128,
          title: "The Guardians of the Galaxy Holiday Special",
          year: 2022,
          duration: "42 mins",
          rating: "6.9",
          type: "spc",
          tag: "rec",
          imageUrl: "./assets/mcuposters/The_Guardians_of_the_Galaxy_Holiday_Special.webp",
        },
        {
          rank: 129,
          title: "Ant-Man and the Wasp: Quantumania",
          year: 2023,
          duration: "2h 5m",
          rating: "6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Ant-Man_and_the_Wasp_Quantumania.webp",
        },
        {
          rank: 130,
          title: "Guardians of the Galaxy Vol. 3",
          year: 2023,
          duration: "2h 29m",
          rating: "7.9",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Guardians_of_the_Galaxy_Vol._3.webp",
        },
        {
          rank: 131,
          title: "Spider-Man: Across the Spider-Verse",
          year: 2023,
          duration: "2h 20m",
          rating: "8.5",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Spider-Man_Across_the_Spider-Verse.webp"
        },
        {
          rank: 132,
          title: "Secret Invasion (Season 1)",
          year: 2023,
          duration: "6 Eps",
          rating: "5.8",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Secret_Invasion_Season_1.webp",
        },
        {
          rank: 133,
          title: "I Am Groot (Season 2)",
          year: 2023,
          duration: "5 Eps",
          rating: "6.5",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/I_Am_Groot_Season_2.webp",
        },
        {
          rank: 134,
          title: "Loki (Season 2)",
          year: 2023,
          duration: "6 Eps",
          rating: "8.4",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Loki_Season_2.webp",
        },
        {
          rank: 135,
          title: "The Marvels",
          year: 2023,
          duration: "1h 45m",
          rating: "5.4",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Marvels.webp",
        },
        {
          rank: 136,
          title: "What If...? (Season 2)",
          year: 2023,
          duration: "9 Eps",
          rating: "7.3",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/What_If..._Season_2.webp",
        },
        {
          rank: 137,
          title: "Echo (Season 1)",
          year: 2024,
          duration: "5 Eps",
          rating: "5.9",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Echo_Season_1.webp",
        },
        {
          rank: 138,
          title: "Madame Web",
          year: 2024,
          duration: "1h 56m",
          rating: "4.1",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Madame_Web.webp",
        },
        {
          rank: 139,
          title: "X-Men '97 (Season 1)",
          year: 2024,
          duration: "10 Eps",
          rating: "8.6",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_97_season_1.webp"
        },
        {
          rank: 140,
          title: "Deadpool & Wolverine",
          year: 2024,
          duration: "2h 8m",
          rating: "7.5",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Deadpool_&_Wolverine.webp",
        },
        {
          rank: 141,
          title: "Agatha All Along (Season 1)",
          year: 2024,
          duration: "9 Eps",
          rating: "7.2",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Agatha_All_Along_Season_1.webp",
        },
        {
          rank: 142,
          title: "What If...? (Season 3)",
          year: 2024,
          duration: "8 Eps",
          rating: "6.1",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/What_If..._Season_3.webp",
        },
        {
          rank: 143,
          title: "Venom: The Last Dance",
          year: 2024,
          duration: "1h 49m",
          rating: "6",
          type: "film",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Venom_The_Last_Dance.webp",
        },
        {
          rank: 144,
          title: "Kraven the Hunter",
          year: 2024,
          duration: "2h 7m",
          rating: "5.5",
          type: "film",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Kraven_the_Hunter.webp",
        },
        {
          rank: 145,
          title: "Your Friendly Neighborhood Spider-Man (Season 1)",
          year: 2025,
          duration: "10 Eps",
          rating: "7.5",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Your_Friendly_Neighborhood_Spider-Man.webp",
        },
        {
          rank: 146,
          title: "Captain America: Brave New World",
          year: 2025,
          duration: "1h 58m",
          rating: "5.6",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Captain_America_Brave_New_World.webp",
        },
        {
          rank: 147,
          title: "Daredevil: Born Again (Season 1)",
          year: 2025,
          duration: "9 Eps",
          rating: "8.4",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Daredevil_Born_Again_Season_1.webp",
        },
        {
          rank: 148,
          title: "Thunderbolts*",
          year: 2025,
          duration: "2h 6m",
          rating: "7.1",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Thunderbolts.webp",
        },
        {
          rank: 149,
          title: "Ironheart (Season 1)",
          year: 2025,
          duration: "6 Eps",
          rating: "4.5",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Ironheart_Season_1.webp",
        },
        {
          rank: 150,
          title: "The Fantastic Four: First Steps",
          year: 2025,
          duration: "1h 55m",
          rating: "6.8",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Fantastic_Four_First_Steps.webp",
        },
        {
          rank: 151,
          title: "Eyes of Wakanda (Season 1)",
          year: 2025,
          duration: "4 Eps",
          rating: "6.2",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Eyes_of_Wakanda_Season_1.webp",
        },
        {
          rank: 152,
          title: "Marvel Zombies (Season 1)",
          year: 2025,
          duration: "4 Eps",
          rating: "7",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Marvel_Zombies_Season_1.webp",
        },
        {
          rank: 153,
          title: "Wonder Man (Season 1)",
          year: 2026,
          duration: "8 Eps",
          rating: "7.4",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/Wonder_Man_Season_1.webp",
        },
        {
          rank: 154,
          title: "Daredevil: Born Again (Season 2)",
          year: 2026,
          duration: "8 Eps",
          rating: "8.8",
          type: "tv",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Daredevil_Born_Again_Season_2.webp",
        },
        {
          rank: 155,
          title: "The Punisher: One Last Kill",
          year: 2026,
          duration: "51 mins",
          rating: "7",
          type: "spc",
          tag: "ess",
          imageUrl: "./assets/mcuposters/The_Punisher_One_Last_Kill.webp",
        },
        {
          rank: 156,
          title: "Spider-Noir (Season 1)",
          year: 2026,
          duration: "8 Eps",
          rating: "7.7",
          type: "tv",
          tag: "opt",
          imageUrl: "./assets/mcuposters/Spider-Noir.webp"
        },
        {
          rank: 157,
          title: "X-Men '97 (Season 2)",
          year: 2026,
          duration: "9 Eps",
          rating: "8.4",
          type: "tv",
          tag: "rec",
          imageUrl: "./assets/mcuposters/X-Men_97_season_2.webp"
        },
        {
          rank: 158,
          title: "Spider-Man: Brand New Day",
          year: 2026,
          duration: "2h 25m",
          rating: "8.2",
          type: "film",
          tag: "ess",
          imageUrl: "./assets/mcuposters/Spider-Man_Brand_New_Day.webp",
        },
        {
          rank: 159,
          title: "VisionQuest (Season 1)",
          year: 2026,
          duration: "8 Eps",
          rating: "TBA",
          type: "tv",
          tag: "upc",
          imageUrl: "./assets/mcuposters/VisionQuest_Season_1.webp",
        },
        {
          rank: 160,
          title: "Avengers: Doomsday",
          year: 2026,
          duration: "2h 45m",
          rating: "TBA",
          type: "film",
          tag: "upc",
          imageUrl: "./assets/mcuposters/Avengers_Doomsday.webp",
        },
        {
          rank: 161,
          title: "Spider-Man: Beyond the Spider-Verse",
          year: 2027,
          duration: "TBA",
          rating: "TBA",
          type: "film",
          tag: "upc",
          imageUrl: "./assets/mcuposters/Spider-Man_beyond_the_Spider-Verse.webp"
        },
      ];


const mcuPhase1 = [
  {
    rank: 1,
    sourceRank: 19
  },
  {
    rank: 2,
    sourceRank: 20
  },
  {
    rank: 3,
    sourceRank: 23
  },
  {
    rank: 4,
    sourceRank: 24
  },
  {
    rank: 5,
    sourceRank: 26
  },
  {
    rank: 6,
    sourceRank: 27
  },
  {
    rank: 7,
    sourceRank: 28
  },
  {
    rank: 8,
    sourceRank: 30
  },
  {
    rank: 9,
    sourceRank: 32
  },
];

const mcuPhase2 = [
  {
    rank: 1,
    sourceRank: 33
  },
  {
    rank: 2,
    sourceRank: 35
  },
  {
    rank: 3,
    sourceRank: 36
  },
  {
    rank: 4,
    sourceRank: 37
  },
  {
    rank: 5,
    sourceRank: 38
  },
  {
    rank: 6,
    sourceRank: 39
  },
  {
    rank: 7,
    sourceRank: 42
  },
  {
    rank: 8,
    sourceRank: 43
  },
  {
    rank: 9,
    sourceRank: 44
  },
  {
    rank: 10,
    sourceRank: 45
  },
  {
    rank: 11,
    sourceRank: 46
  },
  {
    rank: 12,
    sourceRank: 47
  },
  {
    rank: 13,
    sourceRank: 48
  },
];

const mcuPhase3 = [
  {
    rank: 1,
    sourceRank: 50
  },
  {
    rank: 2,
    sourceRank: 51
  },
  {
    rank: 3,
    sourceRank: 52
  },
  {
    rank: 4,
    sourceRank: 54
  },
  {
    rank: 5,
    sourceRank: 55
  },
  {
    rank: 6,
    sourceRank: 56
  },
  {
    rank: 7,
    sourceRank: 58
  },
  {
    rank: 8,
    sourceRank: 59
  },
  {
    rank: 9,
    sourceRank: 60
  },
  {
    rank: 10,
    sourceRank: 61
  },
  {
    rank: 11,
    sourceRank: 62
  },
  {
    rank: 12,
    sourceRank: 64
  },
  {
    rank: 13,
    sourceRank: 67
  },
  {
    rank: 14,
    sourceRank: 68
  },
  {
    rank: 15,
    sourceRank: 69
  },
  {
    rank: 16,
    sourceRank: 70
  },
  {
    rank: 17,
    sourceRank: 71
  },
  {
    rank: 18,
    sourceRank: 73
  },
  {
    rank: 19,
    sourceRank: 74
  },
  {
    rank: 20,
    sourceRank: 75
  },
  {
    rank: 21,
    sourceRank: 76
  },
  {
    rank: 22,
    sourceRank: 77
  },
  {
    rank: 23,
    sourceRank: 78
  },
  {
    rank: 24,
    sourceRank: 79
  },
  {
    rank: 25,
    sourceRank: 81
  },
  {
    rank: 26,
    sourceRank: 83
  },
  {
    rank: 27,
    sourceRank: 84
  },
  {
    rank: 28,
    sourceRank: 85
  },
  {
    rank: 29,
    sourceRank: 86
  },
  {
    rank: 30,
    sourceRank: 89
  },
  {
    rank: 31,
    sourceRank: 91
  },
  {
    rank: 32,
    sourceRank: 92
  },
  {
    rank: 33,
    sourceRank: 93
  },
  {
    rank: 34,
    sourceRank: 94
  },
  {
    rank: 35,
    sourceRank: 95
  },
  {
    rank: 36,
    sourceRank: 96
  },
  {
    rank: 37,
    sourceRank: 98
  },
  {
    rank: 38,
    sourceRank: 100
  },
  {
    rank: 39,
    sourceRank: 101
  },
  {
    rank: 40,
    sourceRank: 102
  },
  {
    rank: 41,
    sourceRank: 103
  },
  {
    rank: 42,
    sourceRank: 104
  },
  {
    rank: 43,
    sourceRank: 106
  },
];

const mcuPhase4 = [
  {
    rank: 1,
    sourceRank: 107
  },
  {
    rank: 2,
    sourceRank: 108
  },
  {
    rank: 3,
    sourceRank: 109
  },
  {
    rank: 4,
    sourceRank: 110
  },
  {
    rank: 5,
    sourceRank: 111
  },
  {
    rank: 6,
    sourceRank: 112
  },
  {
    rank: 7,
    sourceRank: 114
  },
  {
    rank: 8,
    sourceRank: 115
  },
  {
    rank: 9,
    sourceRank: 116
  },
  {
    rank: 10,
    sourceRank: 117
  },
  {
    rank: 11,
    sourceRank: 118
  },
  {
    rank: 12,
    sourceRank: 119
  },
  {
    rank: 13,
    sourceRank: 121
  },
  {
    rank: 14,
    sourceRank: 122
  },
  {
    rank: 15,
    sourceRank: 123
  },
  {
    rank: 16,
    sourceRank: 124
  },
  {
    rank: 17,
    sourceRank: 125
  },
  {
    rank: 18,
    sourceRank: 126
  },
  {
    rank: 19,
    sourceRank: 127
  },
  {
    rank: 20,
    sourceRank: 128
  },
];

const mcuPhase5 = [
  {
    rank: 1,
    sourceRank: 129
  },
  {
    rank: 2,
    sourceRank: 130
  },
  {
    rank: 3,
    sourceRank: 132
  },
  {
    rank: 4,
    sourceRank: 133
  },
  {
    rank: 5,
    sourceRank: 134
  },
  {
    rank: 6,
    sourceRank: 135
  },
  {
    rank: 7,
    sourceRank: 136
  },
  {
    rank: 8,
    sourceRank: 137
  },
  {
    rank: 9,
    sourceRank: 140
  },
  {
    rank: 10,
    sourceRank: 141
  },
  {
    rank: 11,
    sourceRank: 142
  },
  {
    rank: 12,
    sourceRank: 145
  },
  {
    rank: 13,
    sourceRank: 146
  },
  {
    rank: 14,
    sourceRank: 147
  },
  {
    rank: 15,
    sourceRank: 148
  },
  {
    rank: 16,
    sourceRank: 149
  },
];

const mcuPhase6 = [
  {
    rank: 1,
    sourceRank: 150
  },
  {
    rank: 2,
    sourceRank: 151
  },
  {
    rank: 3,
    sourceRank: 152
  },
  {
    rank: 4,
    sourceRank: 153
  },
  {
    rank: 5,
    sourceRank: 154
  },
  {
    rank: 6,
    sourceRank: 155
  },
  {
    rank: 7,
    sourceRank: 158
  },
  {
    rank: 8,
    sourceRank: 159
  },
  {
    rank: 9,
    sourceRank: 160
  },
];

const ssuLegacy = [
  {
    rank: 1,
    sourceRank: 4
  },
  {
    rank: 2,
    sourceRank: 9
  },
  {
    rank: 3,
    sourceRank: 17
  },
  {
    rank: 4,
    sourceRank: 31
  },
  {
    rank: 5,
    sourceRank: 40
  },
  {
    rank: 6,
    sourceRank: 88
  },
  {
    rank: 7,
    sourceRank: 113
  },
  {
    rank: 8,
    sourceRank: 120
  },
  {
    rank: 9,
    sourceRank: 138
  },
  {
    rank: 10,
    sourceRank: 143
  },
  {
    rank: 11,
    sourceRank: 144
  },
  {
    rank: 12,
    sourceRank: 156
  },
];

const foxXmen = [
  {
    rank: 1,
    sourceRank: 2
  },
  {
    rank: 2,
    sourceRank: 6
  },
  {
    rank: 3,
    sourceRank: 13
  },
  {
    rank: 4,
    sourceRank: 14
  },
  {
    rank: 5,
    sourceRank: 18
  },
  {
    rank: 6,
    sourceRank: 22
  },
  {
    rank: 7,
    sourceRank: 25
  },
  {
    rank: 8,
    sourceRank: 34
  },
  {
    rank: 9,
    sourceRank: 41
  },
  {
    rank: 10,
    sourceRank: 49
  },
  {
    rank: 11,
    sourceRank: 53
  },
  {
    rank: 12,
    sourceRank: 57
  },
  {
    rank: 13,
    sourceRank: 63
  },
  {
    rank: 14,
    sourceRank: 65
  },
  {
    rank: 15,
    sourceRank: 66
  },
  {
    rank: 16,
    sourceRank: 72
  },
  {
    rank: 17,
    sourceRank: 80
  },
  {
    rank: 18,
    sourceRank: 82
  },
  {
    rank: 19,
    sourceRank: 87
  },
  {
    rank: 20,
    sourceRank: 97
  },
  {
    rank: 21,
    sourceRank: 99
  },
  {
    rank: 22,
    sourceRank: 105
  },
  {
    rank: 23,
    sourceRank: 139
  },
  {
    rank: 24,
    sourceRank: 157
  },
];

const otherLegacy = [
  {
    rank: 1,
    title: "Howard the Duck",
    year: 1986,
    duration: "1h 51m",
    rating: "4.8",
    type: "film",
    tag: "opt",
    imageUrl: "./assets/mcuposters/Howard_the_Duck.webp"
  },
  {
    rank: 2,
    title: "Nick Fury: Agent of S.H.I.E.L.D.",
    year: 1998,
    duration: "1h 30m",
    rating: "3.8",
    type: "film",
    tag: "opt",
    imageUrl: "./assets/mcuposters/Nick_Fury_Agent_of_S.H.I.E.L.D..webp"
  },
  {
    rank: 3,
    sourceRank: 1
  },
  {
    rank: 4,
    sourceRank: 3
  },
  {
    rank: 5,
    sourceRank: 5
  },
  {
    rank: 6,
    sourceRank: 7
  },
  {
    rank: 7,
    sourceRank: 8
  },
  {
    rank: 8,
    sourceRank: 10
  },
  {
    rank: 9,
    sourceRank: 11
  },
  {
    rank: 10,
    sourceRank: 12
  },
  {
    rank: 11,
    sourceRank: 15
  },
  {
    rank: 12,
    sourceRank: 16
  },
  {
    rank: 13,
    sourceRank: 21
  },
  {
    rank: 14,
    sourceRank: 29
  },
];

const spiderVerse = [
  {
    rank: 1,
    sourceRank: 90
  },
  {
    rank: 2,
    sourceRank: 131
  },
  {
    rank: 3,
    sourceRank: 161
  },
];

const majorAnim = [
  {
    rank: 1,
    title: "X-Men: The Animated Series (Season 1)",
    year: 1992,
    duration: "13 Eps",
    rating: "7.7",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/X-Men_The_Animated_Series.webp"
  },
  {
    rank: 2,
    title: "X-Men: The Animated Series (Season 2)",
    year: 1993,
    duration: "13 Eps",
    rating: "7.5",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/X-Men_The_Animated_Series.webp"
  },
  {
    rank: 3,
    title: "X-Men: The Animated Series (Season 3)",
    year: 1994,
    duration: "19 Eps",
    rating: "7.6",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/X-Men_The_Animated_Series.webp"
  },
  {
    rank: 4,
    title: "Spider-Man: The Animated Series (Season 1)",
    year: 1994,
    duration: "13 Eps",
    rating: "7.9",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Spider-Man_The_Animated_Series.webp"
  },
  {
    rank: 5,
    title: "X-Men: The Animated Series (Season 4)",
    year: 1995,
    duration: "21 Eps",
    rating: "7.5",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/X-Men_The_Animated_Series.webp"
  },
  {
    rank: 6,
    title: "Spider-Man: The Animated Series (Season 2)",
    year: 1995,
    duration: "13 Eps",
    rating: "7.8",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Spider-Man_The_Animated_Series.webp"
  },
  {
    rank: 7,
    title: "Spider-Man: The Animated Series (Season 3)",
    year: 1996,
    duration: "19 Eps",
    rating: "8.1",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Spider-Man_The_Animated_Series.webp"
  },
  {
    rank: 8,
    title: "X-Men: The Animated Series (Season 5)",
    year: 1996,
    duration: "10 Eps",
    rating: "7",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/X-Men_The_Animated_Series.webp"
  },
  {
    rank: 9,
    title: "Spider-Man: The Animated Series (Season 4)",
    year: 1997,
    duration: "11 Eps",
    rating: "7.6",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Spider-Man_The_Animated_Series.webp"
  },
  {
    rank: 10,
    title: "Spider-Man: The Animated Series (Season 5)",
    year: 1997,
    duration: "13 Eps",
    rating: "8",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Spider-Man_The_Animated_Series.webp"
  },
  {
    rank: 11,
    title: "The Spectacular Spider-Man (Season 1)",
    year: 2008,
    duration: "13 Eps",
    rating: "8.7",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/The_Spectacular_Spider-Man.webp"
  },
  {
    rank: 12,
    title: "Wolverine and the X-Men (Season 1)",
    year: 2009,
    duration: "26 Eps",
    rating: "8",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/Wolverine_and_the_X-Men.webp"
  },
  {
    rank: 13,
    title: "The Spectacular Spider-Man (Season 2)",
    year: 2009,
    duration: "13 Eps",
    rating: "8.7",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/The_Spectacular_Spider-Man.webp"
  },
  {
    rank: 14,
    title: "The Avengers: Earth's Mightiest Heroes (Season 1)",
    year: 2010,
    duration: "26 Eps",
    rating: "8.1",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/The_Avengers_Earths_Mightiest_Heroes.webp"
  },
  {
    rank: 15,
    title: "The Avengers: Earth's Mightiest Heroes (Season 2)",
    year: 2012,
    duration: "26 Eps",
    rating: "8.2",
    type: "ani",
    tag: "",
    imageUrl: "./assets/legacyanimation/The_Avengers_Earths_Mightiest_Heroes.webp"
  },
];


const chronoPart0 = [
  {
    rank: 1,
    sourceRank: 151,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 156,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 26,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 35,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 44,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 52,
    comment: ""
  },
];

const chronoPart1 = [
  {
    rank: 1,
    sourceRank: 150,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 25,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 41,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 22,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 57,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 97,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 93,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 139,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 157,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 1,
    comment: ""
  },
];

const chronoPart2 = [
  {
    rank: 1,
    sourceRank: 2,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 3,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 4,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 138,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 5,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 6,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 8,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 7,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 9,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 10,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 11,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 12,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 13,
    comment: ""
  },
  {
    rank: 14,
    sourceRank: 14,
    comment: ""
  },
  {
    rank: 15,
    sourceRank: 15,
    comment: ""
  },
  {
    rank: 16,
    sourceRank: 16,
    comment: ""
  },
  {
    rank: 17,
    sourceRank: 17,
    comment: ""
  },
  {
    rank: 18,
    sourceRank: 18,
    comment: ""
  },
  {
    rank: 19,
    sourceRank: 19,
    comment: ""
  },
  {
    rank: 20,
    sourceRank: 21,
    comment: ""
  }
];

const chronoPart3 = [
  {
    rank: 1,
    sourceRank: 23,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 20,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 24,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 27,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 28,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 29,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 30,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 32,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 31,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 33,
    comment: ""
  },
];

const chronoPart4 = [
  {
    rank: 1,
    sourceRank: 34,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 37,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 36,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 38,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 39,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 40,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 42,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 68,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 124,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 133,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 43,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 45,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 51,
    comment: ""
  },
  {
    rank: 14,
    sourceRank: 46,
    comment: ""
  },
  {
    rank: 15,
    sourceRank: 47,
    comment: ""
  },
  {
    rank: 16,
    sourceRank: 48,
    comment: ""
  },
  {
    rank: 17,
    sourceRank: 49,
    comment: ""
  },
];

const chronoPart5 = [
  {
    rank: 1,
    sourceRank: 54,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 60,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 50,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 55,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 145,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 56,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 110,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 77,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 69,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 67,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 70,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 61,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 62,
    comment: ""
  },
  {
    rank: 14,
    sourceRank: 74,
    comment: ""
  },
  {
    rank: 15,
    sourceRank: 53,
    comment: ""
  },
  {
    rank: 16,
    sourceRank: 58,
    comment: ""
  },
  {
    rank: 17,
    sourceRank: 64,
    comment: ""
  },
  {
    rank: 18,
    sourceRank: 78,
    comment: ""
  },
  {
    rank: 19,
    sourceRank: 59,
    comment: ""
  },
  {
    rank: 20,
    sourceRank: 79,
    comment: ""
  },
  {
    rank: 21,
    sourceRank: 71,
    comment: ""
  },
  {
    rank: 22,
    sourceRank: 84,
    comment: ""
  },
  {
    rank: 23,
    sourceRank: 86,
    comment: ""
  },
  {
    rank: 24,
    sourceRank: 89,
    comment: ""
  },
  {
    rank: 25,
    sourceRank: 73,
    comment: ""
  },
  {
    rank: 26,
    sourceRank: 72,
    comment: ""
  },
  {
    rank: 27,
    sourceRank: 75,
    comment: ""
  },
  {
    rank: 28,
    sourceRank: 91,
    comment: ""
  },
  {
    rank: 29,
    sourceRank: 83,
    comment: ""
  },
  {
    rank: 30,
    sourceRank: 63,
    comment: ""
  },
  {
    rank: 31,
    sourceRank: 65,
    comment: ""
  },
];

const chronoPart6 = [
  {
    rank: 1,
    sourceRank: 76,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 85,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 81,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 82,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 88,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 90,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 87,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 99,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 92,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 98,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 94,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 103,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 80,
    comment: ""
  },
];

const chronoPart7 = [
  {
    rank: 1,
    sourceRank: 96,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 131,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 161,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 104,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 105,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 106,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 95,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 109,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 134,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 111,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 136,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 142,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 152,
    comment: ""
  },
  {
    rank: 14,
    sourceRank: 107,
    comment: ""
  },
];


const chronoPart8 = [
  {
    rank: 1,
    sourceRank: 108,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 112,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 114,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 100,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 101,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 102,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 113,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 120,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 143,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 144,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 117,
    comment: ""
  },
  {
    rank: 12,
    sourceRank: 115,
    comment: ""
  },
  {
    rank: 13,
    sourceRank: 116,
    comment: ""
  },
  {
    rank: 14,
    sourceRank: 118,
    comment: ""
  },
  {
    rank: 15,
    sourceRank: 121,
    comment: ""
  },
];

const chronoPart9 = [
  {
    rank: 1,
    sourceRank: 119,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 127,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 137,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 125,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 122,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 123,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 126,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 128,
    comment: ""
  },
];

const chronoPart10 = [
  {
    rank: 1,
    sourceRank: 129,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 130,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 132,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 135,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 140,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 141,
    comment: ""
  },
  {
    rank: 7,
    sourceRank: 146,
    comment: ""
  },
  {
    rank: 8,
    sourceRank: 147,
    comment: ""
  },
  {
    rank: 9,
    sourceRank: 148,
    comment: ""
  },
  {
    rank: 10,
    sourceRank: 149,
    comment: ""
  },
  {
    rank: 11,
    sourceRank: 153,
    comment: ""
  },
];

const chronoPart11 = [
  {
    rank: 1,
    sourceRank: 154,
    comment: ""
  },
  {
    rank: 2,
    sourceRank: 159,
    comment: ""
  },
  {
    rank: 3,
    sourceRank: 158,
    comment: ""
  },
  {
    rank: 4,
    sourceRank: 155,
    comment: ""
  },
  {
    rank: 5,
    sourceRank: 66,
    comment: ""
  },
  {
    rank: 6,
    sourceRank: 160,
    comment: ""
  },
];