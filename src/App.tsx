import { Inject, LevelDirective, LevelsDirective, TreeMapComponent, TreeMapLegend, TreeMapTooltip } from '@syncfusion/ej2-react-treemap';
import './App.css';
function App() {
  return (
    <div className="App">
     <TreeMapComponent dataSource={[
    { Name: 'United States',Sales: 19400},
    {Name: 'Canada',Sales: 19240},
    {Name: 'Mexico', Sales: 16980},
    {Name:"France", Sales:2421},
    {Name:"India", Sales:2073},
    {Name:"Italy", Sales:1814},
    {Name:"Brazil", Sales:1774},
    {Name:"Canada", Sales:1550}

  ]}
     weightValuePath='Sales' 
     leafItemSettings={{
      labelPath: 'Name',
      colorMapping:[
        {
           from:1,
           to:3000,
           color:'#C33764'
       },
       {
           from:3000,
           to:30000,
           color:'#742F6A'
       }
    ]
  }}rangeColorValuePath='Sales'

  legendSettings={{visible:true}}
  titleSettings={{text:'Top countries by Sales'}}
  tooltipSettings= {{
    visible: true
}}>
 
<Inject services={[TreeMapLegend,TreeMapTooltip]}/>

  {/* <LevelsDirective>
        <LevelDirective
          groupPath="States"/>
        <LevelDirective
          groupPath="States1"
           />
      </LevelsDirective> */}

     
     
     </TreeMapComponent>
    </div>
  );
}
export default App;
