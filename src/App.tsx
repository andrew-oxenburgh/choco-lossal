// import './output.css'

import { useEffect, useState } from 'react'
import { BarcodeScanner } from '@thewirv/react-barcode-scanner'


const productLookup: { [key: string]: string } = {
  '9400541002371': 'Box of Fluffies - value tissues - 250 white, 2 ply',
  '9415077150748': '2 medium Colgate toothbrushes',
  '345678': 'Product C'
};

function App() {

  const [barcode, setBarcode] = useState('barcode');
  const [product, setProduct] = useState('product');
  const [expiry, setExpiry] = useState('date');

  useEffect(() => {
    setProduct(productLookup[barcode] || 'Product not found');
    // lookup product

  }, [barcode]);


  const onClick = () => {
    console.log('clicked');
  }

  const readBarcode = (barcode: string) => {
    setBarcode(barcode)
  }

  return (<div className='bg-purple'>
    <h1>Get item</h1>
    <BarcodeScanner
      onSuccess={readBarcode}
      onError={(error) => {
        if (error) {
          console.error(error.message);
        }
      }}
      onLoad={() => console.log('Video feed has loaded!')}
      containerStyle={{ width: '20em' }}
    />
    <table>
      <tr>
        <td>{barcode}</td>
      </tr>
      <tr>
        <td>{product}</td>

      </tr>
      <tr>
        <td>{expiry}</td>

      </tr>
    </table>
    <div className='bg-red order-purple rounded-lg'>
      <button
        type='button'
        onClick={onClick}
      >accept</button>
    </div>
    <button
      type='button'
      onClick={onClick}
    >cancel</button>
  </div>)

}

export default App;
