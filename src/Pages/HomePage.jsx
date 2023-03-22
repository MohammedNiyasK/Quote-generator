import React,{Fragment} from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import DropDown from '../components/DropDown/DropDown';
import Button from '../components/Button/Button';


const HomePage = () => {
  return (
    <Fragment>
        <Header />
        <Card />
        <DropDown />
        <Button />
    </Fragment>
  )
}

export default HomePage