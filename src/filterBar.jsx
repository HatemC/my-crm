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
    return (
      <div className="filterbar">
        <div>
          <div className="filteroption" id="optsex" >Sexe</div>
          <button className="btn-ghost" id="optsex buttfem" onClick={this.handleClick} >Femme</button>
          <button className="btn-ghost" id="optsex butthom" onClick={this.handleClick} >Homme</button>
        </div>
        <div>
          <div className="filteroption" id="optstatmar"> Status marital</div>
          <button className="btn-ghost" id="optstatmar buttMar" onClick={this.handleClick} >Marié(e)</button>
          <button className="btn-ghost" id="optstatmar buttCel" onClick={this.handleClick} >Célibataire</button>
        </div>
        <div>
          <div className="filteroption"> Enfant à charge </div>
          <div>
            <button className="btn-ghost" id="buttPasEnf" >Pas d'enfant</button>
          </div>
          <div>
            <button className="btn-ghost" id="buttUnEnf" >Un enfant</button>
          </div>
          <div>
            <button className="btn-ghost" id="buttDeuxEnf" >Deux enfants</button>
          </div>
          <div>
            <button className="btn-ghost" id="buttTroixEnfp" >Trois enfants et +</button>
          </div>
        </div>
        <div>
        <div className="filteroption"> Situation professionnelle </div>
          <button className="btn-ghost" id="buttInd" >Indépendant</button>
          <button className="btn-ghost" id="buttSal" >Salarié</button>
        </div>
        <div className="filteroption"> Initialiser les filtres?  </div>
        <div>
          <button className="btn-flat" >OUI</button>
        </div>

      </div>
    )
  }

}

export default FilterBar;
