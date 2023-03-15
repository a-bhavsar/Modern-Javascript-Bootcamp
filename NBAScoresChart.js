const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

//Ugly Code

// const ulParent = document.createElement('ul');
// for(let game of warriorsGames){
//     const {homeTeam, awayTeam} = game;

//     const gameLi = document.createElement("li");

//     const {team:hTeam, points:hPoints} = homeTeam;
//     const {team:aTeam, points:aPoints} = awayTeam;

//     const teamNames = `${aTeam} @ ${hTeam}`;
//     var scoreLine;

//     if(aPoints > hPoints){
//         scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
//     }
//     else{
//         scoreLine = `${aPoints} - <b>${hPoints}</b>`;
//     }

//     const warriors = hTeam==='Golden State' ? homeTeam : awayTeam;

//     gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

//     console.log(warriors);

//     gameLi.innerHTML = `${teamNames} ${scoreLine}`;
//     ulParent.appendChild(gameLi);

// }

// document.body.prepend(ulParent);

// Efficient Code

const makeChart = (data, targetTeam) => {
  const ulParent = document.createElement("ul");
  for (let game of warriorsGames) {
    
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);


    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;

    gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === 'Golden State' ? homeTeam : awayTeam
  return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {

    const { team: hTeam, points:hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;
    var scoreLine;
    const chart2 = makeChart(warriorsGames, 'Houston');

    // document.body.prepend(chart2);

    return `${teamNames} ${scoreLine}`;
}

// const chart1 = makeChart(warriorsGames, 'Golden State');

// document.body.prepend(chart1);


// const chart2 = makeChart(warriorsGames, 'Houston');

// document.body.prepend(chart2);

const gsSection = document.querySelector('#gs');
const hsSection = document.querySelector('#hs');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hsChart = makeChart(warriorsGames, 'Houston');

gsSection.append(gsChart);
hsSection.append(hsChart);
