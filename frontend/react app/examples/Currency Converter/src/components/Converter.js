import React, { useEffect, useState } from 'react';
import { Card, Form, Input, Select } from 'antd'
import axios from 'axios';
import { RiCoinsLine } from 'react-icons/ri';

function Converter() {

  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";

  const [cryptoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");
  const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
  const [secondSelect, setSecondSelect] = useState(defaultSecondSelectValue);
  const [result, setResult] = useState("0");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

    if(cryptoList.length === 0) return;

    const firstSelectRate = cryptoList.find((item) => {
        return item.value === firstSelect;
    }).rate;

    const secondSelectRate = cryptoList.find((item) => {
      return item.value === secondSelect;
    }).rate;

    const resultValue = (inputValue * secondSelectRate) / firstSelectRate;

    setResult(resultValue.toFixed(6));

  }, [inputValue, firstSelect, secondSelect])
  
  async function fetchData() {
    try {
      const { data } = await axios.get(apiUrl);

      const datas = data.rates;

      const tempArray = Object.entries(datas).map(item => {
        return {
          value: item[1].name,
          label: item[1].name,
          rate: item[1].value
        }
      });

      setCryptoList(tempArray);
      // console.log(tempArray)

    } catch (e) {
      console.log(e, "An error occured while loading data from exchange rate API");
    }
  }

  return (
    <div className='container'>
         <Card className='crypto-card' title={<h1> <RiCoinsLine className='icon'/> Crypto Converter</h1>}>
            <Form size='large'>
              <Form.Item>
                <Input onChange={(event) => setInputValue(event.target.value)}/>
              </Form.Item>
            </Form>
            <div className='select-flex'>
            <Select 
            style={{width: "200px"}} 
            options={cryptoList} 
            defaultValue={defaultFirstSelectValue}
            onChange={(value) => setFirstSelect(value)}/>
            <Select 
            style={{width: "200px"}} 
            options={cryptoList} 
            defaultValue={defaultSecondSelectValue}
            onChange={(value) => setSecondSelect(value)}/>
            </div>
            <p>{inputValue} {firstSelect} = {result} {secondSelect}</p>
         </Card>
    </div>
  )
}

export default Converter