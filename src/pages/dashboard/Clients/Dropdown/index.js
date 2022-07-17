import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_LEAD } from '../../../home/queries';
import { GET_CLIENTS_QUERY } from '../../../home/queries';
import './styles.css';
import UpdateClientModal from '../UpdateClientModal/index';
import ViewModal from '../ViewModal';
import closeIcon from '../../../../assets/closeIcon.svg';

function Dropdown({ index, closeModal, closeDropdown, clientCurrentId }) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [deleteLead] = useMutation(DELETE_LEAD);

    const {
        data: getClients,
        refetch: refetchUpdateLead,
    } = useQuery(GET_CLIENTS_QUERY);

    const close = () => {
        closeDropdown(false);
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const id = clientCurrentId;

        const createDetailsResponse = await deleteLead({ variables: { id } });

        if (!createDetailsResponse.error) {
            refetchUpdateLead();
        }
        closeDropdown(false);
    };

    return (
        <>
            <div className='dropdown'>
            <div className='close_button' >
                  <img src={closeIcon} alt="close" onClick={close}/>
            </div>
                <li>
                    <ul onClick={() => setShowUpdateModal(true)}>Edit</ul>
                    <ul onClick={() => setShowViewModal(true)}>View</ul>
                    <ul onClick={(e) => submitHandler(e)}>Delete</ul>
                </li>
            </div>
            {showUpdateModal && <UpdateClientModal key={index} closeModal={setShowUpdateModal} clientCurrentId={clientCurrentId} />}
            {showViewModal && <ViewModal closeModal={setShowViewModal} clientCurrentId={clientCurrentId}/>}
        </>
    )
}

export default Dropdown;
