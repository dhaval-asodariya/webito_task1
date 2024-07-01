import logo from './logo.svg';
import './App.css';
import AddUserDrawer from './components/AddUserDrawer';
import Navbar from './components/Navbar';
import FilterForm from './components/FilterForm';
import UserTable from './components/UserTable';
import { useEffect, useState } from 'react';

function App() {
  const [isDrawerOpen,setIsDrawerOpen] = useState(true);
  const [filterQuery, setFilterQuery] = useState({
    name:'',
    gender:'',
    dob:null,
  });
  const[allData, setAllData]=useState([]);
  const [editingData, setEditingData] =  useState(null)
  const [editIndex, setEditIndex] = useState(null)
  const [ nextIndex, setNextIndex] = useState(0);
  useEffect(()=>{
    console.log('rerendered')
  },[allData])
useEffect(()=>{
  // allData.filter((data)=>{
    
  // })
},[filterQuery])
  
  function toggleDrawer( isopen){
    setIsDrawerOpen(isopen)
  }
  const handleDelete=(index)=>{
      let copyAllData = [...allData];
      copyAllData.splice(index,1);
      setAllData(copyAllData);
  }
  console.log("allData",allData)

  function handleEdit(index){
    
    const editobj = allData.filter(data=> data.id == index);
    console.log("in edit handeler",editobj[0])
    setEditingData({...editobj[0]})
    setIsDrawerOpen(true)
    setEditIndex(index)
  }
const filterData = allData.filter(data =>{
    console.log("filterQuery?.gender == data.gender",(filterQuery.gender))
  return(
    (data.firstName.toLowerCase().includes(filterQuery.name.toLowerCase()) || data.middleName.toLowerCase().includes(filterQuery.name.toLowerCase())||data.lastName.toLowerCase().includes(filterQuery.name.toLowerCase())) &&
    (filterQuery.dob == null ?true : (data.dob?.$D == filterQuery.dob?.$D && data.dob?.$M == filterQuery.dob?.$M && data.dob?.$y == filterQuery.dob?.$y) )&&
   (filterQuery.gender == ''?true: ( filterQuery.gender == data.gender))
  )
})

  // console.log("isDrawerOpen",isDrawerOpen);
  return (
    <div className="App">
      <AddUserDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} allData={allData} setAllData={setAllData} editingData={editingData} editIndex={editIndex} setEditIndex={setEditIndex} nextIndex={nextIndex} setNextIndex={setNextIndex}/>
      <Navbar toggleDrawer={toggleDrawer}/>
     <FilterForm filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
     <UserTable allData={filterData} handleDelete={handleDelete} handleEdit={handleEdit}  />
    </div>
  );
}

export default App;
