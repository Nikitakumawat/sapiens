import { useState } from 'react';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS_QUERY } from '../../../home/queries';
import { flattenObj } from '../../../../components/utils/responseFlatten';
import verticaldots from '../../../../assets/verticaldots.svg';
import Dropdown from '../Dropdown/index';
import './Table.css';

function Table() {  
  const [leads, setLeads] = useState([]);
  const[show, setShow] = useState(false);
  const[id, setId] = useState();
  
  const showDropdown = (item) => {
    setShow(true);
    setId(item.id);
}

  function FetchData() {
    useQuery(GET_CLIENTS_QUERY, {
      onCompleted: (res) => {
        let leadList = flattenObj(res.leads.data)
          .map(a => {
            a.id = Number(a.id);
            return a;
          })
          .sort((a, b) => (a.id - b.id));
        setLeads(leadList);
        if(leads) {
    if(id === undefined) {
      setId(leads[0].id);
    }
  }
      }
    });
  }

  FetchData();

    return (
        <div className='lead_table'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Lead date</th>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Name</th>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Email</th>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Source</th>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Last updated</th>
                        <th scope="col-md-2 col-sm-2 col-xs-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
          
            (leads.map((item) => (
              <tr key={item.id}>
                <th>{item.date}</th>
                <th>{item.Name}</th>
                <th>{item.email}</th>
                <th>{item.Source}</th>
                <th>{format(new Date(item.updatedAt),'PP')}</th>
                <div className='status'><th>{item.Status}</th></div>
                <th><img key={item.id} src={verticaldots} onClick={() => {showDropdown(item)}}/></th>
                {show ? <Dropdown key={item.id} closeDropdown={setShow} clientCurrentId={id}/> : null}
              </tr>))
            )
            
        }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
