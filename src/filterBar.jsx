import React from "react";
import { Component } from "react";

class FilterBar extends Component {

  handleClick = (Idopt) => {
  const ids = Idopt.target.id.split(" ");
  console.log(ids[0]);
  const inputopt = ids[0];
  const inputbutt = document.getElementById(Idopt.target.id).innerHTML;
  this.props.filterFunction(inputopt,inputbutt);
  }

  render() {
    const buttonFilter = {
      optsex: { texte: "Sexe", buttfem: "Femme", butthome: "Homme" }, optstatmar: { texte: "Status marital", buttmar: "Marié(e)", buttcel: "Célibataire" },
      optenfant: { texte: "Enfant à charge", buttPasEnf: "Pas d'enfant", buttUnEnf: "Un enfant", buttDeuxEnf: "Deux enfants", buttTroixEnfp: "Trois enfants et +" },
      optsitpro: { texte: "Situation professionnelle", buttInd: "Indépendant", buttSal: "Salarié" }
    }
    const output = []
      let ind=0;
      Object.keys(buttonFilter).forEach(butt => {
        Object.keys(buttonFilter[butt]).forEach(buttdet => {
          if (buttdet === "texte") {
            ind += 1;
            return (output.push(<div className="filteroption" key={ind} id={butt} >{buttonFilter[butt][buttdet]}</div>))
          } else {
            ind += 1;
            return (output.push(<button className="btn-ghost" key={ind} id={`${butt} ${buttdet}`} onClick={this.handleClick} >{buttonFilter[butt][buttdet]}</button>))
          }
        })
      })

  return (
      <div className="filterbar">
        {output}
        <div className="filteroption"> Initialiser les filtres?  </div>
        <div>
          <button className="btn-flat" >OUI</button>
        </div>
      </div>
    )
  }
}

export default FilterBar;
