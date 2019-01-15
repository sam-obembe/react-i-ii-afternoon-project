import React, {Component} from 'react';
import '../style.css'


class NameCard extends Component{
  constructor(){
    super();
    this.state = {
      count : 0,
      students : [
        {
          name:"Kevin",
          from:"San Antonio",
          funFact:"Has lived in Argentina",
          cityOrCountry:"Country",
          indoorsOrOutdoors:"Indoors",
          travelOrHome: "Travel everyday",
          topsOrSubway: "Top's",
          dogOrCat:"Dog"
        },
        {
          name: "Sabrina",
          from: "NYC",
          funFact: "Born in Bangladesh",
          cityOrCountry: "City",
          indoorsOrOutdoors: "Indoors",
          travelOrHome:"",
          topsOrSubway: "Subway",
          dogOrCat: "Cats - can't have dogs"
        },
        {
          name: "Samuel",
          from: "Nigeria",
          funFact: "He has been away from home since 10 boarding school",
          cityOrCountry: "City",
          indoorsOrOutdoors: " Indoors",
          travelOrHome:"Everyday",
          topsOrSubway: null,
          dogOrCat:"Cat"
        }, 
        {
          name:"Yousef",
          from:"West Africa",
          funFact:"born in a village",
          cityOrCountry:"Lots of money in the city, otherwise country",
          indoorsOrOutdoors:"Outside but not working",
          travelOrHome: "yes",
          topsOrSubway: "subway",
          dogOrCat:"Cat"
        },
        {
          name: "Uriel",
          from: "Dallas, TX",
          funFact: "Plays Soccer",
          cityOrCountry: "Inbetween, rural",
          indoorsOrOutdoors: "Outdoors",
          travelOrHome: "Yes",
          topsOrSubway: "Subway",
          dogOrCat: null
        },
        {
          name: "Jon",
          from: "Washington State",
          funFact: "Can count in Finnish (lived in Finland)",
          cityOrCountry: "The midlands",
          indoorsOrOutdoors: "indoors",
          travelOrHome: "travel",
          topsOrSubway: null,
          dogOrCat: "cat"
        },
        {
          name: 'Harry',
          from: 'Denton',
          funFact: 'Degree in music education',
          cityOrCountry: 'Country but not too far from the city',
          indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',
          travelOrHome: 'Yes, for sure',
          topsOrSubway: 'Tops sounds cool, subway is lame',
          dogOrCat: '2 dogs'
        },
        {
          name: "Blake",
          from: "Springdale Arkansas",
          funFact: "Blackbelt",
          cityOrCountry: "Country",
          indoorsOutdoors: "outdoors",
          travelOrHome: "home",
          topsOrSubway: "tops",
          dogOrCat: "dog"
        },
        {
          name: "Alec",
          from: "Plano, TX",
          funFact: "He is a musician",
          cityOrCountry: "both",
          indoorsOrOutdoors: null,
          travel: "never leave home",
          topsOrSubway: "subway",
          dogOrCat: "dog"
        },
        {
          name : "Candace",
          from: "North Dallas",
          funFact: "She can weld",
          cityOrCountry: "Country",
          indoorsOrOutdoors : "Outdoors",
          travelOrHome: "travel every day",
          topsOrSubway: "subway",
          dogOrCat: "werewolf cat"
        },
        {
          name: "Zaid",
          from: "New Jersey",
          funFact: "Plans to get engaged soon",
          cityOrCountry: "City for now, country to retire",     
          indoorsOrOutdoors: "Both, depends on mood",
          travelOrHome: "new country everday",
          dogOrCat: "unfortunately, none at the moment" 
        },
        {
          name: 'Dylan',
          from: 'Round Rock',
          funFact: 'Has been in drumline for 4 years',
          cityOrCountry: 'Country',
          indoorsOrOutdoors: 'Indoors',
          travelOrHome: 'travel',
          topsOrSubway: 'subway',
          dogOrCat: 'both'
          },
        {
          name: "Caleb",
          from:"Wisconsin",
          funFact: "Has been to Asia",
          cityOrCountry:"City",
          indoorsOrOutdoors:"Indoors",
          travelOrHome:"yes",
          topsOrSubway:"subway",
          dogOrCat:"Neghter"
        },
        {
          name: "Sandra",
          from: "San Diego, CA",
          funFacts: "Moved to 5 Difference Countries",
          cityOrCountry: "Both, depending on the weather",
          travelOrHome: "yes",
          topsOrSubway: "Subway",
          dogOrCat: "Dog"
        }
      ],
      
    }
    this.previousClick = this.previousClick.bind(this);
    this.nextClick = this.nextClick.bind(this)
    this.deleteClick = this.deleteClick.bind(this)

  }
  nextClick(){
    if(this.state.count < this.state.students.length-1){
      this.setState({count: this.state.count+1})
    }
    else{
      this.setState({count: 0})
    }
    
  }

  previousClick(){
    if(this.state.count>0){
      this.setState({count: this.state.count -1})
    }  
  }

  deleteClick(){
    let studArr = this.state.students;
    studArr.splice(this.state.count,1);
    this.setState({students:studArr})
  }


  render(){
    let count = this.state.count
    let student = this.state.students[count]

    return(
  
      <div class = "main">
        <p id = "studID">{count+1} of {this.state.students.length}</p>
        
        <h2>{student.name}</h2>

        <div id= "subtitle">
          <p>From: <span>{student.from}</span></p>
          <p>Funfact: <span>{student.funFact}</span></p>
          <h3>Would you rather..</h3>
        </div>
        
        
        <div className = "would">
          
          <p>..live in the city or country? <span>{student.cityOrCountry}</span></p>
          <p>...be indoors or outdoors? <span></span>{student.indoorsOrOutdoors}</p>
          <p>...travel every day or never leave home? <span>{student.travelOrHome}</span></p>
          <p>...eat at Top's or subway? <span>{student.topsOrSubway}</span></p>
          <p>have a dog or a cat? <span>{student.dogOrCat}</span></p>
        </div>
          
        <div id = "buttonsContainer">
          <button onClick = {this.previousClick} >Previous</button>
          <button onClick = {this.nextClick}>Next </button>
          <button onClick ={this.deleteClick}> Delete</button>
        </div>
        
        
        {/* <button> Edit</button>
        <button onClick = {this.newClick}> New </button> */}
        
      </div>
    )
  }
}

export default NameCard