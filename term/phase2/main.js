"use strict"

let toiletVisits = [
    {
    date: "5 Oct",
    numberOfToiletVisit: 7, //Daily toilet visits times
    dailyWaterIntake: 2100, //unit: ml
    dailyDietaryFiberIntake: 50,//unit:g
    toiletVisit: [{ 
        startTime: "09:31", 
        endTime: "09:44",
        duration: 13,//unit:min
        phoneUseTime: 12,//Time spent on my phone during each toilet visit
        phoneDistractionDegree: 0,//Degree of phone distraction during each toilet visit(1-10)
        emotionBeforeToilet: 5 //Emotion before each toilet visit(1-10)
    },//Single toilet visit record
     {  startTime: "12:31", 
        endTime: "12:33",
        duration: 2,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },//Single toilet visit record
      { startTime: "14:20", 
        endTime: "14:22",
        duration: 8,
        phoneUseTime: 7,
        phoneDistractionDegree: 5,
        emotionBeforeToilet: 4
    },//Single toilet visit record
      { startTime: "15:35", 
        endTime: "15:50",
        duration: 15,
        phoneUseTime: 15,
        phoneDistractionDegree: 8,
        emotionBeforeToilet: 8
    },//Single toilet visit record
      { startTime: "17:55", 
        endTime: "17:58",
        duration: 3,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 5
    },//Single toilet visit record
      { startTime: "19:01", 
        endTime: "19:05",
        duration: 4,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 5
    },//Single toilet visit record
      { startTime: "22:07", 
        endTime: "22:36",
        duration: 19,
        phoneUseTime: 18,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 9
    },//Single toilet visit record
    ]//The end of toiletVisit array (October 5th)
  }, //The end of data(October 5th)
  {
    date: "6 Oct",
    numberOfToiletVisit: 9,
    dailyWaterIntake: 1300, //unit: ml
    dailyDietaryFiberIntake: 30,
    toiletVisit: [{ startTime: "00:23", 
        endTime: "00:40",
        duration: 17,
        phoneUseTime: 17,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 4
    },{ startTime: "02:12", 
        endTime: "02:21",
        duration: 9,
        phoneUseTime: 9,
        phoneDistractionDegree: 5,
        emotionBeforeToilet: 5
    },{ startTime: "09:59", 
        endTime: "10:01",
        duration: 2,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{ startTime: "11:07", 
        endTime: "11:20",
        duration: 13,
        phoneUseTime: 10,
        phoneDistractionDegree: 5,
        emotionBeforeToilet: 6
    },{ startTime: "14:26", 
        endTime: "14:26",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{ startTime: "15:03", 
        endTime: "15:25",
        duration: 22,
        phoneUseTime: 22,
        phoneDistractionDegree: 9,
        emotionBeforeToilet: 9
    },{ startTime: "17:55", 
        endTime: "17:56",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{ startTime: "20:36", 
        endTime: "20:36",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{ startTime: "23:44", 
        endTime: "23:56",
        duration: 12,
        phoneUseTime: 10,
        phoneDistractionDegree: 7,
        emotionBeforeToilet: 4
    },
    ]//The end of toiletVisit array (October 6th)
  },//The end of data(October 6th)
  {
    date: "7 Oct",
    numberOfToiletVisit: 10,
    dailyWaterIntake: 2400,//unit: ml
    dailyDietaryFiberIntake: 30,
    toiletVisit: [{
        startTime: "02:07", 
        endTime: "02:08",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 2
    }, {startTime: "04:58", 
        endTime: "04:58",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 2
    },{startTime: "10:55", 
        endTime: "11:13",
        duration: 18,
        phoneUseTime: 18,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 7
    },{startTime: "12:45", 
        endTime: "12:55",
        duration: 10,
        phoneUseTime: 10,
        phoneDistractionDegree: 6,
        emotionBeforeToilet: 6
    },{startTime: "14:57", 
        endTime: "14:58",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{startTime: "18:00", 
        endTime: "18:02",
        duration: 2,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 3
    },{startTime: "19:10", 
        endTime: "19:10",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{startTime: "20:01", 
        endTime: "20:02",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{startTime: "21:23", 
        endTime: "21:26",
        duration: 3,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 5
    },{startTime: "22:55", 
        endTime: "22:58",
        duration: 3,
        phoneUseTime: 3,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 6
    },
    ]//The end of toiletVisit array (October 7th)
  },//The end of data(October 7th)
  {
    date: "8 Oct",
    numberOfToiletVisit: 7,
    dailyWaterIntake: 1000, //unit: ml
    dailyDietaryFiberIntake: 70,
    toiletVisit: [{
        startTime: "08:11", 
        endTime: "08:12",
        duration: 1,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 2
    },{
        startTime: "09:06", 
        endTime: "09:07",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 3
    },{
        startTime: "12:46", 
        endTime: "12:47",
        duration: 1,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 5
    },{
        startTime: "13:33", 
        endTime: "13:36",
        duration: 3,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 7
    },{
        startTime: "16:00", 
        endTime: "16:11",
        duration: 11,
        phoneUseTime: 10,
        phoneDistractionDegree: 4,
        emotionBeforeToilet: 7
    },{
        startTime: "21:16", 
        endTime: "21:35",
        duration: 19,
        phoneUseTime: 19,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 9
    },{
        startTime: "23:28", 
        endTime: "23:35",
        duration: 7,
        phoneUseTime: 7,
        phoneDistractionDegree: 6,
        emotionBeforeToilet: 7
    },
    ]//The end of toiletVisit array (October 8th)
  },//The end of data(October 8th)
  {
    date: "9 Oct",
    numberOfToiletVisit: 9,
    dailyWaterIntake: 2200, //unit: ml
    dailyDietaryFiberIntake: 30,
    toiletVisit: [{
        startTime: "00:17", 
        endTime: "00:18",
        duration: 1,
        phoneUseTime: 1,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 8
    },{
        startTime: "09:22", 
        endTime: "09:23",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{
        startTime: "09:55", 
        endTime: "10:17",
        duration: 23,
        phoneUseTime: 23,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 7
    },{
        startTime: "13:47", 
        endTime: "13:50",
        duration: 3,
        phoneUseTime: 3,
        phoneDistractionDegree: 1,
        emotionBeforeToilet: 5
    },{
        startTime: "15:55", 
        endTime: "15:56",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 4
    },{
        startTime: "18:02", 
        endTime: "18:03",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 4
    },{
        startTime: "19:45", 
        endTime: "19:46",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 6
    },{
        startTime: "20:57", 
        endTime: "21:12",
        duration: 15,
        phoneUseTime: 15,
        phoneDistractionDegree: 7,
        emotionBeforeToilet: 6
    },{
        startTime: "23:45", 
        endTime: "00:12",
        duration: 27,
        phoneUseTime: 27,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 8
    },
    ]//The end of toiletVisit array (October 9th)
  },//The end of data(October 9th)
  {
    date: "10 Oct",
    numberOfToiletVisit: 6,
    dailyWaterIntake: 1500,//unit: ml
    dailyDietaryFiberIntake: 40,
    toiletVisit: [{
        startTime: "10:54", 
        endTime: "11:06",
        duration: 12,
        phoneUseTime: 12,
        phoneDistractionDegree: 8,
        emotionBeforeToilet: 6
    },{
        startTime: "13:04", 
        endTime: "13:05",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 5
    },{
        startTime: "14:29", 
        endTime: "14:37",
        duration: 8,
        phoneUseTime: 8,
        phoneDistractionDegree: 5,
        emotionBeforeToilet: 5
    },{
        startTime: "17:56", 
        endTime: "18:02",
        duration: 6,
        phoneUseTime: 6,
        phoneDistractionDegree: 5,
        emotionBeforeToilet: 7
    },{
        startTime: "21:23", 
        endTime: "21:23",
        duration: 1,
        phoneUseTime: 0,
        phoneDistractionDegree: 0,
        emotionBeforeToilet: 8
    },{
        startTime: "23:45", 
        endTime: "00:08",
        duration: 23,
        phoneUseTime: 23,
        phoneDistractionDegree: 10,
        emotionBeforeToilet: 8
    },
    ]//The end of toiletVisit array (October 10th)
  },//The end of data(October 10th)
  {
    date: "11 Oct",
    numberOfToiletVisit: 6,
    dailyWaterIntake: 1700,//unit: ml
    dailyDietaryFiberIntake: 50,
    toiletVisit: [{
      startTime: "09:50",
      endTime: "09:51",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "12:39",
      endTime: "12:55",
      duration: 16,
      phoneUseTime: 16,
      phoneDistractionDegree: 7,
      emotionBeforeToilet: 6
    },{
      startTime: "14:10",
      endTime: "14:13",
      duration: 3,
      phoneUseTime: 2,
      phoneDistractionDegree: 1,
      emotionBeforeToilet: 6
    },{
      startTime: "17:25",
      endTime: "17:26",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "20:07",
      endTime: "20:30",
      duration: 23,
      phoneUseTime: 23,
      phoneDistractionDegree: 10,
      emotionBeforeToilet: 7
    },{
      startTime: "23:12",
      endTime: "23:15",
      duration: 3,
      phoneUseTime: 2,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },
    ]//The end of toiletVisit array (October 11th)
  },//The end of data(October 11th)
  {
    date: "12 Oct",
    numberOfToiletVisit: 8,
    dailyWaterIntake: 2100,//unit: ml
    dailyDietaryFiberIntake: 20,
    toiletVisit: [{
      startTime: "09:50",
      endTime: "10:02",
      duration: 12,
      phoneUseTime: 10,
      phoneDistractionDegree: 7,
      emotionBeforeToilet: 5
    },{
      startTime: "11:59",
      endTime: "12:15",
      duration: 16,
      phoneUseTime: 16,
      phoneDistractionDegree: 9,
      emotionBeforeToilet: 7
    },{
      startTime: "12:40",
      endTime: "12:43",
      duration: 3,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "15:33",
      endTime: "15:33",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "19:26",
      endTime: "19:27",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "20:43",
      endTime: "20:43",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "21:55",
      endTime: "22:14",
      duration: 19,
      phoneUseTime: 19,
      phoneDistractionDegree: 10,
      emotionBeforeToilet: 7
    },{
      startTime: "23:48",
      endTime: "23:52",
      duration: 4,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },
    ]//The end of toiletVisit array (October 12th)
  },//The end of data(October 12th)
  {
    date: "13 Oct",
    numberOfToiletVisit: 7,
    dailyWaterIntake: 1700,//unit: ml
    dailyDietaryFiberIntake: 40,
    toiletVisit: [
    {
      startTime: "02:30",
      endTime: "02:35",
      duration: 5,
      phoneUseTime: 5,
      phoneDistractionDegree: 2,
      emotionBeforeToilet: 6
    },{
      startTime: "11:13",
      endTime: "11:14",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "14:29",
      endTime: "14:29",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "15:55",
      endTime: "16:01",
      duration: 6,
      phoneUseTime: 5,
      phoneDistractionDegree: 1,
      emotionBeforeToilet: 6
    },{
      startTime: "19:24",
      endTime: "19:33",
      duration: 9,
      phoneUseTime: 9,
      phoneDistractionDegree: 5,
      emotionBeforeToilet: 7
    },{
      startTime: "19:51",
      endTime: "19:52",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "22:47",
      endTime: "22:50",
      duration: 3,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
     }
     ]//The end of toiletVisit array (October 13th)
  },//The end of data(October 13th)
  {
    date: "17 Oct",
    numberOfToiletVisit: 8,
    dailyWaterIntake: 2500,//unit: ml
    dailyDietaryFiberIntake: 30,
    toiletVisit: [
    {
      startTime: "08:31",
      endTime: "08:32",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 2
    },{
      startTime: "10:52",
      endTime: "10:54",
      duration: 2,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 4
    },{
      startTime: "11:36",
      endTime: "11:37",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 4
    },{
      startTime: "13:03",
      endTime: "13:10",
      duration: 7,
      phoneUseTime: 7,
      phoneDistractionDegree: 5,
      emotionBeforeToilet: 5
    },{
      startTime: "16:49",
      endTime: "17:15",
      duration: 26,
      phoneUseTime: 26,
      phoneDistractionDegree: 10,
      emotionBeforeToilet: 7
    },{
      startTime: "19:17",
      endTime: "19:18",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "20:05",
      endTime: "20:16",
      duration: 9,
      phoneUseTime: 9,
      phoneDistractionDegree: 5,
      emotionBeforeToilet: 8
    },{
      startTime: "22:19",
      endTime: "22:37",
      duration: 18,
      phoneUseTime: 18,
      phoneDistractionDegree: 8,
      emotionBeforeToilet: 8
    }
    ]//The end of toiletVisit array (October 17th)
  },//The end of data(October 17th)
  {
    date: "18 Oct",
    numberOfToiletVisit: 8,
    dailyWaterIntake: 2000,//unit: ml
    dailyDietaryFiberIntake: 70,
    toiletVisit: [{
      startTime: "00:41",
      endTime: "00:42",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 8
    },{
      startTime: "10:32",
      endTime: "10:58",
      duration: 26,
      phoneUseTime: 20,
      phoneDistractionDegree: 10,
      emotionBeforeToilet: 4
    },{
      startTime: "12:33",
      endTime: "12:35",
      duration: 2,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "15:57",
      endTime: "16:05",
      duration: 8,
      phoneUseTime: 8,
      phoneDistractionDegree: 6,
      emotionBeforeToilet: 5
    },{
      startTime: "18:11",
      endTime: "18:21",
      duration: 10,
      phoneUseTime: 10,
      phoneDistractionDegree: 6,
      emotionBeforeToilet: 6
    },{
      startTime: "19:23",
      endTime: "19:24",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "22:09",
      endTime: "22:15",
      duration: 6,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "23:34",
      endTime: "23:55",
      duration: 21,
      phoneUseTime: 20,
      phoneDistractionDegree: 10,
      emotionBeforeToilet: 7
    }
    ]//The end of toiletVisit array (October 18th)
  },//The end of data(October 18th)
  {
    date: "19 Oct",
    numberOfToiletVisit: 6,
    dailyWaterIntake: 1800,//unit: ml
    dailyDietaryFiberIntake: 60,
    toiletVisit: [{
      startTime: "10:35",
      endTime: "10:45",
      duration: 10,
      phoneUseTime: 10,
      phoneDistractionDegree: 5,
      emotionBeforeToilet: 5
    },{
      startTime: "13:13",
      endTime: "13:14",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "14:47",
      endTime: "14:50",
      duration: 3,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "18:52",
      endTime: "18:55",
      duration: 3,
      phoneUseTime: 3,
      phoneDistractionDegree: 2,
      emotionBeforeToilet: 5
    },{
      startTime: "20:16",
      endTime: "20:17",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 6
    },{
      startTime: "23:19",
      endTime: "23:31",
      duration: 12,
      phoneUseTime: 12,
      phoneDistractionDegree: 6,
      emotionBeforeToilet: 6
    }
    ]//The end of toiletVisit array (October 19th)
  },//The end of data(October 19th)
  {
    date: "20 Oct",
    numberOfToiletVisit: 6,
    dailyWaterIntake: 1700,//unit: ml
    dailyDietaryFiberIntake: 10,
    toiletVisit: [
    {
      startTime: "00:27",
      endTime: "00:28",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "10:50",
      endTime: "11:03",
      duration: 13,
      phoneUseTime: 13,
      phoneDistractionDegree: 6,
      emotionBeforeToilet: 4
    },{
      startTime: "14:58",
      endTime: "15:19",
      duration: 21,
      phoneUseTime: 19,
      phoneDistractionDegree: 8,
      emotionBeforeToilet: 6
    },{
      startTime: "17:16",
      endTime: "17:22",
      duration: 6,
      phoneUseTime: 6,
      phoneDistractionDegree: 4,
      emotionBeforeToilet: 6
    },{
      startTime: "20:03",
      endTime: "20:15",
      duration: 12,
      phoneUseTime: 10,
      phoneDistractionDegree: 5,
      emotionBeforeToilet: 6
    },{
      startTime: "23:22",
      endTime: "23:30",
      duration: 8,
      phoneUseTime: 5,
      phoneDistractionDegree: 3,
      emotionBeforeToilet: 7
    }
    ]//The end of toiletVisit array (October 20th)
  },//The end of data(October 20th)
  {
    date: "21 Oct",
    numberOfToiletVisit: 8,
    dailyWaterIntake: 1300,//unit: ml
    dailyDietaryFiberIntake: 10,
    toiletVisit: [{
      startTime: "09:57",
      endTime: "09:58",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 3
    },{
      startTime: "11:08",
      endTime: "11:34",
      duration: 16,
      phoneUseTime: 16,
      phoneDistractionDegree: 8,
      emotionBeforeToilet: 4
    },{
      startTime: "14:56",
      endTime: "14:57",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "17:15",
      endTime: "17:16",
      duration: 1,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "17:57",
      endTime: "18:02",
      duration: 4,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    },{
      startTime: "21:15",
      endTime: "21:23",
      duration: 8,
      phoneUseTime: 3,
      phoneDistractionDegree: 1,
      emotionBeforeToilet: 6
    },{
      startTime: "22:19",
      endTime: "22:21",
      duration: 2,
      phoneUseTime: 0,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 5
    },{
      startTime: "23:28",
      endTime: "23:44",
      duration: 16,
      phoneUseTime: 15,
      phoneDistractionDegree: 0,
      emotionBeforeToilet: 7
    }
  ]//The end of toiletVisit array (October 21st)
 }//The end of data(October 21st)
]//The end of toiletVisits array



console.log(JSON.stringify(toiletVisits));
showData(toiletVisits);
