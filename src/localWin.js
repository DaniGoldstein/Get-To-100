import Player from "./Player";




function WinnersTable(props) {
	let storedPlayers = JSON.parse(localStorage.getItem("users"));
if (storedPlayers==null)storedPlayers=[];
	 
 
		
	
	
	

	 if(storedPlayers.length>0) storedPlayers.sort((a,b) => {return b.gold - a.gold});
	
	return (<>
		<div>
			<h1>First place 🏆:  {storedPlayers.length > 0 ? storedPlayers[0].name : "-"}</h1>
			<h2>Second place:🥈  {storedPlayers.length > 1 ? storedPlayers[1].name : "-"}</h2>
			<h3> Third place: 🥉 {storedPlayers.length > 2 ? storedPlayers[2].name : "-"}</h3>
		</div>


	</>
	)
}

export default WinnersTable;