    //Note the details of the game
    var totalProblems = 16;
    var totalSamples = 4;
    var problemNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var rFavouredOutcome = [-95.5, 25.4, -156.7, 29.1, -239.0, 27.9, -566.0, 31.1, -153.5, 39.9, -207.3, 38.0, -355.0, 40.8, -718.0, 39.1];
    var rNonFavouredOutcome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var rFavouredOutcomeProb = [20, 80, 15, 85, 10, 90, 5, 95, 20, 80, 15, 85, 10, 90, 5, 95];
    var sFavouredOutcome = [-20.1, 21.3, -22.5, 23.7, -24.9, 26.1, -27.3, 28.5, -29.7, 30.9, -32.1, 33.3, -34.5, 35.7, -36.9, 38.1];
    var sNonFavouredOutcome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var sFavouredOutcomeProb = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var Problem1_R = [-95.5, -95.5, -95.5, -95.5, -95.5, -95.5, -95.5, -95.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem1_S = [-20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1, -20.1]; 
    var Problem2_R = [25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 25.4, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem2_S = [21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3, 21.3];
    var Problem3_R = [-156.7, -156.7, -156.7, -156.7, -156.7, -156.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem3_S = [-22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5, -22.5];
    var Problem4_R = [29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 29.1, 0, 0, 0, 0, 0, 0];
    var Problem4_S = [23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7, 23.7];
    var Problem5_R = [-239.0, -239.0, -239.0, -239.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem5_S = [-24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9, -24.9];
    var Problem6_R = [27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 27.9, 0, 0, 0, 0];
    var Problem6_S = [26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1, 26.1];
    var Problem7_R = [-566.0, -566.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem7_S = [-27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3, -27.3];
    var Problem8_R = [31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 31.1, 0, 0];
    var Problem8_S = [28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5, 28.5];
    var Problem9_R = [-153.5, -153.5, -153.5, -153.5, -153.5, -153.5, -153.5, -153.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem9_S = [-29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7, -29.7];
    var Problem10_R = [39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 39.9, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem10_S = [30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9, 30.9];
    var Problem11_R = [-207.3, -207.3, -207.3, -207.3, -207.3, -207.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem11_S = [-32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1, -32.1];
    var Problem12_R = [38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 38.0, 0, 0, 0, 0, 0, 0];
    var Problem12_S = [33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3];
    var Problem13_R = [-355.0, -355.0, -355.0, -355.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem13_S = [-34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5, -34.5];
    var Problem14_R = [40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 40.8, 0, 0, 0, 0];
    var Problem14_S = [35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7, 35.7];
    var Problem15_R = [-718.0, -718.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var Problem15_S = [-36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9, -36.9];
    var Problem16_R = [39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 39.1, 0, 0];
    var Problem16_S = [38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1, 38.1];


    //Declare basic variables 
    var condition = [1, 2];
    var conditionCount = 0;
    var riskyOption;
    var safeOption;
    var riskyProblems = [Problem1_R, Problem2_R, Problem3_R, Problem4_R, Problem5_R, Problem6_R, Problem7_R, Problem8_R, Problem9_R, Problem10_R, Problem11_R, Problem12_R, Problem13_R, Problem14_R, Problem15_R, Problem16_R];
    var safeProblems = [Problem1_S, Problem2_S, Problem3_S, Problem4_S, Problem5_S, Problem6_S, Problem7_S, Problem8_S, Problem9_S, Problem10_S, Problem11_S, Problem12_S, Problem13_S, Problem14_S, Problem15_S, Problem16_S];
    var problemCount = 0;
    var DVorderCount = 0; 
    var DVorder = ["x1Choice","x100Choice","sliders"];
    var totalScore = 0;
    var myData = [];
    var uniqueCode; 
    var currentTime = new Date();
    var continueButton; // = document.getElementById("continueButton");
    var choices = [];;
    var choices_x1 = [];
    var choices_x100 = [];
    var outcomes = [];
    var outcomes_x1 = [];
    var outcomes_x100 = [];
    var zSoP_x1;
    var zSoP_x100;
    var rightButton; // = document.getElementById("rightButton");
    var leftOption = [];
    var leftButtonLabel = ["A", "C", "E", "G", "I", "K", "M", "O", "Q", "S", "U", "W", "Y", "AA", "AC", "AE"];
    var leftCounter_x1;
    var leftCounter_x100;
    var leftButtonIs;
    var leftOutcome1;
    var leftOutcome2;
    var leftOutcome1Prob;
    var leftOutcomeAllocation;
    var rightButton;  // = document.getElementById("rightButton");
    var rightOption = [];
    var rightButtonLabel = ["B", "D", "F", "H", "J", "L", "N", "P", "R", "T", "V", "X", "Z", "AB", "AD", "AF"];
    var rightCounter_x1;
    var rightCounter_x100;
    var rightButtonIs;
    var rightOutcome1;
    var rightOutcome2;
    var rightOutcome1Prob;
    var rightOutcomeAllocation;


    //Randomize!
    Problem1_R.sort(randomOrder);Problem1_R.sort(randomOrder);Problem1_R.sort(randomOrder);Problem1_R.sort(randomOrder);
    Problem1_S.sort(randomOrder);Problem1_S.sort(randomOrder);Problem1_S.sort(randomOrder);Problem1_S.sort(randomOrder);
    Problem2_R.sort(randomOrder);Problem2_R.sort(randomOrder);Problem2_R.sort(randomOrder);Problem2_R.sort(randomOrder);
    Problem2_S.sort(randomOrder);Problem2_S.sort(randomOrder);Problem2_S.sort(randomOrder);Problem2_S.sort(randomOrder);
    Problem3_R.sort(randomOrder);Problem3_R.sort(randomOrder);Problem3_R.sort(randomOrder);Problem3_R.sort(randomOrder);
    Problem3_S.sort(randomOrder);Problem3_S.sort(randomOrder);Problem3_S.sort(randomOrder);Problem3_S.sort(randomOrder);
    Problem4_R.sort(randomOrder);Problem4_R.sort(randomOrder);Problem4_R.sort(randomOrder);Problem4_R.sort(randomOrder);
    Problem4_S.sort(randomOrder);Problem4_S.sort(randomOrder);Problem4_S.sort(randomOrder);Problem4_S.sort(randomOrder);
    Problem5_R.sort(randomOrder);Problem5_R.sort(randomOrder);Problem5_R.sort(randomOrder);Problem5_R.sort(randomOrder);
    Problem5_S.sort(randomOrder);Problem5_S.sort(randomOrder);Problem5_S.sort(randomOrder);Problem5_S.sort(randomOrder);
    Problem6_R.sort(randomOrder);Problem6_R.sort(randomOrder);Problem6_R.sort(randomOrder);Problem6_R.sort(randomOrder);
    Problem6_S.sort(randomOrder);Problem6_S.sort(randomOrder);Problem6_S.sort(randomOrder);Problem6_S.sort(randomOrder);
    Problem7_R.sort(randomOrder);Problem7_R.sort(randomOrder);Problem7_R.sort(randomOrder);Problem7_R.sort(randomOrder);
    Problem7_S.sort(randomOrder);Problem7_S.sort(randomOrder);Problem7_S.sort(randomOrder);Problem7_S.sort(randomOrder);
    Problem8_R.sort(randomOrder);Problem8_R.sort(randomOrder);Problem8_R.sort(randomOrder);Problem8_R.sort(randomOrder);
    Problem8_S.sort(randomOrder);Problem8_S.sort(randomOrder);Problem8_S.sort(randomOrder);Problem8_S.sort(randomOrder);
    Problem9_R.sort(randomOrder);Problem9_R.sort(randomOrder);Problem9_R.sort(randomOrder);Problem9_R.sort(randomOrder);
    Problem9_S.sort(randomOrder);Problem9_S.sort(randomOrder);Problem9_S.sort(randomOrder);Problem9_S.sort(randomOrder);
    Problem10_R.sort(randomOrder);Problem10_R.sort(randomOrder);Problem10_R.sort(randomOrder);Problem10_R.sort(randomOrder);
    Problem10_S.sort(randomOrder);Problem10_S.sort(randomOrder);Problem10_S.sort(randomOrder);Problem10_S.sort(randomOrder);
    Problem11_R.sort(randomOrder);Problem11_R.sort(randomOrder);Problem11_R.sort(randomOrder);Problem11_R.sort(randomOrder);
    Problem11_S.sort(randomOrder);Problem11_S.sort(randomOrder);Problem11_S.sort(randomOrder);Problem11_S.sort(randomOrder);
    Problem12_R.sort(randomOrder);Problem12_R.sort(randomOrder);Problem12_R.sort(randomOrder);Problem12_R.sort(randomOrder);
    Problem12_S.sort(randomOrder);Problem12_S.sort(randomOrder);Problem12_S.sort(randomOrder);Problem12_S.sort(randomOrder);
    Problem13_R.sort(randomOrder);Problem13_R.sort(randomOrder);Problem13_R.sort(randomOrder);Problem13_R.sort(randomOrder);
    Problem13_S.sort(randomOrder);Problem13_S.sort(randomOrder);Problem13_S.sort(randomOrder);Problem13_S.sort(randomOrder);
    Problem14_R.sort(randomOrder);Problem14_R.sort(randomOrder);Problem14_R.sort(randomOrder);Problem14_R.sort(randomOrder);
    Problem14_S.sort(randomOrder);Problem14_S.sort(randomOrder);Problem14_S.sort(randomOrder);Problem14_S.sort(randomOrder);
    Problem15_R.sort(randomOrder);Problem15_R.sort(randomOrder);Problem15_R.sort(randomOrder);Problem15_R.sort(randomOrder);
    Problem15_S.sort(randomOrder);Problem15_S.sort(randomOrder);Problem15_S.sort(randomOrder);Problem15_S.sort(randomOrder);
    Problem16_R.sort(randomOrder);Problem16_R.sort(randomOrder);Problem16_R.sort(randomOrder);Problem16_R.sort(randomOrder);
    Problem16_S.sort(randomOrder);Problem16_S.sort(randomOrder);Problem16_S.sort(randomOrder);Problem16_S.sort(randomOrder);
    condition.sort(randomOrder);condition.sort(randomOrder);condition.sort(randomOrder);condition.sort(randomOrder);
    problemNumber.sort(randomOrder);problemNumber.sort(randomOrder);problemNumber.sort(randomOrder);problemNumber.sort(randomOrder);
    DVorder.sort(randomOrder);DVorder.sort(randomOrder);
    function randomOrder(){
        return (Math.round(Math.random())-0.5); 
    }


    //Behaviour to occur on page load
    window.onload = start;

    function start() {
        // initialise the buttons
        leftButton = document.getElementById("leftButton");
        rightButton = document.getElementById("rightButton");
        continueButton = document.getElementById("continueButton");

        //Present outcome when user clicks the left button
        leftButton.onclick = playedLeft;
        //Present outcome when user clicks the left button
        rightButton.onclick = playedRight;
        //Behaviour when user clicks the "Continue" button
        continueButton.onclick = continueTask;

        allocateProblem();
        generateRandomCode();
    }
    
    
    //Set up each new problem to display
    function allocateProblem() { 
        if (problemCount == totalProblems/2) {
            //then half of the problems are done and the person should switch between D and E
            conditionCount++;
        } 
        totalScore = 0;
        leftCounter = 0;
        leftCounter_x1 = 0;
        leftCounter_x100 = 0;
        rightCounter = 0;
        rightCounter_x1 = 0;
        rightCounter_x100 = 0;
        choices = [];
        choices_x1 = [];
        choices_x100 = [];
        outcomes = [];
        outcomes_x1 = [];
        outcomes_x100 = [];
        DVorderCount = 0;
        initiateSliders();
        DVorder.sort(randomOrder);
        displayedComponents();
        
        //Fill in the details of the problem
        document.getElementById("labelSoP1").innerHTML = ("Strong preference for " + leftButtonLabel[problemCount]);
        document.getElementById("labelSoP2").innerHTML = ("Moderate preference for " + leftButtonLabel[problemCount]);
        document.getElementById("labelSoP3").innerHTML = ("Weak preference for " + leftButtonLabel[problemCount]);
        document.getElementById("labelSoP4").innerHTML = ("Indifferent");
        document.getElementById("labelSoP5").innerHTML = ("Weak preference for " + rightButtonLabel[problemCount]);
        document.getElementById("labelSoP6").innerHTML = ("Moderate preference for " + rightButtonLabel[problemCount]);
        document.getElementById("labelSoP7").innerHTML = ("Strong preference for " + rightButtonLabel[problemCount]);   
        
        if (problemNumber[problemCount] % 2 == 1) {
            leftButtonIs = "R";
            leftOutcome1 = rFavouredOutcome[problemNumber[problemCount]];
            leftOutcome2 = rNonFavouredOutcome[problemNumber[problemCount]];
            leftOutcome1Prob = rFavouredOutcomeProb[problemNumber[problemCount]];
            document.getElementById("leftOptionTitle").innerHTML = ("Option " + leftButtonLabel[problemCount]); 
            document.getElementById("leftOption").innerHTML = (leftOutcome1Prob + '% chance of ' + leftOutcome1 + ',<br /> otherwise ' + leftOutcome2);
            leftButton.innerHTML = (leftOutcome1Prob + '% chance of ' + leftOutcome1 + ',<br /> otherwise ' + leftOutcome2);
            rightButtonIs = "S";
            rightOutcome1 = sFavouredOutcome[problemNumber[problemCount]];
            rightOutcome2 = sNonFavouredOutcome[problemNumber[problemCount]];
            rightOutcome1Prob = sFavouredOutcomeProb[problemNumber[problemCount]];
            document.getElementById("rightOptionTitle").innerHTML = ("Option " + rightButtonLabel[problemCount]);
            document.getElementById("rightOption").innerHTML = (rightOutcome1Prob + '% chance of ' + rightOutcome1 + '<br />  ' + '&nbsp;');
            rightButton.innerHTML = (rightOutcome1Prob + '% chance of ' + rightOutcome1 + '<br />  ' + '&nbsp;');
        } else {
            rightButtonIs = "R";
            rightOutcome1 = rFavouredOutcome[problemNumber[problemCount]];
            rightOutcome2 = rNonFavouredOutcome[problemNumber[problemCount]];
            rightOutcome1Prob = rFavouredOutcomeProb[problemNumber[problemCount]];
            document.getElementById("rightOptionTitle").innerHTML = ("Option " + rightButtonLabel[problemCount]);
            document.getElementById("rightOption").innerHTML = (rightOutcome1Prob + '% chance of ' + rightOutcome1 + ',<br /> otherwise ' + rightOutcome2);
            rightButton.innerHTML = (rightOutcome1Prob + '% chance of ' + rightOutcome1 + ',<br /> otherwise ' + rightOutcome2);
            leftButtonIs = "S";
            leftOutcome1 = sFavouredOutcome[problemNumber[problemCount]];
            leftOutcome2 = sNonFavouredOutcome[problemNumber[problemCount]];
            leftOutcome1Prob = sFavouredOutcomeProb[problemNumber[problemCount]];
            document.getElementById("leftOptionTitle").innerHTML = ("Option " + leftButtonLabel[problemCount]); 
            document.getElementById("leftOption").innerHTML = (leftOutcome1Prob + '% chance of ' + leftOutcome1 + '<br />  ' + '&nbsp;');
            leftButton.innerHTML = (leftOutcome1Prob + '% chance of ' + leftOutcome1 + '<br />  ' + '&nbsp;');
        }
        leftButton.innerHTML = "Option "+leftButtonLabel[problemCount];
        leftButton.disabled = false;
        rightButton.innerHTML = "Option "+rightButtonLabel[problemCount];
        rightButton.disabled = false;
        riskyOption = riskyProblems[problemNumber[problemCount]];
        safeOption = safeProblems[problemNumber[problemCount]];
        document.getElementById("currentScore").innerHTML = roundNumber(totalScore, 1);
        alert("After clicking 'OK' you will see a new choice scenario between Option "+leftButtonLabel[problemCount]+" and Option "+rightButtonLabel[problemCount]+". The next few questions will refer to these two options.");
    }


    //Determine which objects are going to be displayed
    function displayedComponents() {     
        leftButton.disabled = false;
        rightButton.disabled = false;
        document.getElementById("labelSoP1").style.visibility = 'visible';
        document.getElementById("labelSoP2").style.visibility = 'visible';
        document.getElementById("labelSoP3").style.visibility = 'visible';
        document.getElementById("labelSoP5").style.visibility = 'visible';
        document.getElementById("labelSoP6").style.visibility = 'visible';
        document.getElementById("labelSoP7").style.visibility = 'visible';
        document.getElementById("SoP1").style.visibility = 'visible';
        document.getElementById("SoP2").style.visibility = 'visible';
        document.getElementById("SoP3").style.visibility = 'visible';
        document.getElementById("SoP5").style.visibility = 'visible';
        document.getElementById("SoP6").style.visibility = 'visible';
        document.getElementById("SoP7").style.visibility = 'visible';
              
        if (condition[conditionCount] == 2 && leftCounter + rightCounter < totalSamples) {
            //the person is in the E condition and they are sampling
            document.getElementById("Options").style.display = "none";
            document.getElementById("x40Choice").style.display = "block";                   
            document.getElementById("x1Choice").style.display = "none";
            document.getElementById("x100Choice").style.display = "none";
            document.getElementById("Choices").style.display = "block";
            document.getElementById("SoP").style.display = "none";
            document.getElementById("sliderBox").style.display = "none";
            document.getElementById("continue").style.display = "none";
        } else {
            //the person is in the D condition or the E condition and have already finished samplimg
            switch (DVorder[DVorderCount]) {
                    case "x1Choice":
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none"; 
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "block";
                        document.getElementById("x100Choice").style.display = "none";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "none";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "none";
                        break; 
                    case "x100Choice":
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none"; 
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "none";
                        document.getElementById("x100Choice").style.display = "block";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "none";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "none";
                        break;
                    case "sliders":
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                            document.getElementById("Choices").style.display = "none";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none";
                            document.getElementById("Choices").style.display = "none";
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "none";
                        document.getElementById("x100Choice").style.display = "none";
                        document.getElementById("SoP").style.display = "none";
                        document.getElementById("sliderBox").style.display = "block";
                        document.getElementById("continue").style.display = "block";
                        break;
                }
        }
    }
    
    
    //This code resets the slider to starting position
    function initiateSliders() {
        $(document).ready(function() {
        $( "#slider" ).slider({ 
			value:50,
			min: 0,
			max: 100,
			step: 1,
			slide: function( event, ui ) {
				leftOutcomeAllocation = 100-ui.value
                rightOutcomeAllocation = ui.value
                $( "#sliderAmountLeft" ).val(leftButtonLabel[problemCount] + ": " + leftOutcomeAllocation);
                $( "#sliderAmountRight" ).val(rightButtonLabel[problemCount] + ": " + rightOutcomeAllocation);
			}
		}); 
        
        $( "#sliderAmountLeft" ).val(leftButtonLabel[problemCount] + ": 0"  );
        $( "#sliderAmountRight" ).val(rightButtonLabel[problemCount] + ": 0" );
              
        handle = $('#slider A.ui-slider-handle');
        handle.addClass("ui-slider-handle2");
        handle2 = $('#slider A.ui-state-default');
        handle2.addClass("ui-state-default2"); 
         
        $( "#slider" ).slider({
            start: function(event, ui) {
            handle.removeClass("ui-slider-handle2");
            handle.removeClass("ui-state-default2");
            }
        });    
	   }); 
    }
    

    //Generates a random code for the user
    function generateRandomCode() {
        var thenumber = '';
        var thenumber1 = '';
        var thenumber2 = '';
        var thenumber3 = '';
        var thenumber4 = '';
        var thenumber5 = '';
        var randomnum = '';
        var randomnum2 = '';
        var outcome = '';
        var codetype = '';
        chars = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        thenumber = chars[Math.floor(Math.random() * chars.length)];
        thenumber1 = chars[Math.floor(Math.random() * chars.length)];
        thenumber2 = chars[Math.floor(Math.random() * chars.length)];
        thenumber3 = chars[Math.floor(Math.random() * chars.length)];
        thenumber4 = chars[Math.floor(Math.random() * chars.length)];
        thenumber5 = chars[Math.floor(Math.random() * chars.length)];
        randomnum = Math.floor(Math.random() * 500000);
        randomnum2 = Math.floor(Math.random() * 100);
        randomnum3 = Math.floor(Math.random() * 1000000);
        codetype = Math.floor(Math.random() * 3);
        if (codetype == "0") {
            uniqueCode = '' + randomnum3 + thenumber + thenumber1 + thenumber2 + randomnum + thenumber3 + thenumber4 + randomnum2 + thenumber5;
        }
        if (codetype == "1") {
            uniqueCode = '' + randomnum3 + thenumber2 + thenumber1 + thenumber + randomnum + thenumber3 + thenumber4 + randomnum2;
        }
        if (codetype == "2") {
            uniqueCode = '' + thenumber5 + thenumber4 + thenumber3 + randomnum + thenumber2 + randomnum2 + thenumber1 + randomnum3 + thenumber;
        }
    }

    function playedLeft() {
        leftButton.disabled = true;
        rightButton.disabled = true;
        if (condition[conditionCount] == 2 && leftCounter + rightCounter < totalSamples) {
            //the person is in the E condition and they are sampling
            if (problemNumber[problemCount] % 2 == 1) {
                //leftButtonIs = "R" and rightButtonIs = "S"
                leftOption = riskyOption[leftCounter + rightCounter];
                leftButton.innerHTML = leftOption;
                rightOption = safeOption[leftCounter + rightCounter];
                rightButton.innerHTML = rightOption;
                outcomes.push(leftOption);
                choices.push("R");
            } else {
                //leftButtonIs = "S" and rightButtonIs = "R"
                leftOption = safeOption[leftCounter + rightCounter];
                leftButton.innerHTML = leftOption;
                rightOption = riskyOption[leftCounter + rightCounter];
                rightButton.innerHTML = rightOption;
                outcomes.push(leftOption);
                choices.push("S");
            }
            totalScore += leftOption;
            leftCounter++;
            setTimeout("outcomeShown()", 1500);
            } else {
                //the person has finished sampling and is making choices
                var randomNumber = Math.floor(Math.random() * 101);
                if (randomNumber < leftOutcome1Prob) {
                    leftOption = leftOutcome1;
                } else {
                    leftOption = leftOutcome2;
                }
                switch (DVorder[DVorderCount]) {
                    case "x1Choice":
                        choices_x1.push(leftButtonIs);
                        outcomes_x1.push(leftOption);
                        leftCounter_x1++;
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none";
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "block";
                        document.getElementById("x100Choice").style.display = "none";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "block";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "block";
                        document.getElementById("labelSoP5").style.visibility = 'hidden';
                        document.getElementById("labelSoP6").style.visibility = 'hidden';
                        document.getElementById("labelSoP7").style.visibility = 'hidden';
                        document.getElementById("SoP5").style.visibility = 'hidden';
                        document.getElementById("SoP6").style.visibility = 'hidden';
                        document.getElementById("SoP7").style.visibility = 'hidden';
                        break;
                    case "x100Choice":
                        choices_x100.push(leftButtonIs);
                        outcomes_x100.push(leftOption);
                        leftCounter_x100++;
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none";
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "none";
                        document.getElementById("x100Choice").style.display = "block";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "block";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "block";
                        document.getElementById("labelSoP5").style.visibility = 'hidden';
                        document.getElementById("labelSoP6").style.visibility = 'hidden';
                        document.getElementById("labelSoP7").style.visibility = 'hidden';
                        document.getElementById("SoP5").style.visibility = 'hidden';
                        document.getElementById("SoP6").style.visibility = 'hidden';
                        document.getElementById("SoP7").style.visibility = 'hidden';
                        break;
                }
        }
    }

    function playedRight() {
        leftButton.disabled = true;
        rightButton.disabled = true;
        if (condition[conditionCount] == 2 && leftCounter + rightCounter < totalSamples) {
            //the person is in the E condition and they are sampling
            if (problemNumber[problemCount] % 2 == 1) {
                //leftButtonIs = "R" and rightButtonIs = "S"
                leftOption = riskyOption[leftCounter + rightCounter];
                leftButton.innerHTML = leftOption;
                rightOption = safeOption[leftCounter + rightCounter];
                rightButton.innerHTML = rightOption;
                outcomes.push(rightOption);
                choices.push("S");
            } else {
                //leftButtonIs = "S" and rightButtonIs = "R"
                leftOption = safeOption[leftCounter + rightCounter];
                leftButton.innerHTML = leftOption;
                rightOption = riskyOption[leftCounter + rightCounter];
                rightButton.innerHTML = rightOption;
                outcomes.push(rightOption);
                choices.push("R");
            }
            totalScore += rightOption;
            rightCounter++;
            setTimeout("outcomeShown()", 1500);
            } else {
                //the person has finished sampling and is making choices
                var randomNumber = Math.floor(Math.random() * 101);
                if (randomNumber < rightOutcome1Prob) {
                    rightOption = rightOutcome1;
                } else {
                    rightOption = rightOutcome2;
                }
                switch (DVorder[DVorderCount]) {
                    case "x1Choice":
                        choices_x1.push(rightButtonIs);
                        outcomes_x1.push(rightOption);
                        rightCounter_x1++;
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none";
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "block";
                        document.getElementById("x100Choice").style.display = "none";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "block";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "block";
                        document.getElementById("labelSoP1").style.visibility = 'hidden';
                        document.getElementById("labelSoP2").style.visibility = 'hidden';
                        document.getElementById("labelSoP3").style.visibility = 'hidden';
                        document.getElementById("SoP1").style.visibility = 'hidden';
                        document.getElementById("SoP2").style.visibility = 'hidden';
                        document.getElementById("SoP3").style.visibility = 'hidden';
                        break;
                    case "x100Choice":
                        choices_x100.push(rightButtonIs);
                        outcomes_x100.push(rightOption);
                        rightCounter_x100++;
                        if (condition[conditionCount] == 1) {
                            //the person is in the D condition
                            document.getElementById("Options").style.display = "block";
                        } else {
                            //the person is in the E condition
                            document.getElementById("Options").style.display = "none";
                        } 
                        document.getElementById("x40Choice").style.display = "none";
                        document.getElementById("x1Choice").style.display = "none";
                        document.getElementById("x100Choice").style.display = "block";
                        document.getElementById("Choices").style.display = "block";
                        document.getElementById("SoP").style.display = "block";
                        document.getElementById("sliderBox").style.display = "none";
                        document.getElementById("continue").style.display = "block";
                        document.getElementById("labelSoP1").style.visibility = 'hidden';
                        document.getElementById("labelSoP2").style.visibility = 'hidden';
                        document.getElementById("labelSoP3").style.visibility = 'hidden';
                        document.getElementById("SoP1").style.visibility = 'hidden';
                        document.getElementById("SoP2").style.visibility = 'hidden';
                        document.getElementById("SoP3").style.visibility = 'hidden';
                        break; 
                }
        }
    }        
    

    //Behaviour after user has been shown an outcome
    function outcomeShown() {
            document.getElementById('currentScore').innerHTML = roundNumber(totalScore, 1);
            leftButton.innerHTML = "Option "+leftButtonLabel[problemCount];
            leftButton.disabled = false;
            rightButton.innerHTML = "Option "+rightButtonLabel[problemCount];
            rightButton.disabled = false;
            if (leftCounter + rightCounter == totalSamples) {
                //The sampling phase is over.
                alert("Great! Now we would like to ask you some more questions about this particular choice scenario.")
                displayedComponents();
            }
    }
    
   
    function continueTask() {
            switch (DVorder[DVorderCount]) {
            case "x1Choice":
                //Collect  strength of preference for the single-play choice
                zSoP_x1 = "";
                for (i = 0; i < document.data.SoP.length; i++) {
                    //look at each of the possible responses.
                    if (document.data.SoP[i].checked) {
                        //then a button has been checked and we can record which one; however, we need to make sure that 1=Strong preference for Safe and 7=Strong preference for Risky.
                        zSoP_x1 = document.data.SoP[i].value;
                        if (problemNumber[problemCount] % 2 == 1) {
                            //leftButtonIs Risky and rightButtonIs Safe so need to reverse SoP value.
                            if (zSoP_x1 == "1") {
                                zSoP_x1 = 7;
                            } else if (zSoP_x1 == "2") {
                                zSoP_x1 = 6;
                            } else if (zSoP_x1 == "3") {
                                zSoP_x1 = 5;
                            } else if (zSoP_x1 == "5") {
                                zSoP_x1 = 3;
                            } else if (zSoP_x1 == "6") {
                                zSoP_x1 = 2;
                            } else if (zSoP_x1 == "7") {
                                zSoP_x1 = 1;
                            }
                        }
                        resetSoP();
                        DVorderCount++;
                        if (DVorderCount > 2) {
                            //then the person has answered all three components and should move on
                            nextProblem();
                            } else {
                                displayedComponents(); 
                        } 
                    }
                }
                if (zSoP_x1 == "") {
                    //a button has NOT been checked and we can issue an alert.
                    alert("Please indicate the strength of your preference!");
                }
                break;
            case "x100Choice":
                //Collect  strength of preference for the multi-play choice
                zSoP_x100 = "";
                for (i = 0; i < document.data.SoP.length; i++) {
                    //look at each of the possible responses.
                    if (document.data.SoP[i].checked) {
                        //then a button has been checked and we can record which one; however, we need to make sure that 1=Strong preference for Safe and 7=Strong preference for Risky.
                        zSoP_x100 = document.data.SoP[i].value;
                        if (problemNumber[problemCount] % 2 == 1) {
                            //leftButtonIs Risky and rightButtonIs Safe so need to reverse SoP value.
                            if (zSoP_x100 == "1") {
                                zSoP_x100 = 7;
                            } else if (zSoP_x100 == "2") {
                                zSoP_x100 = 6;
                            } else if (zSoP_x100 == "3") {
                                zSoP_x100 = 5;
                            } else if (zSoP_x100 == "5") {
                                zSoP_x100 = 3;
                            } else if (zSoP_x100 == "6") {
                                zSoP_x100 = 2;
                            } else if (zSoP_x100 == "7") {
                                zSoP_x100 = 1;
                            }
                        }
                        resetSoP();
                        DVorderCount++;
                        if (DVorderCount > 2) {
                            //then the person has answered all three components and should move on
                            nextProblem();
                            } else {
                                displayedComponents(); 
                        } 
                    }
                }
                if (zSoP_x100 == "") {
                    //a button has NOT been checked and we can issue an alert.
                    alert("Please indicate the strength of your preference!");
                }
                break;
            case "sliders":
                //Collect allocation for the 100 plays
                if ($(handle).is('.ui-slider-handle2')) {
                    //then they have not attempted to make an allocation
                    alert("Please click on the slider bar to activate it and then make your allocation!");
                    return
                    }
                handle.addClass("ui-slider-handle2");
                handle2.addClass("ui-state-default2");
                $( "#amountLeft" ).val( "A: 0"  );
                $( "#amountRight" ).val( "B: 0" );
                DVorderCount++;
                if (DVorderCount > 2) {
                    //then the person has answered all three components and should move on
                    nextProblem();
                    } else {
                        displayedComponents(); 
                } 
                break;
            }
    }
    
    
    //function to uncheck the SoP buttons
    function resetSoP() {
        var optionsSoP = document.getElementsByName("SoP");
        for (var i = 0; i < optionsSoP.length; i++) {
            if (optionsSoP[i].checked) {
                optionsSoP[i].checked = false;
            }
        }
    }


    //Collects data and resets for next problem, or ends
    function nextProblem() {
        var currentProblem = (problemNumber[problemCount] + 1);
        if (problemNumber[problemCount] % 2 == 1) {
            //leftButtonIs = "R" and rightButtonIs = "S";
            var riskySamples = leftCounter;
            var riskySamples_x1 = leftCounter_x1;
            var riskySamples_x100 = leftCounter_x100;
            var safeSamples = rightCounter;
            var safeSamples_x1 = rightCounter_x1;
            var safeSamples_x100 = rightCounter_x100;
            var riskyAllocation = leftOutcomeAllocation;
            var safeAllocation = rightOutcomeAllocation;
        } else {
            //leftButtonIs = "S" and rightButtonIs = "R";
            var riskySamples = rightCounter;
            var riskySamples_x1 = rightCounter_x1;
            var riskySamples_x100 = rightCounter_x100;
            var riskySamples = rightCounter;
            var safeSamples_x1 = leftCounter_x1;
            var safeSamples_x100 = leftCounter_x100;
            var riskyAllocation = rightOutcomeAllocation
            var safeAllocation = leftOutcomeAllocation
        }

        //Categorise the order that was used        
        switch (DVorder.toString()) {
        case "x1Choice,x100Choice,sliders":
            var componentOrder = "1";
            break;
        case "x1Choice,sliders,x100Choice":
            var componentOrder = "2";
            break;
        case "x100Choice,x1Choice,sliders":
            var componentOrder = "3";
            break; 
        case "x100Choice,sliders,x1Choice":
            var componentOrder = "4";
            break;
        case "sliders,x100Choice,x1Choice":
            var componentOrder = "5";
            break; 
        case "sliders,x1Choice,x100Choice":
            var componentOrder = "6";
            break;
        } 
        problemCount++;
        //mtData headings: Unique_Code, Current_Time, Country, Gender, Age, Education, Employment_Status, Marital_Status, Yearly_Income, Condition (1=D, 2=E), Problem, Component_Order, Problem_Order, Total_Samples, R_Allocation, R_Samples, R_x1_Choice, R_x1_SoP, R_x100_Choice, R_x100_SoP, Outcomes, Choices, x1_Outcomes, x1_Choices, x100_Outcomes, x100_Choices
        myData.push(uniqueCode, currentTime, condition[conditionCount], currentProblem, componentOrder, problemCount, totalSamples, riskyAllocation, riskySamples, riskySamples_x1, zSoP_x1, riskySamples_x100, zSoP_x100, outcomes, choices, outcomes_x1, choices_x1, outcomes_x100, choices_x100);
        if (problemCount < totalProblems) {
            //Setup the next problem
            allocateProblem();
        } else {
            //The game has ended: user and data directed to the end page
            myData.push(roundNumber(totalScore/totalSamples, 1));
            sendData();
        }
    }


    //function to round numbers
    function roundNumber(num, dec) { //num = number to be rounded; dec =  number of decimal places
        var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
        return result;
    }
    
   	
    //funtion to wait around for a little while
    function sleep(ms) {
		var dt = new Date();
		dt.setTime(dt.getTime() + ms);
		while (new Date().getTime() < dt.getTime());
	}


    //Send data off to the 'End' page
    function sendData() {
        var packed = ""; // Initialize packed or we get the word 'undefined'
        for (i = 0;
        (i < myData.length); i++) {
            if (i > 0) {
                packed += ",";
            }
            packed += escape(myData[i]);
        }
        document.data.data.value = packed;
        document.data.submit();
    }
