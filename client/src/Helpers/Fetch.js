fetch("http://localhost:5000/games/live", { methods: "get" })
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        this.games.push(...jsonData);
    });
fetch("http://localhost:5000/games/scheduale", { methods: "get" })
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        const nonLiveGame = [];
        for (let i = 0; i < jsonData.length; i++) {
            if (
                this.games.findIndex(
                    (game) => jsonData[i].gameId === game.gameId
                ) === -1
            )
                nonLiveGame.push(jsonData[i]);
        }
        this.games.push(...nonLiveGame);
    });