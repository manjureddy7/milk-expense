import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import UserInput from './components/UserInput';
import TabularView from './components/TabluarView';

// Firestore db
import { db } from './firebase';

function App() {

  const [finalValueTable, setFinalValueTable] = useState([]);
  const [dataFromFirestore, setDataFromFirestore] = useState([])

  useEffect(() => {
    db.collection("milk").get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      setDataFromFirestore(data);
    })
  }, [finalValueTable])

  const calculatePrice = (details) => {
    const { milkPrice, fatValue, milkQuantity, commission } = details;
    let commissionAmount = (milkQuantity * commission);
    if(!details.commission) {
      commissionAmount = 0;
    }
    const finalPrice = ((milkPrice/10) * fatValue * milkQuantity) - (milkQuantity * commission);
    return {
      milkPrice,
      milkQuantity,
      fatValue,
      commissionAmount,
      finalPrice
    }
  }

  const calulateFinalFrice = (total, num) => {
    return total + num;
  }

  const milkDetails = (value) => {
    const finalValue = calculatePrice(value);
    setFinalValueTable([...finalValueTable,finalValue]);
    try{
      db.collection("milk").add({
        milkPrice: finalValue.milkPrice,
        milkQuantity: finalValue.milkQuantity,
        fatValue: finalValue.fatValue,
        commission: finalValue.commissionAmount,
        finalPrice: finalValue.finalPrice
      }).then(() => {})
    }catch(error) {
      console.log("Something went wrong while storing to database", error)
    }
  }

  const finalPrice = () => {
    const price = dataFromFirestore.map(value => value.finalPrice).reduce(calulateFinalFrice)
    return(
      <p className="final-price">Final Price: {price}</p>
    )
  }

  return ( 
    <>
      <UserInput milkDetails={milkDetails}/>
        { 
          dataFromFirestore .length > 0 && finalPrice()
        } 
      
      <TabularView finalValueTable={dataFromFirestore} />
    </>
  );
}

export default App;