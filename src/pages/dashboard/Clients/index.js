import { useState } from 'react';
import Table from './Table';
import TabList from './TabList/index';
import Modal from './Modal/index';
import './styles.css';
import CollapisbleSidebar from '../CollapsibleSidebar';

function Clients() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='client row m-0 p-0'>
      <div className='col-lg-3 col-md-2 col-sm-1 col-xs-1'>
        <CollapisbleSidebar />
      </div>
      <div className="col-lg-9 col-md-10 col-sm-11 col-xs-11">
        <p className="h1 mr-5">Clients</p>
        <TabList />
        <button type="button" className="btn btn-light" onClick={() => { setShowModal(true) }}>Add Clients</button>
        <Table />
        {showModal && <Modal closeModal={setShowModal} />}
      </div>
    </div>
  )
}

export default Clients;
